## 🗄️ Database Setup: Prisma, Migrations & Seeding

### Overview
This project uses **Prisma ORM** with **PostgreSQL** to manage the database schema, migrations, and seed data. Prisma provides a type-safe and reliable data access layer that ensures consistency across development environments.

---

### Schema Design
The database schema is defined in `prisma/schema.prisma` and includes the following normalized entities:

- **User** – application users (students, teachers, admins)
- **Project** – engagement projects
- **Task** – tasks under projects
- **Comment** – discussion and feedback on tasks
- **Membership** – many-to-many relationship between users and projects

Key features:
- Auto-incremented primary keys
- Foreign key relationships with referential integrity
- Cascading deletes where appropriate
- Enums (`Role`, `TaskStatus`) for constrained values
- Normalized schema (3NF) to avoid redundancy

---

### Database Migrations
Prisma Migrate is used to version-control schema changes.

```bash
npx prisma migrate dev --name init_schema
This command:

Generates SQL migration files in prisma/migrations/

Applies schema changes to PostgreSQL

Keeps the database schema in sync with Prisma models

To reset the local database:

bash
Copy code
npx prisma migrate reset
Used only in development, never in production.

Database Seeding
Initial, reproducible data is inserted using a seed script.

bash
Copy code
npx prisma db seed
Seed data includes:

Sample users (Alice, Bob)

A sample project (Student Engagement Dashboard)

The seed script is idempotent, meaning it can be safely re-run without creating duplicate records.

Verification
Prisma Studio is used to inspect the database and verify data.

bash
Copy code
npx prisma studio
This provides a visual interface to view tables, relationships, and seeded records.




Reflection
Prisma migrations make schema changes predictable and reproducible, while seed scripts ensure consistent starting data for development and testing. Together, they improve development speed, data reliability, and team collaboration.