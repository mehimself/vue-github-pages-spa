# Vue GitHub Pages SPA

This project is a single-page application (SPA) built with Vue.js and Vue Router, configured to be hosted on GitHub Pages with automated CI/CD deployment.

## Features

- ⚡ Vue.js 3 with Composition API
- 🚀 Vue Router 4 for client-side routing
- 📦 Automated CI/CD with GitHub Actions
- 🧪 Jest testing framework
- 🔧 ESLint for code quality
- 📱 GitHub Pages deployment
- 🔄 Continuous integration and deployment

## Project Structure

```
vue-github-pages-spa
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD workflow
├── public/
│   └── index.html          # Main HTML file for the application
├── src/
│   ├── main.js            # Entry point of the Vue application
│   ├── App.vue            # Root component of the application
│   ├── router/
│   │   └── index.js       # Vue Router configuration
│   └── views/
│       ├── Home.vue       # Home view component
│       └── About.vue      # About view component
├── tests/
│   └── unit/              # Unit tests
│       ├── Home.spec.js
│       └── About.spec.js
├── .gitignore             # Specifies files to ignore by Git
├── babel.config.js        # Babel configuration
├── jest.config.js         # Jest testing configuration
├── vue.config.js          # Vue CLI configuration
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## CI/CD Pipeline

This project includes a complete CI/CD pipeline using GitHub Actions that:

1. **Builds** the application on every push and pull request
2. **Tests** the code using Jest
3. **Lints** the code using ESLint
4. **Deploys** to GitHub Pages automatically on pushes to main/master branch

### Pipeline Steps

- Install dependencies
- Run code linting
- Execute unit tests
- Build the application
- Deploy to GitHub Pages (on main branch only)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehimself/vue-github-pages-spa.git
   cd vue-github-pages-spa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application locally:**
   ```bash
   npm run serve
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

5. **Run linter:**
   ```bash
   npm run lint
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

7. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment

### Automated Deployment (Recommended)

The project is configured for automatic deployment to GitHub Pages using GitHub Actions. Simply push to the main branch and the deployment will happen automatically.

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
npm run deploy
```

## GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Select "GitHub Actions" as the source
4. The site will be available at `https://yourusername.github.io/vue-github-pages-spa/`

## Development

### Available Scripts

- `npm run serve` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run preview` - Build and serve production version locally
- `npm run deploy` - Manual deployment to GitHub Pages

### Adding New Features

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass: `npm test`
5. Ensure code passes linting: `npm run lint`
6. Create a pull request

The CI/CD pipeline will automatically test your changes when you create a pull request.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- Navigate to the Home page to see the main content.
- Visit the About page to learn more about this project.

## License

This project is licensed under the MIT License.