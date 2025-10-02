# SUBZERO MINI BOT
---
A powerful multi-device WhatsApp bot with 50+ features built with Baileys MD.

<img src="https://mrfrankk-cdn.hf.space/mrfrank/mini/menu.png">

---

# 🚀 Quick Deploy
## Heroku
Deploy on <a href="https://dashboard.heroku.com/new?template=https://github.com/mrfr8nk/subzeromini/tree/main">Heroku</a>

## Koyeb 
Deploy on <a href="koyeb.com">Koyeb</a>

## Railway
Deploy on <a href="railway.app">Railway</a>

## Render
Deploy on <a href ="render.com">Render</a>

---

# ✨ Features

## Core Features

· Multi-device support
· Auto session backup to GitHub
· Auto reconnect
· Baileys MD framework

## Media Downloaders

· YouTube (audio & video)
· TikTok videos
· Facebook videos
· Instagram content
· Pinterest images
· MediaFire files
· APK downloads

## Search & Information

· IMDb movie info
· GitHub user lookup
· NPM package search
· Weather information
· News updates
· Cricket scores
· Anime videos

## AI & Creative

· AI chat (GPT-powered)
· AI image generation
· Logo maker
· Fancy text generator
· QR code generator/reader

## Utility Tools

· CDN upload
· URL shortener
· Website screenshot
· Profile info lookup
· Set profile picture

## Admin Features

· Session management
· Broadcast messages
· Settings panel
· Auto backup

## 🛠️ Local Installation

# Prerequisites

· Node.js 16+
· GitHub account
· WhatsApp number

# Setup Steps

1. Clone the repository

```bash
git clone https://github.com/mrfr8nk/subzero-mini.git
cd subzero-mini
```

1. Install dependencies

```bash
npm install
```

1. Create environment file

```bash
# Create .env file
echo "GITHUB_TOKEN=your_github_token_here" > .env
echo "GITHUB_OWNER=your_github_username" >> .env
echo "GITHUB_REPO=subzero-mini" >> .env
```

1. Get GitHub Token
   · Go to GitHub Settings → Developer settings → Personal access tokens
   · Generate new token with repo permissions
   · Copy token to your .env file
2. Run the bot

```bash
npm start
```

1. Pair your number
   · Visit: http://localhost:7860/pair?number=YOUR_NUMBER
   · Replace YOUR_NUMBER with your WhatsApp number (include country code)
   · Scan the QR code with WhatsApp

⚙️ Environment Variables

Variable Required Description
`GITHUB_TOKEN` Yes GitHub Personal Access Token
`GITHUB_OWNER` Yes Your GitHub username
`GITHUB_REPO` Yes Repository name


📱 Basic Commands

```
.menu          - Main menu with all categories
.alive         - Check bot status  
.ping          - Test response speed
.help          - All commands list
```

Media Download Examples

```
.song baby shark          - Download YouTube audio
.tiktok [url]            - Download TikTok video
.fb [url]                - Download Facebook video
.ig [url]                - Download Instagram content
.apk islam360            - Download APK file
```

Search Commands

```
.imdb avengers            - Movie information
.gitstalk mrfr8nk        - GitHub user info
.weather london          - Weather information
.news                    - Latest news
.cricket                 - Cricket updates
```

AI Commands

```
.ai [question]           - Chat with AI
.aiimg [prompt]         - Generate AI image
.logo [text]            - Create text logo
.fancy [text]           - Fancy text styles
```

👑 Admin Commands

```
.sessions      - View all active sessions
.settings      - Bot configuration panel  
.broadcast     - Send message to all users
.setpp         - Set bot profile picture (reply to image)
.restart       - Restart bot
.stats         - Bot statistics
```

🔧 API Endpoints

Endpoint Method Description
/ GET Home page
/pair?number=XXX GET Pair new number
/active GET View active sessions
/reconnect GET Reconnect all sessions
/ping GET Health check

🏗️ Project Structure

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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📞 Support

Developer: Mr Frank OFC
WhatsApp: +263 719 647 303
GitHub: github.com/mrfr8nk
Email: mrfr4nkofc@gmail.com com

## Support Channels

· WhatsApp: Direct message for support
· GitHub Issues: Bug reports & feature requests
· Documentation: This README

## ⚠️ Troubleshooting

Common Issues

QR Code Not Generating

· Check if number includes country code
· Verify server is running properly
· Check environment variables

Session Not Saving

· Verify GitHub token has repo permissions
· Check repository exists and is accessible
· Ensure environment variables are correct

## Media Downloads Failing

· Some APIs may have rate limits
· Check internet connectivity
· Try different download sources

## 🔒 Security

· Session encryption via Baileys
· GitHub token protected
· Admin-only sensitive commands
· OTP verification for critical operations

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

· Baileys MD - @adiwajshing

· APIs - Various third-party services

· Development - Mr Frank OFC

---


> Made with ❤️ by Mr Frank OFC

```Subzero MD Mini Bot - Powerful, Reliable, Feature-Rich```
