
describe('My test suite',()=>{

    it('Navigation Test',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq','Your Store')

        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        cy.title().should('eq','Cameras')

        // Navigation
        cy.go('back') //go back to home
        cy.title().should('eq','Your Store')

        cy.go('forward') // go to forword
        cy.title().should('eq','Cameras')

        cy.go(-1) // alternative of back
        cy.title().should('eq','Your Store')

        cy.go(1); // alternative of forward
        cy.title().should('eq','Cameras')

        
        cy.reload()
    })
})