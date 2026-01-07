# Vercel Configuration - Root Directory

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

The `vercel.json` file now includes `"rootDirectory": "vjj-art-portfolio"` to explicitly set the root directory. 

**Important:** Even if set in `vercel.json`, you should also verify this setting in the Vercel Dashboard (Settings → General → Root Directory) to ensure consistency. Some deployment scenarios may require the dashboard setting as well.
