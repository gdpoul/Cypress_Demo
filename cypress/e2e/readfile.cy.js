/// <reference types="cypress" />

before(()=>{
    cy.fixture('example.json').as('data')
})
   
it('Read file using fixture', ()=>{
    cy.get('@data').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

})

it('Read file using readFile()', ()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})
    
it('write file demo', ()=>{
    cy.writeFile('sample.txt','Hello, I am Ganesh\n')
    cy.writeFile('sample.txt','Welcome to Cypress!!', {flag:'a+'})
})
