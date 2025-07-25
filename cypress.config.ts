import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    viewportWidth: 1280,
    viewportHeight: 1024,
    retries: {
      runMode: 3,
      openMode: 0,
    },
    specPattern: 'cypress/e2e/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: false,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
    }
  },
})
