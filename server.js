const express = require('express');

const app = express();

const path = require('path');

const PORT = 8080;

// Static Assets
app.use('/static', express.static(`${__dirname}/public/static`));
app.use('/iframe.html', express.static(`${__dirname}/public/iframe.html`));

app.get('/status', (req, res) => res.json({ ok: true }));

// Application endpoint
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html')),
);

app.listen(PORT, () => console.log(`Application listening on port ${PORT}`));