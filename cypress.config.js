const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "rdsaot",
    baseUrl: 'https://conduit.realworld.how',
    "video": true,
    "screenshotOnRunFailure": true
  },
});
