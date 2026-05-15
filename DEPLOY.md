# Portfolio Deployment Guide

## Deploy to Vercel (Free)

### Step 1: Create Vercel Account
- Go to https://vercel.com
- Click "Sign Up"
- Select "Continue with GitHub"
- Authorize with your Poojitha319 GitHub account

### Step 2: Import Project
- Click "Add New..." -> "Project"
- You'll see your GitHub repos listed
- Find and click "portfolio"
- Click "Import"

### Step 3: Configure
- Framework Preset: **Next.js** (auto-detected)
- Root Directory: leave as `.` (default)
- Build Command: leave as default (`next build`)
- Output Directory: leave as default
- No environment variables needed
- Click **"Deploy"**

### Step 4: Wait for Build
- Vercel will build your site (takes 1-2 minutes)
- You'll see a green checkmark when done
- You'll get a URL like: `portfolio-poojitha319.vercel.app`

### Step 5: Custom Domain (Optional)
- Go to your project on Vercel dashboard
- Click "Settings" -> "Domains"
- Add a custom domain if you have one (e.g., poojitha.dev)
- Or use the free `.vercel.app` URL

## After Deployment

### Making Changes
Any time you update your portfolio:
```bash
cd D:/jay/poojitha/dream/projects/portfolio
git add -A
git commit -m "update: description of what changed"
git push
```
Vercel auto-deploys within 1-2 minutes. No manual action needed.

### Common Updates
- Edit `src/data/resume.tsx` for content changes (projects, skills, hackathons, etc.)
- Add images to `public/` folder
- Blog posts go in `content/` folder as `.mdx` files

### Checking Deployment Status
- Go to https://vercel.com/dashboard
- Click your project
- See build logs and deployment history

## Troubleshooting

**Build fails?**
- Check the build logs on Vercel dashboard
- Run `pnpm build` locally to see the same errors
- Fix, commit, push — Vercel will retry automatically

**Images not showing?**
- Make sure images are in `public/` folder
- Use paths like `/me.jpg` (not `public/me.jpg`)
- Push the images to GitHub (`git add public/`)

**Custom domain not working?**
- Add CNAME record pointing to `cname.vercel-dns.com`
- Wait 24-48 hours for DNS propagation
