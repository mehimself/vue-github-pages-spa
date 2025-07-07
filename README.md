# Vue GitHub Pages SPA

This project is a single-page application (SPA) built with Vue.js and Vue Router, configured to be hosted on GitHub Pages.

## Project Structure

```
vue-github-pages-spa
├── public
│   └── index.html         # Main HTML file for the application
├── src
│   ├── main.js           # Entry point of the Vue application
│   ├── App.vue           # Root component of the application
│   ├── router
│   │   └── index.js      # Vue Router configuration
│   └── views
│       ├── Home.vue      # Home view component
│       └── About.vue     # About view component
├── .gitignore             # Specifies files to ignore by Git
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/vue-github-pages-spa.git
   cd vue-github-pages-spa
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application locally:**
   ```
   npm run serve
   ```

4. **Build for production:**
   ```
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   Follow the instructions in the [Vue CLI documentation](https://cli.vuejs.org/guide/deploying.html#github-pages) for deploying your application to GitHub Pages.

## Usage

- Navigate to the Home page to see the main content.
- Visit the About page to learn more about this project.

## License

This project is licensed under the MIT License.