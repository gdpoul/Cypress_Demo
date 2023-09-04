require('@cypress/xpath');

describe('Window/tab handling', ()=>{

  it('handle multiple window', () => {
    cy.visit('https://www.hyrtutorials.com/p/window-handles-practice.html')

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
      cy.get('#newTabBtn').click()

      cy.get('@windowOpen').should('be.called').then(() => {

        cy.window().then((newWin) => {

          // Perform operations on the new window
          cy.wrap(newWin.document.body).contains('New Window')
            // cy.url().should('contain','https://www.hyrtutorials.com/p/alertsdemo.html')         

          //Switch back to the original window
           cy.window().then((originalWin) => {
             // Perform operations on the original window if needed
          })
        })
      })
    })
  })

})