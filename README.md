🤖 SUBZERO MD MINI BOT - DEPLOYMENT GUIDE

Developer: Mr Frank OFC
Version: 2.0.0
Repository: GitHub Repository

---

📋 TABLE OF CONTENTS

1. Features Overview
2. Prerequisites
3. Local Setup
4. Environment Configuration
5. Deployment Guides
6. Troubleshooting
7. Maintenance

---

🚀 FEATURES OVERVIEW

🤖 CORE FEATURES

· Multi-device Support: Connect multiple WhatsApp numbers simultaneously
· Baileys MD Framework: Latest WhatsApp Web protocol implementation
· Auto-reconnection: Automatic session recovery on disconnect
· Session Management: GitHub-based session storage and synchronization

📱 MEDIA DOWNLOADERS

· YouTube: Audio and video downloads with quality options
· TikTok: Video and audio extraction
· Facebook: Video downloader
· Instagram: Reels and posts download
· Pinterest: Image batch downloads
· MediaFire: File downloader
· APK Downloader: Direct APK downloads

🔍 SEARCH & INFORMATION

· IMDb: Movie information and ratings
· GitHub Stalk: User profile information
· NPM Search: Package information
· Weather: Real-time weather data
· News: Latest news from multiple sources
· Cricket: Live scores and updates
· Zoom.lk: News search
· Cinesubz: Movie search

🎨 AI & CREATIVE

· AI Chat: GPT-powered conversations
· AI Image Generation: Text-to-image creation
· Logo Maker: Custom text logos
· Fancy Text: Text styling and formatting
· QR Code: Generation and reading

⚙️ UTILITY TOOLS

· CDN Upload: Media to URL conversion
· URL Shortener: Link shortening service
· Screenshot: Website screenshots
· Profile Info: User information lookup
· Weather: Location-based weather
· QR Code: Generate and scan QR codes

👑 ADMIN FEATURES

· Session Management: View and control all active sessions
· Broadcast: Send messages to multiple users
· Settings Panel: Dynamic configuration changes
· Auto-backup: GitHub-based session storage
· Multi-admin: Support for multiple administrators

🔄 AUTOMATION

· Auto Status View: Automatic status viewing
· Auto Like: Automatic status reactions
· Newsletter Auto-follow: Automatic channel following
· Anti-delete: Message deletion detection
· Auto Recording: Automatic recording presence

---

⚙️ PREREQUISITES

Required Accounts

· GitHub Account
· WhatsApp Account
· Deployment Platform Account (Render/Koyeb/Heroku/Railway)

Technical Requirements

· Node.js 16+
· Git
· GitHub Personal Access Token

---

🛠 LOCAL SETUP

Step 1: Clone Repository

```bash
git clone https://github.com/mrfr8nk/subzero-mini.git
cd subzero-mini
```

Step 2: Install Dependencies

```bash
npm install
```

Step 3: Environment Configuration

Create .env file:

```env
# GitHub Configuration
GITHUB_TOKEN=ghp_your_github_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_repo_name

# Bot Configuration (Optional)
OWNER_NUMBER=263719647303
PREFIX=.
MAX_RETRIES=3
```

Step 4: Generate GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with permissions:
   · repo (Full control of private repositories)
   · workflow (Update GitHub Action workflows)

Step 5: Run Locally

```bash
npm start
# or
node index.js
```

---

🔧 ENVIRONMENT CONFIGURATION

Required Environment Variables

Variable Description Example
GITHUB_TOKEN GitHub Personal Access Token ghp_abc123...
GITHUB_OWNER GitHub username/organization mrfr8nk
GITHUB_REPO Repository name subzero-mini

Optional Configuration

Variable Default Description
OWNER_NUMBER 263719647303 Bot owner's WhatsApp number
PREFIX . Command prefix
MAX_RETRIES 3 Connection retry attempts
PORT 3000 Server port

---

🚀 DEPLOYMENT GUIDES

1. 🎨 RENDER DEPLOYMENT

Steps:

1. Fork Repository to your GitHub account
2. Create Render Account at render.com
3. New Web Service → Connect GitHub repository
4. Configure Service:
   · Name: subzero-mini
   · Environment: Node
   · Region: Choose nearest
   · Branch: main
   · Root Directory: (leave empty)
   · Build Command: npm install
   · Start Command: npm start
5. Environment Variables:
   ```env
   GITHUB_TOKEN=your_github_token
   GITHUB_OWNER=your_username
   GITHUB_REPO=subzero-mini
   ```
6. Create Service

Render Specifications:

· Plan: Free tier available
· Bandwidth: 100GB/month free
· Build Time: 100 mins/month free
· Sleep: Auto-sleeps after 15 mins inactivity

2. 🌐 KOYEB DEPLOYMENT

Steps:

1. Sign Up at koyeb.com
2. Create App → GitHub deployment
3. Select Repository from your forked repo
4. Configure App:
   · App Name: subzero-mini
   · Environment: Node.js
   · Build Command: npm install
   · Run Command: npm start
5. Environment Variables: Add all required environment variables
6. Deploy

Koyeb Advantages:

· Always Free: 2 services free forever
· No Sleep: Services don't auto-sleep
· Global CDN: Multiple regions
· Auto HTTPS: SSL certificates

