## API Validation & Standardized Responses (Zod + Prisma)

This task implements robust API validation, standardized responses, and error handling across the backend using **Zod**, **Prisma**, and a **global response handler**.

---

### 🔐 Input Validation with Zod
All `POST` requests validate incoming data using Zod schemas before database operations.

Example schema:
```ts
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

```
Validation is executed using safeParse() to prevent invalid data from reaching the database.

🌍 Global API Response Handler
All API routes return a consistent response structure using a centralized utility:

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {},
  "timestamp": "2026-01-14T06:06:01Z"
}

```
Error responses follow the same structure with meaningful error codes.

⚙️ Implemented API Routes
POST /api/users – Create user with Zod validation

GET /api/users – Fetch all users

POST /api/tasks – Create task with validation

GET /api/tasks – Fetch all tasks

GET /api/projects – Fetch projects

🧪 API Testing
APIs were tested using Bruno:

Valid requests return 201 Created

Invalid inputs return structured validation errors

Duplicate entries are blocked by Prisma constraints

Screenshots of successful and failed requests are included as proof.

💡 Key Takeaways
Zod ensures data integrity before persistence

Prisma enforces schema-level constraints

Centralized responses improve developer experience and debugging

Consistent API design reduces frontend integration complexity

