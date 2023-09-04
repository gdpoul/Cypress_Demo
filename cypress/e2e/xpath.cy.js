

describe('Xpath', ()=>{

    it('finds list of items',()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.xpath("//ul[@class='nav navbar-nav']/li").should('have.length',10)


    })

    it('chained xpath',()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.xpath("//ul[@class='nav navbar-nav']").xpath("./li").should('have.length',10)
        
    })
})