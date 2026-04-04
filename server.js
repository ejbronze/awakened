// AWAKENED — High Score Server
// Run with: node server.js
// Then set SCORE_SERVER = 'http://localhost:3001' in index.html
//
// Requires: npm install express cors

const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');

const app  = express();
const PORT = 3001;
const DB   = path.join(__dirname, 'scores.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve the game too

// Load or init scores file
function loadScores() {
  try { return JSON.parse(fs.readFileSync(DB, 'utf8')); }
  catch { return []; }
}
function saveScores(scores) {
  fs.writeFileSync(DB, JSON.stringify(scores, null, 2));
}

// GET /scores — return top 10
app.get('/scores', (req, res) => {
  const scores = loadScores().slice(0, 10);
  res.json(scores);
});

// POST /scores — submit a score
app.post('/scores', (req, res) => {
  const { name, score, level } = req.body;
  if (!name || typeof score !== 'number') return res.status(400).json({ error: 'bad input' });
  const scores = loadScores();
  scores.push({ name: String(name).slice(0,12).toUpperCase(), score: Math.floor(score), level: level || 1, date: new Date().toISOString() });
  scores.sort((a, b) => b.score - a.score);
  saveScores(scores.slice(0, 100));
  res.json({ ok: true, rank: scores.findIndex(s => s.name === name && s.score === score) + 1 });
});

app.listen(PORT, () => {
  console.log(`AWAKENED score server running at http://localhost:${PORT}`);
  console.log(`Set SCORE_SERVER = 'http://localhost:${PORT}' in index.html to enable.`);
});
