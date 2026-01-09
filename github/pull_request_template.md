## Code Review Checklist

Every pull request is reviewed using the following checklist:

- Code follows agreed naming conventions and folder structure
- Functionality verified locally
- No console errors or warnings
- ESLint and Prettier checks pass
- Comments and documentation are clear and meaningful
- No sensitive data (API keys, secrets) is exposed


## Team Branching & Pull Request Workflow

Our team follows a structured GitHub workflow inspired by real-world engineering practices.

### Branching Strategy
We use consistent branch naming conventions:
- feature/<feature-name>
- fix/<bug-name>
- chore/<task-name>
- docs/<update-name>

This improves traceability and collaboration.

### Pull Request Process
All changes are submitted via pull requests using a standard template that includes:
- Summary of changes
- Evidence or screenshots
- A quality checklist

### Review & Protection Rules
The main branch is protected with:
- Mandatory pull requests
- At least one review before merge
- Required lint and build checks
- No direct pushes to main

### Reflection
This workflow ensures code quality, encourages collaboration, and prevents unreviewed or unstable code from being merged, allowing the team to move fast without breaking production.
