const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  numTestsKeptInMemory: 0,
  e2e: {
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 60000,
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
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