3. ⚡ RAILWAY DEPLOYMENT

Steps:

1. Sign Up at railway.app
2. New Project → Deploy from GitHub repo
3. Configure Variables:
   · Go to Project → Variables tab
   · Add all environment variables
4. Automatic Deployment:
   · Railway auto-detects Node.js app
   · Automatic builds on git push

Railway Specs:

· Free Tier: $5 credit monthly
· No Sleep: Services stay active
· Custom Domains: Free subdomains
· Database: PostgreSQL available

4. 🦸 HEROKU DEPLOYMENT

Steps:

1. Create Heroku Account at heroku.com
2. Install Heroku CLI:
   ```bash
   npm install -g heroku
   heroku login
   ```
3. Prepare App:
   ```bash
   # Add Procfile
   echo "web: npm start" > Procfile
   
   # Commit changes
   git add .
   git commit -m "Prepare for Heroku"
   ```
4. Deploy:
   ```bash
   heroku create your-app-name
   heroku config:set GITHUB_TOKEN=your_token
   heroku config:set GITHUB_OWNER=your_username
   heroku config:set GITHUB_REPO=subzero-mini
   git push heroku main
   ```

Heroku Notes:

· Free Tier Discontinued: Now requires credit card
· Eco Plan: $5/month for basic dyno
· Auto Deployment: GitHub integration available

---

🔐 SECURITY CONFIGURATION

GitHub Token Security

1. Never commit tokens to repository
2. Use environment variables in deployment platform
3. Regularly rotate tokens (every 90 days)
4. Use fine-grained tokens with minimal permissions

Bot Security Features

· OTP Verification for sensitive operations
· Admin-only commands protection
· Session encryption via Baileys
· Rate limiting on API calls

---

📊 BOT USAGE GUIDE

Initial Setup

1. Deploy bot to chosen platform
2. Access bot URL: https://your-app.render.com (or your domain)
3. Pair Number: Visit /pair?number=YOUR_NUMBER
4. Get QR Code: Scan with WhatsApp → Linked Devices

Basic Commands

```bash
.menu          # Main command menu
.alive         # Check bot status
.ping          # Check response time
.help          # All commands list
```

Admin Commands

```bash
.sessions      # View active sessions
.settings      # Bot configuration
.broadcast     # Send message to all users
```

---

🛠 TROUBLESHOOTING

Common Issues & Solutions

1. Session Not Saving

Problem: Sessions not persisting after restart Solution:

· Verify GitHub token has repo permissions
· Check repository exists and is accessible
· Ensure environment variables are set correctly

2. QR Code Not Generating

Problem: QR code endpoint returns error Solution:

· Check server logs for errors
· Verify number format (include country code)
· Ensure server has internet access

3. Media Downloads Failing

Problem: Download commands not working Solution:

· Check API endpoints are accessible
· Verify internet connectivity
· Some APIs may have rate limits

4. Bot Going Offline

Problem: Bot disconnects frequently Solution:

· Use platforms that don't sleep (Koyeb/Railway)
· Implement auto-reconnect in code
· Check deployment platform uptime

Logs & Monitoring

```bash
# Check application logs
heroku logs --tail
railway logs
koyeb service logs
```

---

🔄 MAINTENANCE

Regular Tasks

· Update dependencies monthly
· Rotate GitHub tokens quarterly
· Backup session data regularly
· Monitor deployment platform usage

Performance Optimization

· Use efficient platforms (Koyeb recommended)
· Implement connection pooling
· Cache frequently accessed data
· Monitor memory usage

Cost Management

· Free Options: Koyeb (best), Railway ($5 credit)
· Budget Options: Render (limited hours)
· Production: Heroku Eco ($5/month)

---

📞 SUPPORT & CONTACT

Developer Information

· Name: Mr Frank OFC
· WhatsApp: +263 719 647 303
· GitHub: mrfr8nk
· Email: mrfr8nk@protonmail.com

Support Channels

1. GitHub Issues: Bug reports and feature requests
2. WhatsApp: Direct developer contact
3. Documentation: Repository README

Credits

· Framework: Baileys MD (@adiwajshing)
· APIs: Multiple third-party services
· Deployment: Render, Koyeb, Railway, Heroku
· Development: Mr Frank OFC

---

🎯 RECOMMENDED DEPLOYMENT

🥇 BEST CHOICE: KOYEB

· ✅ Always free
· ✅ No sleep
· ✅ Global CDN
· ✅ Easy setup

🥈 SECOND CHOICE: RAILWAY

· ✅ $5 monthly credit
· ✅ No sleep
· ✅ Great performance

🥉 THIRD CHOICE: RENDER

· ⚠️ Free but sleeps
· ✅ Easy to use
· ✅ Good documentation

💰 PAID OPTION: HEROKU

· ❌ No free tier
· ✅ Reliable
· ✅ Extensive features

---

📝 FINAL NOTES

1. Always fork the repository before deployment
2. Keep your GitHub token secure
3. Test locally before deploying
4. Monitor your bot's performance
5. Join the support channel for updates

Happy Bot Building! 🚀

---

Documentation provided by Mr Frank OFC - Subzero MD Mini Bot v2.0.0
