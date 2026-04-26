# TTC Missed Connections

> *To the 504 King streetcar I saw pulling away from Bathurst as I reached the top of the subway stairs: you were beautiful. I just wanted to get home.*

A web app that shows you, in real time, which TTC buses and streetcars just left the stop you're standing at. It does nothing to help you catch them. It simply lets you know they were there.

## What it does

You open a map of Toronto. Every TTC stop is a dot. You tap a stop. A panel slides up and tells you which vehicles have recently passed — how far away they are now, which direction they're heading, and a rough estimate of how many seconds ago your life diverged from theirs.

That's it. That's the whole app.

## Why

The TTC has a real-time vehicle location API. Most apps use it to tell you when the next bus is *coming*. This app uses it to tell you which bus you *just missed*. It is the pessimistic reading of the same data.

The name is a reference to Craigslist Missed Connections, a section of the internet where people post wistful notes to strangers they almost spoke to on public transit. The joke is that this app is a Missed Connections board, but for the vehicles themselves.

## Running it

```bash
node server.js
```

Then open [http://localhost:3000](http://localhost:3000). The server proxies requests to the TTC's public JSON feed to avoid CORS issues.

No build step. No framework. No database. Just a single HTML file and a tiny Node proxy, and the quiet grief of watching a bus drive away.
