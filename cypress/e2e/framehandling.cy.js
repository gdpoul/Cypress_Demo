

describe('Frame Handling',()=>{

    it('Approach 1',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

        const iframe=cy.get('p > .lazyloaded')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.within(()=>{
            cy.get('span#current_filter').trigger('mouseover', { force: true });
            cy.get("div[data-option-value='.automation']").click();
        })
     })

    it('Approach 2 : By using cypress plugin',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

        cy.frameLoaded('p > .lazyloaded')  // Load the Frame
        cy.iframe('p > .lazyloaded').within(() => {    
            cy.get('span#current_filter').trigger('mouseover', { force: true });
          });
    })
})