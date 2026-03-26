# Ahmed Siala — Portfolio

A personal portfolio website with CRUD project management, built with **React 19** and **Vite**.

## Features

- **Home** — Hero section, about summary, skills grid (with Devicon icons), featured projects, and contact CTA
- **Projects** — Lists all projects from the backend in a table with delete functionality
- **Admin** — Form to add new projects (title + description) via the API
- **About** — Profile card with bio and quick stats
- **Contact** — Contact info (email, phone, LinkedIn, spoken languages) and a message form

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Frontend  | React 19, React Router 7            |
| Build     | Vite 7                              |
| Backend   | JSON Server (REST API on port 4000) |
| Icons     | Devicon                             |
| Linting   | ESLint 9                            |

## Prerequisites

- **Node.js** ≥ 18
- **npm**
- **JSON Server** — the app expects a REST API at `http://localhost:4000/projects`

## Getting Started

```bash
# Install dependencies
npm install

# Start the mock API (requires json-server)
npx json-server --watch db.json --port 4000

# In a separate terminal, start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Project Structure

```
src/
├── api/
│   └── projectsApi.js    # Fetch helpers: getProjects, addProject, deleteProject
├── assets/
│   └── profile.jpg        # Profile photo
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Projects.jsx / Projects.css
│   ├── Admin.jsx / Admin.css
│   ├── About.jsx / about.css
│   └── Contact.jsx / Contact.css
├── App.jsx / App.css      # Navbar + route definitions
├── main.jsx               # React root with BrowserRouter
└── index.css              # Global styles
```

## Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start Vite dev server (HMR)  |
| `npm run build`   | Production build             |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Run ESLint                   |
