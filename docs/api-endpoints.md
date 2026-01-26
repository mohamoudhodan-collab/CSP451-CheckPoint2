# API Endpoints (Checkpoint 2)

This project includes a small REST API used to confirm routing and JSON handling work.

## Base URL
When running locally:
- http://localhost:3000

If the API router is mounted at `/api`, the full URLs become:
- `/api/health`
- `/api/echo`

---

## GET /api/health

**Purpose**
- Simple health check to prove the API is reachable.

**Example request**
- Open in browser: `http://localhost:3000/api/health`
- Or run:
  ```bash
  curl http://localhost:3000/api/health
