const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');

const PORT = 3000;
const TTC_BASE = 'https://retro.umoiq.com/service/publicJSONFeed';

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  if (parsed.pathname === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) { res.writeHead(500); res.end('Error reading index.html'); return; }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  if (parsed.pathname === '/ttc') {
    const params = new URLSearchParams({ a: 'ttc', ...parsed.query });
    const ttcUrl = `${TTC_BASE}?${params}`;

    https.get(ttcUrl, (ttcRes) => {
      let body = '';
      ttcRes.on('data', chunk => body += chunk);
      ttcRes.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      });
    }).on('error', e => {
      res.writeHead(502);
      res.end(JSON.stringify({ error: e.message }));
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
