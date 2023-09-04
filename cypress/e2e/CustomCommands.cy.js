
describe('Custome Commands', ()=>{

    it('handling links', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        
        // direct without using custom commands
        // cy.get('a').contains('Apple MacBook Pro 13-inch').click();
        // cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')

        // using custom commands
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    it('Overwriting existing commands', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        
        // using custom commands
        cy.clickLink('APPLE MACBOOK PRO 13-INCH')
        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')
    })
    it('Login commands',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.loginApp()
    })
})