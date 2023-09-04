describe('My Test Suite',()=>{

    it('Data driven Test',()=>{

        cy.fixture('orangehrm2').then((orangehrmData)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            orangehrmData.forEach((data)=>{
                cy.get("input[placeholder='Username']").type(data.username)
                cy.get("input[placeholder='Password']").type(data.password)
                cy.get("button[type='submit']").click();
        
                if(data.username=='Admin' && data.password=='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                    .should('have.text',data.expected)

                    cy.get('.oxd-userdropdown-name').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                    .should('have.text',data.expected)
                }
            })
        })
    })
})