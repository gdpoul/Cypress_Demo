/// <reference types="cypress" />

it('file upload demo', ()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('logoImage.jpg')
})

it('File Downlaod test',()=>{
    
})