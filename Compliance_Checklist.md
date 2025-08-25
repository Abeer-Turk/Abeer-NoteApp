# One-Page Compliance Checklist — ToDo App

## Core Features
- [x] Auth: Register/Login (JWT, hashed passwords)
- [x] Create todo with category
- [x] List todos for current user
- [x] Toggle completion (single)
- [x] Delete todo

## Enhancements Added
- [x] Edit todo (PUT /api/todos/:id) + inline UI
- [x] Filter bar: status (all/active/completed), category, search
- [x] Bulk actions: POST /api/todos/bulk-toggle, POST /api/todos/clear-completed
- [x] Validation with Zod for create/update/toggle/filter
- [x] Tests: Jest + Testing Library (basic UI test)
- [x] CI: GitHub Actions running tests

## Responsive & UI
- [x] MUI-based responsive components
- [x] Dark-friendly theme (existing)

## Docs/SEO
- [x] Swagger page exists (extend later with new endpoints)
- [x] Meta/OG tags present

## What to verify before submission
- Set `MONGO_DB_URI` in `.env.local`
- Run `npm ci && npm run dev`
- Optionally add more tests and Swagger docs for new endpoints
