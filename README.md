<div align="center">
# 🔨 Base Builder Tools
**Daily AI-powered intelligence for Base ecosystem builders**
[![Daily Report](https://github.com/alinasisi/base-builder-tools/actions/workflows/daily-report.yml/badge.svg)](https://github.com/alinasisi/base-builder-tools/actions/workflows/daily-report.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Base](https://img.shields.io/badge/Built%20on-Base-0052FF?logo=coinbase)](https://base.org)
[![Talent Protocol](https://img.shields.io/badge/Talent-Protocol-8B5CF6)](https://talent.app)
[![OpenRouter](https://img.shields.io/badge/AI-OpenRouter-FF6B35)](https://openrouter.ai)

*Automated daily reports on Base ecosystem — hackathons, campaigns, GitHub metrics, and AI analysis*

[📊 View Latest Report](reports/) · [🏗 Base Ecosystem](https://base.org) · [🏆 Talent Protocol](https://talent.app)
</div>

---

## ✨ What This Does

Every day at a random time, this bot automatically:

- 🤖 **AI Analysis** — generates unique Base ecosystem insights using free LLM models with fallback
- 📊 **GitHub Metrics** — tracks engagement score, followers, repos
- 🏆 **Campaign Alerts** — monitors live Talent Protocol reward campaigns
- 🎯 **Hackathon Tracker** — watches ETHGlobal and Base hackathons
- 💾 **Auto-commits** — pushes daily reports to keep Builder Score growing

All powered by **GitHub Actions** — no server needed, runs 24/7 for free.

---

## 📁 Reports

Daily reports live in [`/reports`](reports/) — each one is unique AI-generated content about the Base ecosystem.

| Date | Topics |
|------|--------|
| [Latest →](reports/) | Base ecosystem analysis, builder tips, research notes |

---

## 🚀 How It Works

---

## 🛠 Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime |
| GitHub Actions | Free 24/7 scheduler |
| OpenRouter | AI with free model fallback |
| Talent Protocol API | Builder Score tracking |
| GitHub API | Metrics collection |
| ETHGlobal | Hackathon monitoring |

---

## ⚡ Setup Your Own

1. Fork this repo
2. Add these secrets in **Settings → Secrets → Actions**:

| Secret | Value |
|--------|-------|
| `GH_PAT` | GitHub token with `repo` + `workflow` scope |
| `OPENAI_API_KEY` | OpenRouter key from [openrouter.ai](https://openrouter.ai) |
| `TALENT_WALLET` | Your Base wallet `0x...` |

3. Go to **Actions** → **Daily Builder Report** → **Run workflow**
4. Check `reports/` folder — your first report appears in ~1 min

---

## 🔗 Links

- 🌐 **Base** — [base.org](https://base.org)
- 🏆 **Talent Protocol** — [talent.app](https://talent.app)
- 🎯 **ETHGlobal** — [ethglobal.com](https://ethglobal.com)
- 🤖 **OpenRouter** — [openrouter.ai](https://openrouter.ai)

---

<div align="center">
Built with ❤️ by [alinasisi.base.eth](https://talent.app/alinasisi.eth)

⭐ Star this repo if it helps your Builder Score!
</div>
