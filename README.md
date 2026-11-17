# Sujith Kumar Chepuri – Full Stack Portfolio

React + Bootstrap 5 frontend, Python (Django REST Framework) backend, SQL database.
Responsive, with light and dark mode.

| Layer     | Tech                                                    |
|-----------|---------------------------------------------------------|
| Frontend  | React 18, Vite, Bootstrap 5, HTML5, CSS3, JavaScript    |
| Backend   | Python, Django 5, Django REST Framework, CORS headers   |
| Database  | SQLite by default, MySQL supported (see below)          |

## Folder structure

```
sujith-portfolio-fullstack/
├── README.md
├── database/
│   └── schema.sql              # SQL tables (generated from the Django models)
├── backend/                    # Python API
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env.example            # optional settings (MySQL, CORS, secret key)
│   ├── config/                 # settings.py, urls.py, wsgi.py
│   └── portfolio/
│       ├── models.py           # Profile, SkillGroup, Experience, Project, Education, ContactMessage
│       ├── serializers.py
│       ├── views.py            # GET /api/portfolio/  and  POST /api/contact/
│       ├── urls.py   admin.py   tests.py
│       ├── migrations/
│       └── management/commands/seed_portfolio.py   # loads your resume content
└── frontend/                   # React site
    ├── index.html   package.json   vite.config.js
    ├── public/favicon.svg
    └── src/
        ├── main.jsx   App.jsx   api.js
        ├── data/fallback.js    # shown if the API is not running
        ├── hooks/              # usePortfolio.js, useReveal.js
        ├── components/         # Navbar, Hero, HexPhoto, About, Skills, Experience,
        │                       # Projects, Education, Contact, Tags, SectionHead
        ├── assets/images/profile.jpg
        └── styles/             # global.css, navbar.css, hero.css, contact.css, motion.css
```

## Run it (two terminals)

Requires Python 3.10+ and Node.js 18+.

**1. Backend**
```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate          # creates the SQL tables
python manage.py seed_portfolio   # loads your resume content
python manage.py createsuperuser  # optional: for the admin site
python manage.py runserver        # http://127.0.0.1:8000
```

**2. Frontend**
```bash
cd frontend
npm install
npm run dev                       # http://localhost:5173
```
Vite forwards `/api` requests to Django, so no extra setup is needed.

## What the backend gives you

- `GET  /api/portfolio/` – profile, skills, experience, projects and education as JSON
- `POST /api/contact/` – saves a message from the contact form (rate limited to 10 per hour)
- `http://127.0.0.1:8000/admin/` – edit all content and read contact messages
- `python manage.py test` – runs the API tests

If the API is down, the site still works using `frontend/src/data/fallback.js`.

## Using MySQL instead of SQLite

```bash
pip install mysqlclient
export DB_ENGINE=mysql DB_NAME=portfolio DB_USER=root DB_PASSWORD=yourpass DB_HOST=127.0.0.1
python manage.py migrate && python manage.py seed_portfolio
```
Create an empty database first: `CREATE DATABASE portfolio CHARACTER SET utf8mb4;`

## Deploy

- **Frontend:** `npm run build`, then upload `frontend/dist` to Netlify, Vercel or GitHub Pages.
  If the API lives on another domain, set `VITE_API_URL` (see `frontend/.env.example`) before building.
- **Backend:** host on Render, Railway or PythonAnywhere. Set `DJANGO_DEBUG=0`, a real
  `DJANGO_SECRET_KEY`, `DJANGO_ALLOWED_HOSTS` and `CORS_ORIGINS` (your frontend URL).

## Editing content

Use the Django admin, or edit `backend/portfolio/management/commands/seed_portfolio.py` and
re-run `python manage.py seed_portfolio`. Colours and fonts are the variables at the top of
`frontend/src/styles/global.css`. To change the photo, replace `frontend/src/assets/images/profile.jpg`.
# portfolio_updated
