const axios = require('axios');

async function getETHGlobalEvents() {
  try {
    const res = await axios.get('https://ethglobal.com/events.json');
    const upcoming = res.data
      .filter(e => new Date(e.startDate) > new Date())
      .slice(0, 5)
      .map(e => `🏆 ${e.name}\n📅 ${e.startDate}\n🔗 ${e.url}`);
    return upcoming.join('\n\n');
  } catch (e) {
    return `ETHGlobal fetch error: ${e.message}`;
  }
}

async function getTalentCampaigns() {
  try {
    const res = await axios.get(
      'https://api.talentprotocol.com/api/v2/campaigns',
      { headers: { 'X-API-KEY': process.env.TALENT_API_KEY || '' } }
    );
    const live = res.data.campaigns
      .filter(c => c.status === 'active')
      .map(c => `🎯 ${c.name}\n💰 ${c.reward}\n📅 Ends: ${c.end_date}`);
    return live.join('\n\n');
  } catch (e) {
    return `Talent campaigns error: ${e.message}`;
  }
}

module.exports = { getETHGlobalEvents, getTalentCampaigns };
