# IronForge Fitness 🏋️
 
> Mumbai's premier strength facility — landing page with live demo booking system.
 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
 
---
 
## Features
 
- Cinematic scroll animations powered by Framer Motion
- Animated hero with live stat counters
- Programs, trainers, and tiered pricing sections
- Member testimonials
- Functional demo booking form connected to Supabase
- Fully responsive — mobile to desktop
- Dark, minimal design system (Clash Display + DM Sans)
 
---
 
## Tech Stack
 
| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Deployment | Vercel |
 
---
 
## Getting Started
 
```bash
# Clone the repo
git clone https://github.com/your-username/ironforge.git
cd ironforge
 
# Install dependencies
npm install
 
# Add environment variables
cp .env.example .env
# Fill in your Supabase URL and anon key
 
# Run locally
npm run dev
```
 
---
 
## Environment Variables
 
Create a `.env` file in the root:
 
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
 
---
 
## Supabase Table
 
```sql
CREATE TABLE demo_bookings (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  full_name text,
  email text,
  phone text,
  preferred_program text,
  preferred_date date
);
```
 
---
 
## Project Structure
 
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Programs.jsx
│   ├── WhyIronForge.jsx
│   ├── Trainers.jsx
│   ├── Pricing.jsx
│   ├── Testimonials.jsx
│   ├── BookingForm.jsx
│   └── Footer.jsx
├── lib/
│   └── supabase.js
└── App.jsx
```
 
---
 
<p align="center">Built as a freelance portfolio project · <a href="#">Live Demo</a></p>
 