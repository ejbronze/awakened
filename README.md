# AWAKENED 🎮

A side-scrolling platformer where you start as nobody and grow into power.

## Play

Open `index.html` in any browser — no build step required.

## Controls

| Key | Action |
|-----|--------|
| `← → / A D` | Move |
| `Space / W / ↑` | Jump |
| `Shift` | Dash *(unlocks at Power 3)* |
| `Z / X` | Attack *(unlocks at Power 2)* |

Mobile: on-screen buttons appear automatically on touch devices.

## Power Progression

| Level | Score | Unlocks |
|-------|-------|---------|
| 1 | Start | Run & jump |
| 2 | 350 | Double jump + Punch |
| 3 | 700 | Dash + Ranged shot |
| 4 | 1050 | Wall climb + wall jump |
| 5 | 1400 | Burst attack (8-directional) |

## Biomes

The world shifts darker as your score climbs:

1. **Sunny Fields** — bright, forgiving, few enemies
2. **Neon Ruins** — darker, faster enemies
3. **Dark Cavern** — low light, tougher foes
4. **Stormy Skies** — moving platforms, enemies shoot
5. **Ember Wastes** — everything wants you dead

High scores are saved in `localStorage`.

---

## Deploy to GitHub + Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial: awakened platformer"
gh repo create awakened --public --push
```

### 2. Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm i -g vercel
vercel
# Follow prompts, select "Static Site"
```

**Option B — Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Framework Preset: **Other**
4. Click **Deploy** — done!

Your game will be live at `https://awakened-[hash].vercel.app`.

---

## Roadmap (post-MVP)

- [ ] Sound effects & music (Web Audio API)
- [ ] Animated sprite sheets
- [ ] Boss encounters every 5 biomes
- [ ] Local co-op (2 players, same keyboard)
- [ ] Level editor
