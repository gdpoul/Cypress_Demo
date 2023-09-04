describe(("Assertion Demo (smoke, regression)"),{tags:['@smokeTag','@regressionTag']},()=>{
    
    it('Implicit assertions1 ',()=>{
        cy.visit('https://example.cypress.io');
        cy.contains('get').click(); 
        cy.get('#query-btn')
        .should('contain','Button')
        .and('have.id','query-btn')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.enabled')
    })

    it('Implicit assertions2', ()=>{

        // should and
        cy.url().should('include','orangehrmlive')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','login')
            .and('not.contain','greenhrm');

        cy.title().should('eq','OrangeHRM')
                  .and('include','Orange')
                  .and('contain','HRM')
                  .and('not.contain','ABC')
                  
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') 
        
        cy.xpath("//a").should('have.length',5)

        cy.get("input[placeholder='Username']")
          .should('not.have.value','Admin')
          .type('Admin')
          .should('have.value','Admin')
    })

    it('Explicit Assertion', ()=>{
        // expect -BDD
        //assert  -TDD
       
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        cy.get('p.oxd-userdropdown-name').then((element)=>{

            let actualName=element.text();
            
            // BDD style
            expect(actualName).to.equal('John Simmons')
            expect(actualName).to.not.equal('John')

            // TDD Style
            assert.equal(actualName, 'John Simmons')
            assert.notEqual(actualName, 'John')
        })
    })
})
