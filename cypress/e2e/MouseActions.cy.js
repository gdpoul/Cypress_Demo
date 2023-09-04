
describe('Mouse Operation',()=>{

    it('Mouse Hover', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath("//a[normalize-space()='Mac (1)']")
        .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.xpath("//a[normalize-space()='Mac (1)']")
          .should('be.visible')
    })

    it('Right Click',()=>{
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')

       // Approch 1
         cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
         cy.get('.context-menu-icon-copy > span').should('be.visible')

        // Approch 2
        // cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        // cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it('Double click',()=>{
        cy.visit('http://omayo.blogspot.com/')
        cy.get("button[ondblclick='dblclickAlert()']").dblclick(); // or use trigger('dblclick')
    })

    it('Drag and drop using plugin',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box3').drag('#box103',{force: true})
    })

    it('Scrolling down',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get("img[alt='Flag of India']").scrollIntoView({duration:3000});
        cy.get("img[alt='Flag of India']").should('be.visible')

         cy.get("img[alt='Flag of Argentina']").scrollIntoView({duration:2000})
           .should('be.visible');
         cy.get('#footer').scrollIntoView({duration:3000})
    })

})
