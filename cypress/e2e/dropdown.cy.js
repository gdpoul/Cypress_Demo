describe("Handle dropdown",()=>{

    it('Dropdown with selects class',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        
        // Select dropdwon value
        cy.get('#zcf_address_country').select(0) //use parameter as text/value/index
        .should('have.value','Afghanistan')
    })

    it('bootstrap dropdown without select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        // Select dropdwon value
        cy.get('#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('India{enter}')

        cy.get('#select2-billing_country-container')
         .should('have.text','India')
    })

    it('Auto suggest dropdown',()=>{

        cy.visit("https://www.wikipedia.org/")
        
        cy.get('#searchInput').type('Delhi')
        cy.get('h3.suggestion-title').contains('Delhi University').click() 
        cy.get('.mw-page-title-main').should('have.text','Delhi University')
    })

    it('Dynamic dropdown1',()=>{

        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type('Cypress Automation')
        cy.get('div.wM6W7d > span').should('have.length',12)
        cy.get("div.wM6W7d[role='presentation']").each(($el, index, $list)=>{

            if($el.text()=='cypress automation salary'){
                cy.wrap($el).click()
            }
        })
        cy.get("textarea[name='q']").should('have.value','cypress automation salary')
    })

    it('Dynamic dropdown2',()=>{

        cy.visit("https://www.amazon.in/")

        cy.get('#twotabsearchtextbox').type('phone');
        cy.get('div.s-suggestion-container')
        .find('.s-suggestion')
        .each(($element) => { 
            const suggestion = $element.text();
            cy.log(suggestion);
        })
    })
})