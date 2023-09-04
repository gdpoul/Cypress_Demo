const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    "reportFilename": "Report",
    "overwrite":false,
    "html": true,
    "json": true,
    "quiet": true,
    "timestamp":"ddmmyyyy_HHMMss"
  },
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:10000,
    setupNodeEvents(on, config) {
      on('task',{downloadFile})   
      require('cypress-mochawesome-reporter/plugin')(on);  
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
