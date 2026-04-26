const https = require('https');

const TTC_BASE = 'https://retro.umoiq.com/service/publicJSONFeed';

module.exports = (req, res) => {
  const params = new URLSearchParams({ a: 'ttc', ...req.query });
  const ttcUrl = `${TTC_BASE}?${params}`;

  https.get(ttcUrl, (ttcRes) => {
    let body = '';
    ttcRes.on('data', chunk => body += chunk);
    ttcRes.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.end(body);
    });
  }).on('error', e => {
    res.status(502).json({ error: e.message });
  });
};
