## TypeScript & ESLint Configuration (Sprint 1 – Brain 2.9)

To maintain high code quality and consistency across the project, we configured strict TypeScript rules, integrated ESLint with Prettier, and enforced automated checks using pre-commit hooks. This setup ensures a clean, scalable, and bug-resistant codebase as the project grows.

---

### Strict TypeScript Configuration

TypeScript was configured in **strict mode** to catch errors early during development and prevent runtime issues.

Enabled options include:
- `strict` – Enables all strict type-checking options
- `noImplicitAny` – Prevents variables from having implicit `any` types
- `noUnusedLocals` – Detects unused variables
- `noUnusedParameters` – Detects unused function parameters
- `forceConsistentCasingInFileNames` – Prevents casing-related import issues
- `skipLibCheck` – Speeds up builds by skipping type checks for libraries

These rules improve code safety, readability, and long-term maintainability.

---

### ESLint & Prettier Setup

We use **Next.js built-in ESLint (`next lint`)** along with Prettier to enforce best practices and consistent formatting.

#### ESLint
- Integrated using `eslint-config-next`
- Detects common bugs and enforces React and Next.js best practices
- Warns against unsafe patterns such as excessive `console.log` usage

#### Prettier
- Handles consistent formatting across the codebase
- Enforces:
  - Double quotes
  - Semicolons
  - Two-space indentation
  - Trailing commas where applicable

This separation ensures ESLint focuses on code quality while Prettier handles formatting.

---

### Pre-Commit Hooks with Husky

Husky is configured to run lint checks before every commit.

- Prevents commits if linting fails
- Ensures all committed code follows project standards
- Maintains consistency across all team contributions

This automated enforcement significantly reduces errors and improves collaboration.

---

### Why This Setup?

This configuration:
- Reduces runtime bugs through strict typing
- Keeps code clean and readable
- Prevents inconsistent styles across contributors
- Ensures professional development standards from the first sprint

Overall, it provides a strong foundation for scaling the application in future sprints.
