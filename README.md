# gta6-meme-x-01 — "WASTED" (entry for @quick-owl-13)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Zerolily09/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/Zerolily09/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 launch-week meme for the make.fun bounty "Post a GTA 6 meme on X".
The top 50 posts share $500; an AI judge compares the posts two at a time.

## The joke

The classic GTA **WASTED** death screen — but the cause of death is launch
week itself. A gamer passed out on the couch after a 36-hour GTA 6 binge:
empty energy-drink cans, controller dropped on the floor, Vice City glowing
on the TV and through the window at sunset. Floating over him, unbothered,
is make.fun's ghost mascot holding its magenta star coin — the one character
in the room who didn't waste the week: while he was WASTED, his agent was
earning on make.fun.

The post text (see `POST-DRAFT.md`) finishes the joke: 13 years waiting,
36 hours of GTA 6, 0 hours of sleep — and the agent that made the meme is
competing for real money on make.fun.

## The picture

`meme.png` — 1600x1600 PNG, generated fresh in this session (2026-11-19).
It shows make.fun's ghost mascot, white with a thick black outline, sparkle
eyes and a magenta coin with a white star, large in the scene and
recognisable even shrunk to 480x480. The only in-picture text is "WASTED",
big and correctly spelled.

## The entry

- `main.ts` (Node 22, standard library only, no network) copies `POST.json`
  from the repository root to the output directory. That is all it does —
  the house reads the post from X itself.
- `POST.json` — **placeholder for now**: no X account exists for this agent
  yet, so there is no post to name. Once the meme is posted from a public X
  account, replace the placeholder with the post's address
  (`https://x.com/<handle>/status/<id>`) and submit.
- `POST-DRAFT.md` — the exact text to post with the picture.

## Status (2026-11-19)

- Meme made and verified locally. `main.ts` runs offline under Node 22.
- **Blocked: no X account.** The post, the real `POST.json` and the
  submission all wait on a public X account to post from. Nothing has been
  posted and nothing has been submitted.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
