# vr-backend

Backend API for the PSG CSE Innovation Experience Centre — VR Experience. Serves data for the CSEA-VR frontend (events, projects, achievements, secretaries, faculty).

## Tech Stack

- Node.js + Express
- MongoDB (Atlas) + Mongoose
- Docker
- GitHub Actions (CI)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:
```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.oakafsg.mongodb.net/vr-backend
PORT=5000
NODE_ENV=development
```
Never commit `.env` — it's already in `.gitignore`.

### 3. Seed the database (first time only)
```bash
node seed/seedZone1.js
node seed/seedZone2Projects.js
node seed/seedZone2Achievements.js
node seed/seedZone4.js
```
Categories and secretaries are currently seeded manually via `mongosh` — see `zone2-categories-seed.js` and `zone2-secretaries-seed.js` for the insert scripts.

### 4. Run the server
```bash
node server.js
```
Server starts on `http://localhost:5000`.

## API Reference

### Health Check
```
GET /
```

### Zone 1 — Events
```
GET /api/zone1              # list all events
GET /api/zone1/:id          # single event by id
```

### Zone 2 — Projects, Achievements, Secretaries
```
GET /api/projects/categories               # list the 3 categories
GET /api/projects/:categoryId              # list items in a category
GET /api/projects/:categoryId/:slug        # single item detail
```
`:categoryId` is one of: `projects`, `achievements`, `secretaries`.
- `projects` → returns Project documents (title, description, problemStatement, solutionOverview, techStack, etc.)
- `achievements` → returns Achievement documents (title, description, name, rollNo, class)
- `secretaries` → returns Secretary documents (name, club, class, position, year)

### Zone 4 — Faculty
```
GET /api/faculty             # list all faculty
GET /api/faculty/:id         # single faculty by Mongo _id
```

## Project Structure

```
vr-backend/
├── controllers/       # request handlers, one per zone
├── models/             # Mongoose schemas
├── routes/              # Express routers, one per zone
├── seed/                  # one-time data seed scripts
├── .env                     # local secrets (gitignored)
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── server.js
└── package.json
```

## Running with Docker

```bash
docker compose up --build
```
Runs the same server inside a container, using the same `.env`.

## CI

GitHub Actions runs on every push/PR to `main` (`.github/workflows/backend-ci.yml`):
- Installs dependencies
- Checks `server.js` for syntax errors
- Builds the Docker image

## Deployment

Deployed on [Render](https://render.com), auto-deploying from `main`. Live at:
```
https://vr-backend-gwr1.onrender.com
```
Remember to set `MONGO_URI`, `PORT`, and `NODE_ENV` as environment variables in the Render dashboard — they are not read from `.env` in production.
