import { defineConfig } from "cypress";

// @ts-ignore
export default defineConfig({

    projectId: '5a3xts',

  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },

  },
});
