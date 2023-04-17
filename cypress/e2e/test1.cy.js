/// <reference types="cypress" />

it('Open Url', ()=>{
    cy.visit("https://www.letcode.in/");

    cy.get('.navbar-burger').click();
    cy.get('[href="/signup"]').click();

    cy.get('#name').type('Ganesh Poul')
    cy.get('#email').type('abc@gmail.com')
    cy.get('#pass').type('Pass123')
    cy.get('#agree').click()
})