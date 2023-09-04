describe("Cypress Queries",()=>{

    beforeEach(()=>{
        cy.viewport(1920,1080);
    })

    it('as query',()=>{
        cy.visit('https://demo.opencart.com/admin');
        
        cy.get('#input-username').as('userName');
        cy.get('@userName').type("demo");

        cy.get('#input-password').as('password');
        cy.get('@password').type("demo");

        cy.get('.btn').click();
        cy.get('.btn-close').click();
    })

    it('children query',()=>{
        cy.visit('https://demo.opencart.com/admin');
        
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.get('.btn').click();
        cy.get('.btn-close').click();

        cy.get('#menu-customer > a').click();

        cy.get('#menu-customer>ul').children().should('have.length',5)

    })
    it('contains',()=>{
        cy.visit('https://demo.opencart.com/admin');
        
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.contains('Login').click(); 
    })

    it('eq',()=>{
        cy.visit('https://demo.opencart.com/admin');        
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.contains('Login').click(); 
        cy.get('.btn-close').click();
        cy.get('#menu-customer > a').click();

        cy.get('#menu-customer>ul>li').eq(0).click();

    })
    it.only('filter & find command',()=>{
        cy.visit('https://demo.opencart.com/admin');        
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.contains('Login').click(); 
        cy.get('.btn-close').click();
        cy.get('#menu-customer > a').click();
        cy.get('#menu-customer>ul>li').eq(0).click();

        // use filter() query
        cy.get('thead tr td a').filter(':contains("Customer")').should('have.length',2);

        //use find query
        cy.get('thead tr').find('td').should('have.length',7)

    })
})