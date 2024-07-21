const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "rdsaot",
    "video": true,
    "screenshotOnRunFailure": true,
    baseUrl: 'https://conduit.realworld.how',
    viewportWidth: 375,
    viewportHeight: 667,
  },
});
