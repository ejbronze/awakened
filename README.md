# AWAKENED 🎮

A side-scrolling action platformer where you start as nobody and slowly become something far stronger. Run, jump, unlock powers, chase hidden routes, defeat bosses, and build toward the end of the world and beyond.

## Play

Open `index.html` in any browser — no build step required.

## Controls

| Key | Action |
|-----|--------|
| `← → / A D` | Move |
| `Space / W / ↑` | Jump |
| `Shift` | Dash *(unlocks at Power 3)* |
| `Z / X` | Attack *(unlocks at Power 2)* |
| `Esc` | Pause |
| `M` | Open / close menu |
| `Tab` | Toggle co-op on the start screen |

### Co-op Controls

| Key | Action |
|-----|--------|
| `J / L` | Move |
| `I / K` | Jump / down input |
| `U` | Attack |
| `O` | Dash |

Mobile: on-screen buttons appear automatically on touch devices.

## How to Score

- **Move with intent** — score only rises while actively moving, jumping, or dashing
- **Collect fruits** — apples, bananas, strawberries, oranges (+15 each)
- **Stomp enemies** — bounce on their heads to deal damage
- **Kill enemies** — defeat them for big score bonuses
- **Clear levels** — level-complete bonuses stack with your run

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

Hidden void stages can branch off from the main path. These secret levels are timed, darker, and use their own soundtrack and pressure systems.

## Current Features

- **Character select with preview** — choose a hero before the run, with live preview art and appearance styles
- **Distinct hero looks** — same core body shape, but each character has their own visual identity
- **Accessible in-run menu** — persistent menu button, pause hub, restart flow, and character bay
- **Local co-op** — second player joins with shared score and power progression
- **Boss encounters** — one boss per main level, with door locks and a boss prep pickup before the fight
- **Objectives and checkpoints** — fruit, enemy, checkpoint, and boss goals gate level exits
- **Hidden void routes** — timed secret stages with return doors, ticking pressure, and special pickups
- **Helper bot** — unlockable ally that follows you later in the game and can rescue you from a fall on cooldown
- **Special fruits** — flying donuts, speed donuts, and power orbs
- **Question boxes** — pop boxes from below to release stronger fruit rewards in a more intentional way
- **Jump-pad shaky platforms** — certain unstable platforms launch you upward when stepped on
- **Level editor** — build and save custom layouts from the pause menu

## Characters

- **The Nobody** — balanced baseline
- **The Shadow** — rogue-style start with early dash access
- **The Knight** — slower, sturdier tank
- **The Speedster** — fragile but fast
- **The Chosen** — berserker with stronger punches

Each character can also use alternate color styles from the menu.

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
- [x] Character select + character bay with live preview and style customization
- [x] Secret void routes with timers, ticking ambience, and return exits
- [x] Checkpoints, helper bot rescue, and objective-based level flow
- [x] Question boxes for special fruit rewards
