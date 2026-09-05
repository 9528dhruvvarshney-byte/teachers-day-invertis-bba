# Teachers' Day — Invertis University BBA

A one-page, no-backend, interactive digital classroom built as a Teachers' Day
surprise from the BBA students of Invertis University. There are no teacher
cards, no login, and no database — everything lives in one shared classroom
that every visitor explores the same way, with personalised content revealed
through the Teacher's Desk.

## Tech stack

React + Vite + plain CSS. No Firebase, no backend, no database. It builds to
static HTML/CSS/JS that can be hosted anywhere.

## 1. Install

Open the project folder in VS Code, then in its integrated terminal:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in
your browser.

## 3. Build for production

```bash
npm run build
```

This creates a static `dist/` folder. Preview the production build locally
with:

```bash
npm run preview
```

## 4. Deploy

The `dist/` folder is a fully static site. Deploy it to any static host:

- **Vercel / Netlify**: point the project at this repo, build command
  `npm run build`, output directory `dist`.
- **GitHub Pages**: run `npm run build`, then publish the contents of `dist/`
  to your `gh-pages` branch (or use an action that does this for you).
- **Firebase Hosting** (static only, no Firestore/Auth needed): run
  `firebase init hosting`, point the public directory to `dist`, then
  `npm run build && firebase deploy`.

## Where to edit content

Everything you'll want to personalise lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/teachers.js` | Every teacher's name, designation, subject, personal message, award, memory and student quote — shown in the **Teacher's Desk**. Add or remove teachers freely; the dropdown updates automatically. |
| `src/data/messages.js` | Blackboard lines, the four student letters in the **Letter Box**, the clock easter-egg text, the bell's two dismissal lines, and the full closing **Final Message** letter. |
| `src/data/memories.js` | The photographs on the **Memory Wall** — title, caption, student message, and an optional photo path. |
| `src/data/awards.js` | The playful teacher awards shown on the **Trophy Shelf**. |
| `src/components/Bookshelf.jsx` | The `lessons` array near the top of the file — one "book" per subject, with its short lesson line. |

Each file has a comment block at the top explaining exactly what to replace.

### Adding real photos

1. Place image files inside `public/assets/teachers/` (for teacher photos) or
   `public/assets/memories/` (for memory-wall photos).
2. In `src/data/teachers.js`, set a teacher's `photo` field to
   `"/assets/teachers/your-file.jpg"`.
3. In `src/data/memories.js`, set a memory's `image` field to
   `"/assets/memories/your-file.jpg"`.

Leaving `photo`/`image` as `null` shows an elegant placeholder instead of a
broken image, so the site always works even before you add real photos.

### Adding or removing teachers

Open `src/data/teachers.js` and copy one object in the array, give it a new
`id`, and fill in the fields. You can have anywhere from 1 to 30+ teachers —
the dropdown in the Teacher's Desk interaction is generated automatically
from this list.

## Project structure

```
src/
  components/     UI pieces: WelcomeScreen, Classroom, ClassroomScene (the
                  SVG illustration), each interactive object (Blackboard,
                  TeacherDesk, Bookshelf, LetterBox, MemoryWall, Awards,
                  ClassBell, ClassroomClock), Modal, FinalMessage
  data/           All editable content (see table above)
  App.jsx         Top-level flow: welcome -> classroom -> final message
  main.jsx        React entry point
  index.css       Design tokens (colors, type, shared modal/focus styles)
public/
  assets/
    teachers/     Put real teacher photos here
    memories/     Put real memory-wall photos here
    classroom/    Favicon / misc classroom assets
```

## How the experience works

1. **Welcome screen** — Invertis University / BBA branding and an
   "Enter the classroom" button.
2. **Classroom** — one illustrated scene with clickable objects:
   Blackboard, Clock, Bookshelf, Trophy Shelf, Memory Wall, Letter Box,
   Teacher's Desk, and the Class Bell. Each opens a focused modal
   interaction. On phones, the illustration is replaced with a tappable
   list of the same objects so nothing becomes too small to tap.
3. **Class Bell → Final Message** — ringing the bell reveals two closing
   lines and a button through to a full-screen thank-you letter to the
   teachers, with a way back to the classroom.

## Accessibility & responsiveness notes

- Every interactive object is a real `<button>` with an `aria-label`,
  reachable and operable by keyboard, with a visible focus ring.
- Touch targets are at least 44×44px.
- Motion respects `prefers-reduced-motion`.
- No horizontal scrolling at any breakpoint.
- The bell sound is synthesised in-browser and only ever plays after a user
  click — it never autoplays.

## Notes

This project intentionally has no backend, database, or authentication. All
"personalisation" is just data lookup inside the browser from the files in
`src/data/` — there is nothing to configure or deploy beyond the static
build.
