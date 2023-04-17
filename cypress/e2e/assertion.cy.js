/// <reference types="cypress" />

it('Assertion Demo', ()=>{
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.id','query-btn')
    .and('have.class','query-btn')
    .and('be.visible')
    .and('be.enabled')
})