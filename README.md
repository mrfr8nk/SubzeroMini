🤖 SUBZERO MD MINI BOT

<div align="center">

https://mrfrankk-cdn.hf.space/mrfrank/mini/menu.png

A Powerful Multi-Device WhatsApp Bot with 50+ Features

https://www.koyeb.com/static/images/deploy/button.svg https://railway.app/button.svg https://render.com/images/deploy-to-render-button.svg

Built with Baileys MD • Multi-Device Support • 24/7 Active

</div>

✨ FEATURES

🤖 Core Features

· ✅ Multi-Device Support - Connect multiple numbers simultaneously
· ✅ Auto Session Backup - GitHub-based session storage
· ✅ Auto Reconnect - Automatic recovery on disconnect
· ✅ Baileys MD - Latest WhatsApp Web protocol

📥 Media Downloaders

· 🎵 YouTube - Audio & video downloads with quality options
· 📹 TikTok - Video & audio extraction
· 📹 Facebook - Video downloader
· 📷 Instagram - Reels & posts download
· 🖼️ Pinterest - Image batch downloads
· 📦 MediaFire - File downloader
· 📱 APK Downloader - Direct APK downloads

🔍 Search & Information

· 🎬 IMDb - Movie information & ratings
· 👤 GitHub Stalk - User profile information
· 📦 NPM Search - Package information
· 🌤️ Weather - Real-time weather data
· 📰 News - Latest news from multiple sources
· 🏏 Cricket - Live scores & updates
· 🎌 Anime - Anime video downloads

🎨 AI & Creative

· 🤖 AI Chat - GPT-powered conversations
· 🎨 AI Image Generation - Text-to-image creation
· 🎯 Logo Maker - Custom text logos
· ✨ Fancy Text - Text styling & formatting
· 📟 QR Code - Generation & reading

⚙️ Utility Tools

· ☁️ CDN Upload - Media to URL conversion
· 🔗 URL Shortener - Link shortening service
· 📸 Screenshot - Website screenshots
· 👤 Profile Info - User information lookup
· 🖼️ Set Profile Picture - Change bot DP

👑 Admin Features

· 📊 Session Management - View & control all sessions
· 📢 Broadcast - Send messages to multiple users
· ⚙️ Settings Panel - Dynamic configuration
· 🔄 Auto Backup - GitHub-based session storage

🔄 Automation

· 👀 Auto Status View - Automatic status viewing
· ❤️ Auto Like - Automatic status reactions
· 📰 Newsletter Auto-follow - Automatic channel following
· 🗑️ Anti-delete - Message deletion detection
· ⏺️ Auto Recording - Automatic recording presence

🚀 QUICK DEPLOY

Option 1: Koyeb (Recommended - Always Free)

https://www.koyeb.com/static/images/deploy/button.svg

1. Click the Koyeb button above
2. Connect your GitHub account
3. Add environment variables:
   · GITHUB_TOKEN - Your GitHub Personal Access Token
   · GITHUB_OWNER - Your GitHub username
   · GITHUB_REPO - Repository name
4. Deploy!

Option 2: Railway

https://railway.app/button.svg

1. Click Railway button
2. Fork repository first
3. Add environment variables in Railway dashboard
4. Deploy automatically

Option 3: Render

https://render.com/images/deploy-to-render-button.svg

1. Click Render button
2. Connect GitHub repository
3. Set environment variables
4. Deploy web service

🛠️ LOCAL INSTALLATION

Prerequisites

· Node.js 16 or higher
· GitHub Account
· WhatsApp Number

Step-by-Step Setup

1. Clone Repository

```bash
git clone https://github.com/mrfr8nk/subzero-mini.git
cd subzero-mini
```

1. Install Dependencies

```bash
npm install
```

1. Create Environment File

```bash
# Create .env file
cat > .env << EOL
GITHUB_TOKEN=your_github_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO=subzero-mini
EOL
```

1. Get GitHub Token
   · Go to GitHub Settings → Developer settings → Personal access tokens
   · Generate new token with repo permissions
   · Copy token to your .env file
2. Run the Bot

