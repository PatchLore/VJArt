#!/usr/bin/env python3
import csv
import os
import time
from pathlib import Path
from typing import Optional, Tuple

import requests
import tldextract
from bs4 import BeautifulSoup
from dotenv import load_dotenv


def load_environment() -> Tuple[str, str]:
    load_dotenv()
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        raise RuntimeError("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.")
    return url, key


def fetch_companies(base_url: str, key: str) -> list[dict]:
    query_params = {
        "select": "id,name,description,logo_url,website",
        "or": "description.ilike.*YC%20directory*,description.ilike.*YC%20OSS%20JSON*,logo_url.ilike.*ycombinator.com*,logo_url.ilike.*default-logo*",
    }
    headers = {"apikey": key, "Authorization": f"Bearer {key}"}
    response = requests.get(f"{base_url}/rest/v1/companies", params=query_params, headers=headers, timeout=30)
    response.raise_for_status()
    return response.json()


def extract_meta_description(soup: BeautifulSoup) -> Optional[str]:
    tag = soup.find("meta", attrs={"name": "description"})
    if tag and tag.get("content"):
        return tag["content"].strip()
    return None


def extract_first_paragraph(soup: BeautifulSoup) -> Optional[str]:
    for p in soup.find_all("p"):
        text = p.get_text(" ", strip=True)
        if text:
            return text[:200]
    return None


def fetch_description(website: Optional[str]) -> Optional[str]:
    if not website:
        return None
    try:
        response = requests.get(website, timeout=20)
        response.raise_for_status()
    except requests.RequestException:
        return None

    soup = BeautifulSoup(response.text, "html.parser")
    description = extract_meta_description(soup)
    if description:
        return description
    return extract_first_paragraph(soup)


def resolve_domain(url: Optional[str]) -> Optional[str]:
    if not url:
        return None
    if not url.startswith("http://") and not url.startswith("https://"):
        url = f"https://{url}"
    extracted = tldextract.extract(url)
    if not extracted.domain or not extracted.suffix:
        return None
    return ".".join(part for part in [extracted.domain, extracted.suffix] if part)


def fetch_logo(domain: Optional[str]) -> Optional[str]:
    if not domain:
        return None
    clearbit_url = f"https://logo.clearbit.com/{domain}"
    try:
        clearbit_resp = requests.get(clearbit_url, timeout=10)
        if clearbit_resp.status_code == 200:
            return clearbit_url
    except requests.RequestException:
        pass
    favicon_url = f"https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://{domain}&size=128"
    try:
        favicon_resp = requests.get(favicon_url, timeout=10)
        if favicon_resp.status_code == 200:
            return favicon_url
    except requests.RequestException:
        pass
    return None


def update_company(base_url: str, key: str, company_id: int, payload: dict) -> None:
    headers = {
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
    }
    response = requests.patch(
        f"{base_url}/rest/v1/companies",
        params={"id": f"eq.{company_id}"},
        json=payload,
        headers=headers,
        timeout=30,
    )
    response.raise_for_status()


def ensure_log_file(path: Path) -> None:
    if not path.parent.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        with path.open("w", newline="", encoding="utf-8") as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(
                ["id", "name", "old_description", "new_description", "old_logo", "new_logo"]
            )


def log_change(path: Path, row: list) -> None:
    with path.open("a", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(row)


def main() -> None:
    base_url, key = load_environment()
    try:
        companies = fetch_companies(base_url, key)
    except requests.RequestException as exc:
        raise SystemExit(f"Failed to fetch companies: {exc}") from exc

    log_path = Path("data/cleanup_log.csv")
    ensure_log_file(log_path)

    description_updates = 0
    logo_updates = 0

    for company in companies:
        company_id = company["id"]
        name = company.get("name", "")
        old_description = company.get("description") or ""
        old_logo = company.get("logo_url") or ""
        website = company.get("website") or ""

        new_description = old_description
        description_candidate = fetch_description(website)
        if description_candidate and description_candidate != old_description:
            new_description = description_candidate

        domain = resolve_domain(website)
        new_logo = old_logo
        logo_candidate = fetch_logo(domain)
        if logo_candidate and logo_candidate != old_logo:
            new_logo = logo_candidate

        payload = {}
        if new_description != old_description:
            payload["description"] = new_description
            description_updates += 1
        if new_logo != old_logo:
            payload["logo_url"] = new_logo
            logo_updates += 1

        log_change(
            log_path,
            [
                company_id,
                name,
                old_description,
                new_description,
                old_logo,
                new_logo,
            ],
        )

        if payload:
            try:
                update_company(base_url, key, company_id, payload)
            except requests.RequestException as exc:
                print(f"⚠️  Failed to update company {company_id} ({name}): {exc}")
            time.sleep(0.5)

    print(f"✅ Fixed {description_updates} descriptions and {logo_updates} logos.")


if __name__ == "__main__":
    main()

