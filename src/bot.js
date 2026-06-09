require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { getBuilderScore } = require('./score');
const { getETHGlobalEvents, getTalentCampaigns } = require('./hackathons');
const { getGitHubStats } = require('./github');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendDailyReport() {
  const bot = new TelegramBot(TOKEN);

  const github = await getGitHubStats();
  const score = await getBuilderScore(process.env.TALENT_WALLET);
  const campaigns = await getTalentCampaigns();
  const hackathons = await getETHGlobalEvents();

  const msg = `
🔨 *Base Builder Daily Report*

📊 *GitHub*
Followers: ${github.followers}
Repos: ${github.repos}
Engagement Score: ${github.score} → ${github.level}

🏅 *Builder Score*
Score: ${score.score || 'N/A'}
Human Check: ${score.human_checkmark ? '✅' : '❌'}

🎯 *Live Campaigns*
${campaigns}

🏆 *Upcoming Hackathons*
${hackathons}
  `.trim();

  await bot.sendMessage(CHAT_ID, msg, { parse_mode: 'Markdown' });
  console.log('Report sent!');
}

sendDailyReport().catch(console.error);
