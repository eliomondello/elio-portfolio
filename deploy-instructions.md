# Deployment Instructions for Elio Mondello Website

## Your Website is Ready!

The production build is complete and located in the `dist` folder.

## Option 1: Deploy to GitHub Pages (Recommended - FREE & PERMANENT)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `elio-portfolio` (or any name you prefer)
3. Keep it Public (required for free GitHub Pages)
4. Do NOT initialize with README
5. Click "Create repository"

### Step 2: Upload Your Website
Run these commands in your terminal (replace YOUR-USERNAME with your GitHub username):

```bash
cd /home/ubuntu/elio-website
git add .
git commit -m "Initial commit - Multilingual portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/elio-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository Settings
2. Click "Pages" in the left sidebar
3. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: Select "main" and "/dist" folder
   - Click "Save"

### Step 4: Get Your Permanent URL
After 1-2 minutes, your site will be live at:
`https://YOUR-USERNAME.github.io/elio-portfolio/`

## Option 2: Deploy to Netlify (Alternative - FREE & PERMANENT)

### Via Netlify Drop (No Account Needed)
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `dist` folder
3. You'll get a permanent URL like: `https://random-name-123.netlify.app`
4. You can claim the site and customize the URL later

### Via Netlify CLI (If you have Node.js)
```bash
npm install -g netlify-cli
cd /home/ubuntu/elio-website
netlify deploy --prod --dir=dist
```

## Option 3: Traditional Web Hosting

### Upload via FTP/File Manager
1. Compress the dist folder: `cd /home/ubuntu/elio-website && zip -r website.zip dist/*`
2. Download the zip file
3. Upload contents to your web hosting root directory
4. Ensure your hosting supports single-page applications

## Redirecting eliomondello.com

Once you have your permanent URL (from GitHub Pages or Netlify), configure the redirect in WordPress.com:

### Method 1: Site Redirect (Recommended)
1. Go to WordPress.com Dashboard
2. Settings → General
3. Look for "Site Address" or domain settings
4. Set up a redirect to your new permanent URL

### Method 2: DNS Configuration
1. Go to WordPress.com → Domains → DNS
2. Add a CNAME record pointing to your hosting URL
3. Or use URL forwarding if available

### Method 3: Domain Transfer
If you own the domain, you can:
1. Point the domain to GitHub Pages or Netlify
2. Follow their custom domain setup guides

## Testing Your Deployment

After deployment, verify:
- [ ] All three languages work (English, Italian, Norwegian)
- [ ] Language switcher functions correctly
- [ ] All images load properly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design works
- [ ] All links and buttons function

## Current Test URL
https://8088-ifwuotshjfeiv0dsmbw1c-22a1758c.manusvm.computer

## Need Help?
- GitHub Pages Guide: https://pages.github.com/
- Netlify Documentation: https://docs.netlify.com/
- WordPress.com Domain Redirect: https://wordpress.com/support/domains/
