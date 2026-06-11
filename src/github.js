const axios = require('axios');

const USERNAME = process.env.GITHUB_USERNAME || 'alinasisi';
const TOKEN = process.env.GH_PAT || '';

async function getGitHubStats() {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${USERNAME}`,
      { headers: { Authorization: `token ${TOKEN}` } }
    );
    const u = res.data;
    const score =
      u.public_repos * 0.5 +
      u.followers * 1 +
      u.public_gists * 0.5;
    let level = 'Aspiring';
    if (score > 500) level = '🏆 Legend';
    else if (score > 200) level = '⭐ Superstar';
    else if (score > 100) level = '📈 Influencer';
    return {
      followers: u.followers,
      repos: u.public_repos,
      score: Math.round(score),
      level
    };
  } catch (e) {
    return { error: e.message };
  }
}

module.exports = { getGitHubStats };
