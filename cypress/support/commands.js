/// <reference types="cypress" />
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand');
require('@cypress/xpath');
import 'cypress-iframe';
require('@4tw/cypress-drag-drop')



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
Cypress.Commands.add('getIframe',(iframe)=>{
  return cy.get(iframe)
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);
})

// Created Custom commands:

// custom command for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
   cy.get('a').contains(label).click()
})

// Over write contain()
/*Cypress.Commands.overwrite('contains',(originalFn,subject,filter,text,options)=>{
    // determine if a filter argument was passed
    if( typeof text === 'object'){
      options = text
      text = filter
      filter = undefined
    }
    options.matchCase= false
    return originalFn(subject, filter, text, options)
})
*/

//custom commands for login 
Cypress.Commands.add('loginApp',(user, pass)=>{
  
  
})

// custom commands for convert xlsx to Json

const XLSX = require('xlsx');
Cypress.Commands.add('readExcelData', { prevSubject: false }, (filePath, sheetName) => {
  return cy.readFile(filePath, 'binary').then((fileContent) => {
    const workbook = XLSX.read(fileContent, { type: 'binary' });
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
  });
});

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.Commands.overwrite('server', (originalFn, ...options) => {
  options[0].onAnyRequest = (route) => {
    route.abort();
  };
  return originalFn(...options);
});

/**========================== */
Cypress.Commands.add('getDateTimeStamp',()=>{
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
})