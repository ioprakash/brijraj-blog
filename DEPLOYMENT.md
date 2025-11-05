# Deployment Instructions for Vercel

## Option 1: Deploy via Vercel Website (Recommended)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository named `personal-blog` or `brijraj-blog`
   - Push your code:
   ```bash
   cd d:\code\personal-blog
   git init
   git add .
   git commit -m "Initial commit: Personal blog for Brijraj Kushwaha"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live at: `https://your-project-name.vercel.app`

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd d:\code\personal-blog
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - Project name? brijraj-kushwaha-blog
   - Directory? ./
   - Override settings? No

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Option 3: Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd d:\code\personal-blog
   netlify deploy --prod
   ```
   
   Follow the prompts:
   - Create & configure a new site? Yes
   - Team? (Select your team)
   - Site name? brijraj-kushwaha-blog
   - Publish directory? out

## Custom Domain Setup

After deployment, you can add a custom domain:

### For Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., brijrajkushwaha.com)
4. Follow DNS configuration instructions

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS records as instructed

## Environment Variables (if needed)

If you need to add environment variables:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### Netlify:
- Go to Site settings → Build & deploy → Environment
- Add environment variables

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → Automatic production deployment
- Push to other branches → Automatic preview deployments

## Your Site Information

- **Project Name**: Brijraj Kushwaha - Personal Blog
- **Framework**: Next.js 14
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Node Version**: 18+

## Troubleshooting

If deployment fails:
1. Ensure all dependencies are in package.json
2. Check that build completes successfully locally: `npm run build`
3. Verify Node.js version compatibility
4. Check deployment logs for specific errors

## Post-Deployment

After successful deployment:
1. Test all pages and links
2. Verify responsive design on mobile
3. Check SEO meta tags
4. Set up analytics (Google Analytics, Vercel Analytics, etc.)
5. Share your live URL!

Your site will be accessible at:
- Vercel: `https://brijraj-kushwaha-blog.vercel.app`
- Netlify: `https://brijraj-kushwaha-blog.netlify.app`
- Custom domain: Configure as needed
