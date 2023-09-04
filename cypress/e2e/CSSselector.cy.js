

describe('CSS Selector', ()=>{

    it('finds list of items',()=>{
        cy.visit('https://www.amazon.com/')

        cy.get('input#twotabsearchtextbox').type('T-shirt') // tag name is optional
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state.a-text-bold').contains("T-shirt") // Assertion
    })

    

})