const axios = require('axios');

const WALLET = process.env.TALENT_WALLET || '';

async function getBuilderScore(wallet) {
  try {
    const res = await axios.get(
      `https://api.talentprotocol.com/api/v2/passports/${wallet}`,
      { headers: { 'X-API-KEY': process.env.TALENT_API_KEY || '' } }
    );
    const data = res.data.passport;
    return {
      score: data.score,
      rank: data.activity_score,
      nominations: data.nominations_received_count,
      human_checkmark: data.human_checkmark
    };
  } catch (e) {
    return { error: e.message };
  }
}

module.exports = { getBuilderScore };
