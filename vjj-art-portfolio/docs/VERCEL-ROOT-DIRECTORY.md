# Vercel Root Directory Configuration

## ⚠️ IMPORTANT FOR FUTURE MAINTAINERS

This Next.js app is located in the `vjj-art-portfolio/` subdirectory of the repository.

**The Root Directory MUST be set to `vjj-art-portfolio` in the Vercel Dashboard:**

1. Go to **Vercel Dashboard → Your Project → Settings → General**
2. Find **"Root Directory"** field
3. Set it to: `vjj-art-portfolio`
4. Click **"Save"** and redeploy

## Why This Is Needed

The repository structure is:
```
repository-root/
  └── vjj-art-portfolio/
      ├── package.json      ← Next.js app is here
      ├── next.config.ts
      ├── app/
      └── ...
```

Without the Root Directory setting, Vercel will look for `package.json` at the repository root (where it doesn't exist), causing deployment failures with errors like "No Next.js version detected".

## Configuration Notes

The `vercel.json` file contains build configuration (`installCommand`, `buildCommand`, `framework`), but **the root directory cannot be set in vercel.json** — it must be configured in the Vercel Dashboard UI.

**Important:** You should verify this setting in the Vercel Dashboard (Settings → General → Root Directory) to ensure correct deployment behavior.
