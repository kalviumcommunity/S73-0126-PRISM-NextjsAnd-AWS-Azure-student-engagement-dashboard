## ⚡ Transactions, Indexes & Query Optimisation

### Transactions
Prisma transactions were implemented to ensure atomic operations. Creating a project and its initial task is wrapped inside `$transaction()` so that either all operations succeed or all changes are rolled back.

Rollback behavior was verified by intentionally triggering validation errors and confirming that no partial data was written to the database.

---

### Indexes
Indexes were added to frequently queried fields such as foreign keys (`ownerId`, `projectId`, `userId`) using Prisma migrations. This improves lookup speed and prevents full table scans as data scales.

---

### Query Optimisation
The following optimizations were applied:
- Avoided over-fetching using `select` instead of `include`
- Implemented pagination with `skip` and `take`
- Used batch inserts via `createMany`
- Indexed commonly filtered columns

Query performance was verified using Prisma query logs before and after adding indexes.

---

### Reflection
Transactions ensure data consistency and prevent partial writes. Indexes and optimized queries significantly improve performance and scalability. In production, query latency, execution plans, and error rates should be continuously monitored to maintain reliability.
