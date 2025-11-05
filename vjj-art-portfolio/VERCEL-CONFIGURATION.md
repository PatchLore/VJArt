# ✅ Vercel Configuration Guide

## Project Structure

**Root Directory:** `/Users/allendunn/Documents/Mums Art/vjj-art-portfolio`

**Vercel Root Directory Setting:** `vjj-art-portfolio` (if your repo root is `/Users/allendunn/Documents/Mums Art`)

## ✅ Verified Configuration

### package.json ✅
- ✅ `"next": "16.0.0"` in dependencies
- ✅ `"react": "19.2.0"` in dependencies  
- ✅ `"react-dom": "19.2.0"` in dependencies
- ✅ `"build": "npm run type-check && next build"` script exists
- ✅ `"dev": "next dev"` script exists
- ✅ `"start": "next start"` script exists

### Configuration Files ✅
- ✅ `next.config.ts` exists at project root
- ✅ `tsconfig.json` exists at project root
- ✅ `package.json` exists at project root

### Build Test ✅
- ✅ Local build succeeds: `npm run build` completes successfully

## Vercel Dashboard Settings

### 1. Framework Preset
**Set to:** `Next.js` (Auto-detected)

Vercel should automatically detect Next.js 16. If it doesn't:
- Go to Settings → General → Framework Preset
- Select: **Next.js**

### 2. Root Directory
**Set to:** `vjj-art-portfolio`

**How to set:**
1. Go to Vercel Dashboard → Your Project → Settings
2. Scroll to "Root Directory"
3. Enter: `vjj-art-portfolio`
4. Click "Save"

**Important:** This is the **relative path from your repository root**. If your repo structure is:
```
your-repo/
  └── vjj-art-portfolio/
      ├── package.json
      ├── next.config.ts
      └── src/
```

Then Root Directory = `vjj-art-portfolio`

If your repo root IS the vjj-art-portfolio folder, then Root Directory should be **`.` (empty/root)**

### 3. Build & Development Settings

**Build Command:** `npm run build` (or leave empty for auto-detection)
**Output Directory:** `.next` (auto-detected)
**Install Command:** `npm install` (auto-detected)

### 4. Environment Variables

**Required:**
- `DATABASE_URL` - Your PostgreSQL connection string
  - Format: `postgresql://user:password@host:port/database`
  - Example: `postgresql://user:pass@localhost:5432/mydb`

**Optional (for build):**
- The build will work without DATABASE_URL, but API routes need it at runtime

### 5. Node.js Version

**Recommended:** Node.js 20.x or 18.x
- Vercel auto-detects from `.nvmrc` or `package.json` engines
- Next.js 16 works with Node 18.17+ or Node 20+

## Troubleshooting

### If Vercel Still Shows "No Next.js version detected"

1. **Check Root Directory:**
   - Verify it matches the folder containing `package.json`
   - If unsure, set it to `.` (root) and ensure `package.json` is at repo root

2. **Verify package.json Location:**
   ```bash
   # In your repo, run:
   find . -name "package.json" -type f
   ```
   - The `package.json` with `next` dependency should be at the root you specify

3. **Check Build Logs:**
   - Go to Vercel Dashboard → Deployments → Latest Deployment → Build Logs
   - Look for: "Detected Next.js version"
   - If missing, check if `npm install` is running and finding `next` package

4. **Manual Detection:**
   - If auto-detection fails, try adding a `vercel.json`:
   ```json
   {
     "framework": "nextjs",
     "buildCommand": "npm run build"
   }
   ```

### If Build Fails with Prisma Error

The `postinstall` script should auto-generate Prisma client. If it doesn't:
1. Ensure `DATABASE_URL` is set (can be dummy value for build)
2. Check build logs for Prisma generation step

### If Build Succeeds but Site Shows 404

1. Check that `src/app/page.tsx` exists (it does ✅)
2. Verify the deployment URL is correct
3. Check Runtime Logs for errors

## Current Status

✅ **All Requirements Met:**
- Next.js 16.0.0 in dependencies
- React 19.2.0 in dependencies
- React-DOM 19.2.0 in dependencies
- Build script configured
- Dev script configured
- Start script configured
- next.config.ts exists
- tsconfig.json exists
- Local build succeeds

## Next Steps

1. **Set Root Directory in Vercel:**
   - If repo root is parent folder: `vjj-art-portfolio`
   - If repo root is vjj-art-portfolio: `.` (empty)

2. **Push to Git and Deploy:**
   ```bash
   git add .
   git commit -m "Fix Vercel Next.js detection"
   git push
   ```

3. **Verify Deployment:**
   - Check Vercel dashboard for successful build
   - Look for "Detected Next.js version 16.0.0" in build logs
   - Site should be accessible at your Vercel URL

---

**Project Root:** `/Users/allendunn/Documents/Mums Art/vjj-art-portfolio`  
**Vercel Root Directory:** `vjj-art-portfolio` (or `.` if repo root is the project folder)

