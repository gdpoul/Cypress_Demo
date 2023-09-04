describe('My test suite',()=>{

    it('Capture Screenshot and videos',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot("HomePage"); // full page screenshot
       cy.wait(5000);
       cy.get('.col-md-3').screenshot("Logo"); // Element Screenshot
    })
})