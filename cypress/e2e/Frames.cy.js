describe('Handling Frames',()=>{

    it('Approch 1', ()=>{

        cy.visit('http://the-internet.herokuapp.com/iframe') 

        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Ganesh Poul {ctrl+a}')
        cy.get("button[title='Bold']").click()
    })

    it('Approch2 -By using custome commands', ()=>{

        cy.visit('http://the-internet.herokuapp.com/iframe') 

        cy.getIframe('#mce_0_ifr').clear().type('Welcome to cypress {ctrl+a}')
        cy.get("button[title='Bold']").click()
    })

    it('Approch3 -By using cypress plugin', ()=>{

        cy.visit('http://the-internet.herokuapp.com/iframe') 

        cy.frameLoaded('#mce_0_ifr'); // Load the frame
        cy.iframe('#mce_0_ifr').type("welcome"); // interact with frame
    })

    it.only('By using cypress plugin',()=>{

        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.frameLoaded("iframe[name='globalSqa']")
        cy.iframe("iframe[name='globalSqa']").within(($frame)=>{
            cy.wrap($frame).get('p > .lazyloaded').trigger('mouseover');
        })
        
    })
})
