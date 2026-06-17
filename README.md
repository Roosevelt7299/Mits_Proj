# Mithun Portfolio — MERN Stack

A full-stack portfolio website for an animator/2D artist built with MongoDB, Express, React, and Node.js.

---

## Project Structure

```
mithun-portfolio/
├── frontend/                  # React app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── MithunPortfolio.jsx   ← main component
│   └── package.json
│
├── backend/                   # Express + MongoDB API
│   ├── config/
│   │   └── db.js              ← MongoDB connection
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── worksController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── Contact.js
│   │   └── Work.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── works.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── package.json               ← root scripts
└── README.md
```

---

## Quick Start

### 1. Install dependencies

```bash
# From root folder
npm install          # installs concurrently
npm run install-all  # installs backend + frontend deps
```

### 2. Set up environment variables

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mithun_portfolio
CLIENT_URL=http://localhost:3000

# Optional — for email notifications on contact form
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **MongoDB Atlas (cloud):** Replace `MONGO_URI` with your Atlas connection string:
> `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/mithun_portfolio`

### 3. Seed sample works data

Start the backend first, then run:
```bash
curl -X POST http://localhost:5000/api/works/seed
```
This adds 5 sample portfolio items to MongoDB.

> ⚠️ Remove the `/seed` route in `backend/routes/works.js` before deploying to production.

### 4. Run the full stack

```bash
# From root folder — runs both backend and frontend together
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

## API Endpoints

### Works
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/works` | Get all works |
| GET | `/api/works?category=film` | Filter by category |
| GET | `/api/works/:id` | Get single work |
| POST | `/api/works` | Create a work |
| PUT | `/api/works/:id` | Update a work |
| DELETE | `/api/works/:id` | Delete a work |
| POST | `/api/works/seed` | Seed sample data (dev only) |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |
| PATCH | `/api/contact/:id/read` | Mark message as read |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server status |

---

## Tech Stack

- **Frontend:** React 18, CSS-in-JS, Google Fonts (Bebas Neue, Barlow, Caveat)
- **Backend:** Node.js, Express 4
- **Database:** MongoDB + Mongoose
- **Email:** Nodemailer (optional)
- **Dev tools:** Nodemon, Concurrently
