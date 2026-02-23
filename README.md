# ToSend - Smart Message Scheduler 🚀

A modern, cloud-ready web application for scheduling automated messages. This project demonstrates a complete CI/CD pipeline using GitHub Actions, ensuring code quality through automated testing and continuous deployment.

## 🎯 Project Objectives
- Implement a robust CI/CD pipeline.
- Automate Unit and Integration testing using Vitest.
- Enforce business logic validation for scheduling constraints.
- Automate deployments to GitHub Pages.

## 🛠️ Technology Stack
- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS
- **Build Tool:** Vite
- **Testing Engine:** Vitest, V8 Coverage
- **DevOps:** GitHub Actions, GitHub Pages

## 🔄 CI/CD Pipeline Documentation
The automation pipeline is defined in `.github/workflows/ci.yml`. It triggers automatically on every `push` to the `main` branch and executes the following stages sequentially:

1. **Environment Setup:** Provisions an Ubuntu runner and configures Node.js 20.
2. **Dependency Installation:** Executes a clean install (`npm install`) based on `package-lock.json`.
3. **Automated Testing & Coverage:** Runs `npm run coverage` to execute unit tests against the scheduling logic (e.g., validating future dates, correct email formats). Fails the build if tests do not pass.
4. **Build Process:** Compiles and minifies the application using Vite (`npm run build`) into the `/dist` directory.
5. **Deployment:** Uses the official `actions/deploy-pages` step to publish the verified build artifact directly to GitHub Pages.

## 🚀 Deployment Instructions
This application is automatically deployed. However, to configure it from scratch:
1. Go to repository **Settings** > **Pages**.
2. Under "Build and deployment", change the Source to **GitHub Actions**.
3. Push any change to the `main` branch. The Action will automatically build and publish the site.

## 🤝 Contribution Guide
We welcome contributions to improve ToSend! Please follow this workflow:
1. **Fork** the repository and clone it locally.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Install dependencies: `npm install`
4. Make your changes and run the tests locally: `npm run coverage`
5. Ensure your code passes all validations without errors.
6. Commit your changes with descriptive messages: `git commit -m "feat: add new validation rule"`
7. Push to your fork and submit a **Pull Request** to our `main` branch.

## ⚙️ Local Development
```bash
npm install
npm run dev   # Starts the local development server
npm run test  # Runs the test suite