## Environment Variable Management

To securely manage configuration and sensitive data, this project uses Next.js built-in environment variable support. This ensures secrets are protected while allowing safe configuration sharing across the team.

---

### Environment Files

We use two environment files:

#### `.env.local`
- Stores real secrets such as database URLs and API keys
- Used only in local development
- Never committed to GitHub

#### `.env.example`
- Provides a template for required environment variables
- Contains placeholder values only
- Helps teammates configure their local environment safely

---

### Environment Variables Overview

| Variable Name | Scope | Description |
|--------------|------|-------------|
DATABASE_URL | Server-only | Database connection string |
INTERNAL_API_KEY | Server-only | Internal service authentication |
NEXT_PUBLIC_APP_NAME | Client-safe | Application display name |
NEXT_PUBLIC_API_BASE_URL | Client-safe | Base URL for frontend API calls |

---

### Server vs Client Variables

- Server-side variables are accessed using `process.env.VARIABLE_NAME`
- Client-side variables must be prefixed with `NEXT_PUBLIC_`
- Variables without `NEXT_PUBLIC_` are never exposed to the browser

---

### Build-time vs Runtime Behavior

- Environment variables are injected at build time
- Changes to `.env.local` require restarting the development server
- This ensures predictable builds and prevents accidental exposure

---

### Security Considerations & Pitfalls

Common risks include accidentally committing secret files or exposing sensitive values to the client.  
We prevent this by:
- Ignoring `.env.local` using `.gitignore`
- Using `.env.example` for documentation
- Strictly separating server-only and client-safe variables

This setup protects sensitive data while maintaining clarity and collaboration across the team.
