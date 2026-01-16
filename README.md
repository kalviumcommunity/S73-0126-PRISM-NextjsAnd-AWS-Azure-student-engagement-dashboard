## Authorization & RBAC

This project implements Role-Based Access Control (RBAC) using Next.js middleware and JWT.

### How It Works
- Users authenticate via signup/login.
- JWT tokens include user role.
- Global middleware validates JWTs.
- Routes are protected based on roles.

### Protected Routes
- `/api/users` → All authenticated users
- `/api/admin` → Admin-only access

### Role Enforcement
- ADMIN users can access all routes.
- STUDENT users are restricted from admin routes.

### Security Principles
- Least privilege enforced
- Centralized authorization logic
- Easy to extend for future roles
