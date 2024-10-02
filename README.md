# Electron + React Boilerplate

![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

This is a starter template for building desktop applications with **Electron** and **React**. This project includes a simple setup for both the frontend (React using Create React App) and the backend (Electron).

## Features

- **Electron** for building cross-platform desktop apps.
- **React** for building the UI.
- Pre-configured **Babel**, **ESLint**, and **Prettier** for a smooth development experience.
- Single **mono-repo** structure for managing both frontend and backend together.
- Hot-reloading in development for both Electron and React.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is used in this project)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/5sensprod/appSv2.git
   ```

2. Install dependencies for the whole project:

   ```bash
   npm install
   ```

3. Install dependencies for the frontend React app:

   ```bash
   cd frontend
   npm install
   ```

### Development

#### Start both Electron and React in development mode:

```bash
npm start
```

- React will run on `http://localhost:3000`.
- Electron will automatically open and load the React app.

#### Build the production version of the app:

To generate the production build of both the frontend and the Electron app, run:

```bash
npm run build
```

The production-ready app will be available in the `dist/` folder.

### Scripts

- **`npm start`**: Starts the Electron app with React in development mode.
- **`npm run build`**: Builds both the frontend and Electron app for production.
- **`npm run format`**: Formats the code using Prettier.
- **`npm run lint`**: Checks for linting errors using ESLint.

### Project Structure

```
your-project/
├── dist/                  # Electron build outputs (production)
├── electron/              # Electron main process files
│   ├── main.js            # Electron main process entry point
│   ├── preload.js         # Preload script for Electron
├── frontend/              # React frontend code (Create React App)
│   ├── public/            # Public assets for React
│   ├── src/               # React source code
│   └── build/             # React build outputs (production)
├── .gitignore             # Git ignore file
├── .prettierrc            # Prettier configuration
├── .eslintrc              # ESLint configuration
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation
```

### Linting and Code Formatting

This project uses **ESLint** and **Prettier** for linting and formatting:

- To check for linting errors, run:

  ```bash
  npm run lint
  ```

- To format the code, run:

  ```bash
  npm run format
  ```

### Customizing for Future Projects

Feel free to customize this boilerplate by adding any dependencies or configurations that suit your project needs.

---

### Contributing

If you wish to contribute to this boilerplate, feel free to open a pull request or submit an issue.

### License

This project is licensed under the MIT License.

---

### Notes

- **.gitignore**: The `.gitignore` file is located at the root of the project to manage all files and folders that should not be versioned across both the frontend and backend.
- **Mono-repo**: This project follows a mono-repo structure, making it easier to manage both the Electron backend and React frontend together.

### Future Enhancements

- Consider adding **GitHub Actions** or another **CI/CD** pipeline to automate testing and deployment.
- Add more specific **ESLint rules** or **Prettier configurations** if needed for future projects.

---

This README provides a comprehensive overview of your **Electron/React boilerplate** and can be used as a starting point for future desktop app development projects.
