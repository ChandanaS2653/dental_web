# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign up/Login with your GitHub account

3. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

4. **Configure Build Settings**
   - **Build command:** `pnpm build:netlify`
   - **Publish directory:** `dist/public`
   - **Base directory:** (leave empty or use root)
   - Click "Deploy site"

5. **Wait for deployment** - Netlify will automatically:
   - Install dependencies (`pnpm install`)
   - Run the build command
   - Deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   # Follow the prompts:
   # - Create & configure a new site
   # - Build command: pnpm build:netlify
   # - Publish directory: dist/public
   
   # Deploy
   netlify deploy --prod
   ```

### Option 3: Drag & Drop (Quick Test)

1. **Build locally first**
   ```bash
   pnpm build:netlify
   ```

2. **Go to Netlify Dashboard**
   - Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist/public` folder

## Environment Variables (Optional)

If you need environment variables, add them in Netlify:
- Go to Site settings → Environment variables
- Add any `VITE_*` variables you need

## Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Build Configuration

The project is already configured with `netlify.toml`:
- Build command: `pnpm build:netlify`
- Publish directory: `dist/public`
- SPA routing configured (all routes redirect to index.html)

## Troubleshooting

**Build fails?**
- Check Netlify build logs
- Ensure Node.js version is 18+ (configured in netlify.toml)
- Make sure `pnpm` is available (Netlify auto-detects it)

**404 errors on routes?**
- The `netlify.toml` already has redirect rules configured
- If issues persist, check the redirects section

**Assets not loading?**
- Ensure all assets are in `client/public/` folder
- Check that paths use relative URLs (not absolute)

## Notes

- Netlify automatically detects `pnpm` from `packageManager` field
- The build only creates the frontend (no Express server needed)
- All routes are handled client-side (SPA routing)

