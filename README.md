## 🌐 Global API Response Handler

### Unified Response Format
All API endpoints return a consistent JSON structure to improve predictability and developer experience.

**Success Response**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "timestamp": "2026-01-13T10:00:00Z"
}
```

**Error Response**

```json
{
  "success": false,
  "message": "Validation failed",
  "error": { "code": "E001" },
  "timestamp": "2026-01-13T10:01:00Z"
}
```


Global Response Utility
A centralized response handler (lib/responseHandler.ts) is used across all API routes to enforce consistency in success and error responses.

Error Codes
Common error codes are defined in lib/errorCodes.ts to standardize error tracking and debugging.

Reflection
Using a global response handler significantly improves developer experience by enforcing predictable API behavior. It also enhances observability by attaching timestamps and error codes, making debugging and monitoring easier in production environments.

yaml
Copy code

---

## 7️⃣ Deliverables Checklist (YOU PASS)

✔ `lib/responseHandler.ts` created  
✔ Used in **multiple API routes**  
✔ Consistent success & error responses  
✔ Optional error codes defined  
✔ README updated with examples & reflection  

---

## 🚀 Final Step: Commit & Push

```bash
git add src/lib src/app/api README.md
git commit -m "Add global API response handler for consistent API responses"
git push origin <your-branch>