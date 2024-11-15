const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  numTestsKeptInMemory: 0,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000,
    slowTestThreshold: 3000,
    excludeSpecPattern: [
      "**/1-getting-started/*",
      "**/2-advanced-examples/*",
      "**/mytest/*",
    ],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  compilerOptions: {
    types: ["cypress", "cypress-file-upload"],
  },
});
