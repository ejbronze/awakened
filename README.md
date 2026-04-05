# AWAKENED 🎮

A side-scrolling platformer where you start as nobody and grow into power. Run, jump, collect fruits, dodge monsters, and survive as long as you can.

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

## How to Score

- **Survive** — score ticks up passively over time
- **Collect fruits** — apples, bananas, strawberries, oranges (+15 each)
- **Stomp enemies** — bounce on their heads to deal damage
- **Kill enemies** — defeat them for big score bonuses

## Power Progression

| Level | Score | Unlocks |
|-------|-------|---------|
| 1 | Start | Run & jump |
| 2 | 350 | Double jump + Punch |
| 3 | 700 | Dash + Ranged shot |
| 4 | 1050 | Wall climb + wall jump |
| 5 | 1400 | Burst attack (8-directional) |

## Enemies

Monsters patrol platforms and grow stronger as your score climbs:

- **Tier 1** — basic patrollers that chase on sight
- **Tier 2+** — start shooting projectiles at you
- All monsters have horns, glowing eyes, and fangs — avoid or eliminate them

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

- [x] Sound effects (Web Audio API — jump sounds)
- [x] Idle character animation
- [x] Fruit collectibles
- [x] Monster enemy sprites with horns & fangs
- [x] Background music (procedural per-level themes + secret area themes)
- [x] Animated sprite sheets (walk cycle legs, jump squash/stretch, land squash, enemy waddle)
- [x] Boss encounters — one boss per level, door locked until defeated, phase 2 enrage
- [x] Local co-op — Tab to toggle, P2 uses IJKL + U/O keys, shared score & power
- [x] Level editor — pause → Level Editor, drag platforms, place enemies/fruits, save/load per level
