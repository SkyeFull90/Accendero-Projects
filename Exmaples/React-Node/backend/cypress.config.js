const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "vis7mo";
      //baseUrl: 'http://localhost:8080'
    },
  },
});
