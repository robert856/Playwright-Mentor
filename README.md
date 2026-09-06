# Playwright Mentor

A project-management workspace for writing a play — the script as a living
project with stages, deadlines, and a persistent AI mentor.

This is the first coded pass: a React app with the full navigation shell for
all six guided-path modules, and a working **Dashboard** screen built from
the mockup.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`, no
  separate config file — theme tokens live in `src/index.css`)
- [React Router](https://reactrouter.com/) for the guided-path navigation

## What's here

- **Dashboard** (`/`) — play title, overall progress, current stage ring,
  mentor's "what's next" nudge, quick stats, and recent scenes. Fully built,
  matches the mockup.
- **Sidebar nav** for the six guided-path stages (Spark & Logline,
  Characters, Structure & Outline, Drafting Room, Revision Studio, Finish
  Line) — each currently renders a placeholder describing what's planned for
  it, so the app's skeleton exists end to end.
- **Mock data** in `src/data/mockPlay.ts`, shaped to match `PlayProject` in
  `src/types/index.ts`. Swap this for real data (API call, localStorage,
  etc.) without touching the UI — every component just reads from that
  shape.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production
bundle in `dist/`.

## Project structure

```
src/
  components/   Layout, Header, Sidebar, Card, ProgressRing, SceneCard, StatusBadge
  pages/        Dashboard.tsx, StagePlaceholder.tsx
  data/         mockPlay.ts (mock data, swap for a real source later)
  types/        shared domain types (PlayProject, Scene, StageInfo, ...)
```

## Suggested next steps

1. Build out the **Spark & Logline** module first — it's the simplest and
   everything else (the "North Star" shown across every screen) depends on
   it.
2. Move from mock data to local state (React context or a small store) so
   scenes/characters can actually be added and edited.
3. Design the mentor's personality/tone system (encouraging coach,
   tough-love editor, playful collaborator, calm guide) as a settings
   concept before wiring up real AI responses.
4. Add persistence (localStorage first, then a real backend) once the data
   model has been exercised by a couple of modules.
