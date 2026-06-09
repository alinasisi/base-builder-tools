# Base Builder Tools

Open-source toolkit for Base ecosystem builders.

## Features
- Daily Builder Score tracking via Talent Protocol API
- Live hackathon monitoring (ETHGlobal, Base)
- GitHub Engagement metrics with level calculator
- Telegram notifications via GitHub Actions (runs daily at 9:00 UTC)

## Setup

1. Fork this repo
2. Add these secrets in Settings → Secrets:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `TALENT_WALLET`
   - `TALENT_API_KEY`
3. GitHub Actions runs automatically every day

## Built for Base ecosystem builders
Tracks credentials for [talent.app](https://talent.app) Builder Score.
