# Todo App

A minimal single‑page todo app built with HTML, CSS, and vanilla JavaScript. This README explains how to run the app locally.

## Prerequisites

- Node.js (≥ 18) and npm (or pnpm) installed.

## Setup

```bash
# Install dependencies
npm install

# (Optional) If you prefer pnpm
# pnpm install
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts a lightweight development server that serves the app on `http://localhost:3000`. |
| `npm run lint` | Runs ESLint to check for style and syntax issues. |
| `npm run format` | Runs Prettier to format source files. |

> **Tip**: The project uses ESLint and Prettier, so linting and formatting can be run automatically before committing changes.

## Running the App

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000). You should see the Todo list UI. Use the input field to add a new todo, click the checkbox to mark it complete, and click the trash icon to delete.

## Development Notes

- The app is purely client‑side; no server is required.
- All state is kept in memory; reloading the page clears the todo list.

## License

This project is open source under the MIT license.