```bash
npm start
```

1. Pair Your Number
   · Visit http://localhost:3000/pair?number=YOUR_NUMBER
   · Replace YOUR_NUMBER with your WhatsApp number (include country code)
   · Scan the QR code with WhatsApp

⚙️ ENVIRONMENT VARIABLES

Variable Required Description Example
GITHUB_TOKEN ✅ GitHub Personal Access Token ghp_abc123...
GITHUB_OWNER ✅ Your GitHub username yourusername
GITHUB_REPO ✅ Repository name subzero-mini
OWNER_NUMBER ❌ Bot owner number 263719647303
PREFIX ❌ Command prefix .

📱 BOT USAGE

Basic Commands

```bash
.menu          # Main menu with all categories
.alive         # Check bot status
.ping          # Test response speed
.help          # All commands list
```

Media Download Examples

```bash
.song baby shark          # Download audio from YouTube
.tiktok https://vm.tiktok.com/ABC123  # Download TikTok video
.fb https://facebook.com/...  # Download Facebook video
.ig https://instagram.com/... # Download Instagram content
.apk islam360             # Download APK file
```

Search Commands

```bash
.imdb avengers            # Movie information
.gitstalk mrfr8nk        # GitHub user info
.weather london          # Weather information
.news                    # Latest news
.cricket                 # Cricket updates
```

AI Commands

```bash
.ai what is artificial intelligence?  # Chat with AI
.aiimg cute cat wearing hat          # Generate AI image
.logo Subzero                        # Create text logo
.fancy hello world                   # Fancy text styles
```

🎯 ADMIN COMMANDS

Session Management

```bash
.sessions      # View all active sessions
.settings      # Bot configuration panel
.broadcast     # Send message to all users
```

Owner Only

```bash
.setpp         # Set bot profile picture (reply to image)
.restart       # Restart bot
.stats         # Bot statistics
```

🔧 API ENDPOINTS

Endpoint Method Description
/ GET Home page
/pair?number=XXX GET Pair new number
/active GET View active sessions
/reconnect GET Reconnect all sessions
/ping GET Health check

🏗️ PROJECT STRUCTURE

```
subzero-mini/
├── session/              # Session storage
├── admin.json           # Admin list
├── numbers.json         # Connected numbers
├── index.js            # Main application
├── msg.js              # Message handlers
├── .env               # Environment variables
└── package.json       # Dependencies
```

🤝 CONTRIBUTING

We welcome contributions! Please feel free to submit pull requests.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

📞 SUPPORT

Developer Contact

· Developer: Mr Frank OFC
· WhatsApp: +263 719 647 303
· GitHub: @mrfr8nk
· Email: mrfr8nk@protonmail.com

Support Channels

· 📱 WhatsApp: Direct message for support
· 🐛 GitHub Issues: Bug reports & feature requests
· 📚 Documentation: This README

⚠️ TROUBLESHOOTING

Common Issues

QR Code Not Generating

· Check if number includes country code
· Verify server is running properly
· Check environment variables

Session Not Saving

· Verify GitHub token has repo permissions
· Check repository exists and is accessible
· Ensure environment variables are correct

Media Downloads Failing

· Some APIs may have rate limits
· Check internet connectivity
· Try different download sources

Logs & Debugging

```bash
# Check application logs
npm start

# For deployment platforms
# Check platform-specific logs dashboard
```

🔒 SECURITY

· ✅ Session encryption via Baileys
· ✅ GitHub token protected
· ✅ Admin-only sensitive commands
· ✅ OTP verification for critical operations

📄 LICENSE

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 CREDITS

· Baileys MD - @adiwajshing
· APIs - Various third-party services
· Development - Mr Frank OFC

🆘 NEED HELP?

If you encounter any issues:

1. Check this README first
2. Check GitHub Issues for similar problems
3. Contact developer on WhatsApp
4. Create a new GitHub issue

---

<div align="center">

⭐ Don't forget to star the repository if you find this project useful!

Made with ❤️ by Mr Frank OFC

Subzero MD Mini Bot - Powerful, Reliable, Feature-Rich

</div>
