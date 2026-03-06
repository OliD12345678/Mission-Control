# Mission-Control — Claude Guidelines

## What this repo is
Mission-Control is the central task board and control tower for the OpenClaw project. It coordinates agents (Hal, Claude) and tracks work via GitHub issues, PRs, and the hal_ops backlog.

## Architecture
- Frontend: vanilla HTML/CSS/JS task board (index.html, app.js, styles.css)
- Agent ops: hal_ops/ directory (backlog tasks, active task tracking)
- CI/CD: GitHub Actions workflows in .github/workflows/

## Code standards
- Keep changes minimal and focused
- No unnecessary dependencies
- Plain JavaScript (no frameworks unless decided otherwise)
- Functions should be small and single-purpose

## Branch conventions
- `main` — stable, protected
- `hal/*` — Hal's automated branches
- `claude/*` — Claude's branches (PR reviews, fixes)

## PR process
- All changes go through PRs
- Claude automatically reviews PRs via GitHub Actions
- Tests must pass before merge (when tests exist)
