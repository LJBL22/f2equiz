# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (host exposed for LAN access)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint — zero warnings allowed (--max-warnings 0)
```

There is no test suite configured.

## Architecture

This is a Frontend Mentor quiz app built with React, Redux Toolkit, React Router v6, and Tailwind CSS.

### Data Flow

Quiz data is fetched from a Vercel-hosted JSON server (`https://f2equiz-json.vercel.app/quizzes`) via `src/utils/api.js`. The local `data.json` is a reference copy of the same structure: `{ quizzes: [{ title, icon, questions: [{ question, options[], answer }] }] }`.

The user flow is: `Menu (/)` → `Quiz (/:topic)` → `Result (/result)`, all wrapped in `Layout.jsx`.

### State (Redux Toolkit)

Two slices in `src/store/slices/`:

- **menuSlice** — `quizTitle`, `quizIcon`, `quizzes[]`, `theme`; actions: `chooseTitle`, `chooseIcon`, `setQuiz`, `setTheme`, `resetQuiz`
- **quizSlice** — `index`, `questions[]`, `selectedAnswer`, `correctAnswer`, `score`; actions: `setQuestions`, `setCorrectAnswer`, `chooseAnswer`, `updateScore`, `updateIndex`, `resetQuiz`

All action creators are re-exported from `src/store/index.js`.

### Theme System

Theme is set at app mount in `App.jsx` by reading `localStorage`, falling back to `prefers-color-scheme`. The `data-theme` attribute on `<html>` drives CSS variable swaps. `Switch.jsx` updates localStorage, the DOM attribute, and Redux in sync. CSS variables (`--bkg`, `--title-main`, `--title-sub`, `--box-bg`, `--error`) are defined in `src/index.css` for both `[data-theme="light"]` and `[data-theme="dark"]`. Background SVG patterns are also swapped by theme and breakpoint via Tailwind classes on `Layout.jsx`.

### Tailwind Custom Breakpoints

Non-standard breakpoints defined in `tailwind.config.js`:
- `tablet` → 520px
- `laptop` → 768px
- `desktop` → 1024px
- `screen` → 1440px

Custom colors: `purple`, `navy` (shades), `light-bluish`, `green`, `red`, plus semantic aliases (`bkg`, `title-main`, `title-sub`, `box-bg`, `error`) that map to CSS variables.
