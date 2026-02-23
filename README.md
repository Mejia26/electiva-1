# Risk Assessment Web Tool 🛡️

A user-friendly, production-ready web application to evaluate system risk levels. Built with modern web technologies and fully automated via GitHub Actions CI/CD.

## 🚀 Features
- **Dynamic Risk Engine**: Computes risk based on system complexity and exposure.
- **Modern UI**: Styled with Tailwind CSS for a sleek, accessible design.
- **Automated Pipeline**: Full CI/CD integration with GitHub Actions (Build, Test, Deploy).
- **Comprehensive Testing**: Unit and Integration tests using Vitest and JSDOM.

## 🛠️ Technology Stack
- **Frontend**: HTML5, JavaScript (ES6+), Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest, JSDOM, V8 Coverage
- **CI/CD**: GitHub Actions, GitHub Pages

## ⚙️ Local Setup
1. Clone the repository: `git clone <your-repo-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Run tests: `npm run test`
5. Generate coverage report: `npm run coverage`

## 🔄 CI/CD Pipeline Documentation
Our GitHub Actions workflow (`.github/workflows/ci.yml`) consists of the following automated stages triggered on every push or pull request to the `main` branch:
1. **Checkout Code**: Retrieves the latest codebase.
2. **Setup Environment**: Provisions a Node.js 20 environment.
3. **Install Dependencies**: Performs a clean installation (`npm ci`).
4. **Automated Testing**: Runs unit and integration tests, enforcing code coverage.
5. **Build Artifacts**: Compiles the Vite project for production into the `/dist` directory.
6. **Deployment**: Deploys the production build to GitHub Pages.

## 🤝 Contributing
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Ensure all tests pass (`npm run test`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request