# AWAKENED 🎮

A side-scrolling action platformer where you start as nobody and slowly become something far stronger. Run, jump, unlock powers, chase hidden routes, defeat bosses, and build toward the end of the world and beyond.

## Play

Open `index.html` in any browser — no build step required. Live at [awakened-three.vercel.app](https://awakened-three.vercel.app).

### First time playing?

The first time you start a run, a short **How To Play** walkthrough appears (4 quick cards: Move → Jump → Get Stronger → Your Goal). It shows the controls for whatever you're playing on — keyboard, tilt, thumbstick or buttons.

- **Skip** it any time (SKIP button, or `Esc`). Flip cards with `← →` / `Enter`, or tap NEXT / BACK.
- It only shows once. Replay it any time from **? HOW TO PLAY** on the start screen or in the pause menu.
- Each new power also pops up a short tip the moment you unlock it.

## Controls — keyboard

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

## Controls — phones & tablets

Play with the phone **sideways** (landscape). If you hold it upright, the game pauses and asks you to turn it. The game always fills the whole screen — on wide phones you simply see more of the level.

Pick a control style on the start screen (or any time from **MENU → CONTROLS**). Your choice is remembered.

| Style | Move | Jump | Dash | Attack |
|-------|------|------|------|--------|
| 👆 **TAP** *(default)* | **Hold** the left half = run left, **hold** the right half = run right | **Double-tap** (or swipe up). Double-tap again in midair = double jump | Swipe ← or → | **ATK** button |
| 📱 **TILT** | Tilt the phone — a little to walk, more to sprint | **Tap** anywhere | Swipe ← or → | **ATK** button |
| ⬚ **BUTTONS** | ◀ ▶ buttons (slide your thumb between them) | **JMP** | **DSH** + ◀ / ▶ | **ATK** |

- The **ATK** and **DSH** buttons only appear once you've unlocked those powers, so the screen stays clean at the start.
- TAP tip: on the second tap of a double-tap, keep your finger down — you'll jump *and* keep running that way.
- TILT tips: however you're holding the phone when the run starts counts as "standing still". **MENU → RE-CENTER** if it drifts, **TILT: INVERTED** if it goes the wrong way. iPhone asks permission to use motion the first time — tap **Allow** (if you don't, the game switches to TAP).
- For true fullscreen on iPhone, use Safari's **Share → Add to Home Screen** and open it from there. On Android it goes fullscreen when you tap to begin. On a computer, use the ⛶ button.

## How to Score

- **Move with intent** — score only rises while actively moving, jumping, or dashing
- **Collect fruits** — apples, bananas, strawberries, oranges (+15 each)
- **Stomp enemies** — bounce on their heads to deal damage
- **Kill enemies** — defeat them for big score bonuses
- **Clear levels** — level-complete bonuses stack with your run

## Power Progression

| Level | Score | Unlocks |
|-------|-------|---------|
| 1 | Start | Run, jump, double jump, wall jump |
| 2 | 350 | Punch |
| 3 | 700 | Dash + Ranged shot |
| 4 | 1050 | Wall climb (slide slowly down walls) |
| 5 | 1400 | Burst attack (8-directional) |

## Enemies

Monsters patrol platforms and grow stronger as your score climbs:

- **Tier 1** — basic patrollers that chase on sight
- **Tier 2+** — start shooting projectiles at you
- **Flower enemies** — stationary pop-up hazards that spit fireballs like pipe flowers
- All monsters have horns, glowing eyes, and fangs — avoid or eliminate them

## Biomes

The world now shifts through more distinct scenes as your run advances:

1. **Sunlit Riverlands** — bright outdoor stage with water and open space
2. **Neon City** — darker urban skyline with glowing signage
3. **Barrio Twilight** — warm hillside neighborhood feel with denser atmosphere
4. **Euro Stormfront** — stormy rooftops and old-city silhouettes
5. **Ember Wastes** — everything wants you dead

Hidden void stages can branch off from the main path. These secret levels are timed, darker, and use their own soundtrack and pressure systems, including a water-themed void with heavier movement drag.

## Current Features

- **Character select with preview** — choose a hero before the run, with live preview art and appearance styles
- **Distinct hero looks** — same core body shape, but each character has their own visual identity
- **Accessible in-run menu** — persistent menu button, pause hub, restart flow, and character bay
- **Phone controls built for touch** — hold-to-run + double-tap jump, tilt, or classic buttons; haptic buzz when you get hit
- **Fills any screen** — the world widens to match your screen shape (no black bars), and everything is drawn at full resolution
- **Menus that always fit** — start, pause and game-over screens scale with the game; no scrolling
- **How To Play walkthrough** — skippable first-run guide that matches your control style, replayable from the menus
- **Same speed on every screen** — the game runs at a fixed 60 updates/sec, so 120 Hz phones and iPads don't play double-speed
- **Local co-op** — second player joins with shared score and power progression
- **Boss encounters** — one boss per main level, with door locks and a boss prep pickup before the fight
- **Objectives and checkpoints** — fruit, enemy, checkpoint, and boss goals gate level exits
- **Hidden void routes** — timed secret stages with return doors, ticking pressure, and special pickups
- **Persistent flight** — flying donuts now last until an enemy hit or fireball strips the wings away
- **Helper bot** — unlockable ally that follows you later in the game and can rescue you from a fall on cooldown
- **Special fruits** — flying donuts, speed donuts, and power orbs
- **Question boxes** — pop boxes from below to release stronger fruit rewards in a more intentional way
- **Jump-pad shaky platforms** — certain unstable platforms launch you upward when stepped on
- **Clearer level exits** — completed stages now read like a shuttle boarding point instead of an unclear door
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
- [x] Persistent donut flight with power-down hazards
- [x] Stationary flower enemies with fireball attacks
- [x] Stronger per-level world themes and clearer shuttle-style exits
- [x] Tap / tilt / button phone controls, landscape prompt, first-run walkthrough
- [x] Full-screen, full-resolution rendering with smooth motion on 120 Hz screens
- [x] Fixed-timestep game loop (consistent speed on 60/120/144 Hz screens)

---

## Notes for developers

- **Game speed:** everything in `update()` is written "per frame" at 60 fps. The loop at the bottom of `index.html` runs `update()` on a fixed 60 Hz clock and draws as often as the screen refreshes (blending positions in between on fast screens) — keep new speeds/timers in per-frame units and they'll stay consistent.
- **Screen size:** the world is always `H = 420` units tall; `W` changes with the screen shape (560–924). Always use `W`/`H` (never hard-code 700) when drawing across the screen. Menus/HUD live in `#ui`, laid out at 420px tall and scaled by `fitGame()` — design them to fit 420 tall and they'll never need scrolling.
- **Input:** read movement with `moveAxis()` (−1…1, analog on tilt/stick) and buttons with `isUp()` / `isAtk()` / `isDash()`. They already merge keyboard, on-screen buttons, tilt and touch zones.
- **Control labels:** use `ctl('jump')`, `ctl('attack')`, etc. in any tutorial text so it says the right thing for keyboard vs. phone.
- **Testing tilt on a laptop:** Chrome DevTools → ⋮ → More tools → **Sensors** lets you fake device orientation; use device mode (phone emulation) so the touch controls turn on.
