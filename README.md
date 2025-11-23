# HashShop Landing Page

A modern, responsive landing page for HashShop - your premier destination for premium products.

## 🚀 Quick Start

Simply open `index.html` in your browser to view the landing page locally.

## 🌐 Deployment to Vercel

### Prerequisites
- A [Vercel account](https://vercel.com/signup)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for command-line deployment)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push this repository to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure your project:
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Follow the prompts to complete the deployment.

### Custom Domain Setup

After deployment, you can configure a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed by Vercel:
   - Add an A record pointing to Vercel's IP: `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually 5-10 minutes, can take up to 48 hours)

## 📁 Project Structure

```
hashshop-landing-page/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript for interactivity
├── vercel.json     # Vercel configuration
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## ✨ Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and optimized
- 🔍 SEO-friendly with meta tags
- 📧 Newsletter subscription form
- ♿ Accessible markup

## 🛠️ Technology Stack

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## 📝 Customization

To customize the landing page:

1. **Colors**: Edit CSS variables in `styles.css` under `:root`
2. **Content**: Modify text in `index.html`
3. **Features**: Add or remove feature cards in the features section
4. **Newsletter**: Connect the form to your email service provider

## 📄 License

All rights reserved © 2025 HashShop

---

**Status**: ✅ Ready for deployment
