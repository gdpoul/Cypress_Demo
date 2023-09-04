describe('Handle Tabs/Window',()=>{

    it('Approch 1', ()=>{

        cy.visit('http://the-internet.herokuapp.com/windows')  //parent

        cy.get('div.example > a').invoke('removeAttr','target').click() //click on link
 
        // validate new url
        cy.url().should('include','http://the-internet.herokuapp.com/windows/new') 
        cy.get('h3').should('have.text','New Window')

        cy.wait(5000)
        // go back to parent tab
        cy.go('back')
    })

    it('Approch 2', ()=>{

        cy.visit('http://the-internet.herokuapp.com/windows')  //parent
        cy.wait(3000);
        cy.get('div.example > a')
        .then((ele)=>{
            let newUrl=ele.prop('href');
            cy.visit(newUrl)
        })
        cy.url().should('include','http://the-internet.herokuapp.com/windows/new')        
        cy.wait(5000)
        cy.go('back')  // go back to parent tab
    })
    it('Remove target attribute', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//a[contains(@href,'youtube')]").then(($ele) => {
          const newUrl = $ele.prop('href');
          cy.request(newUrl).then((response) => {
            expect(response.status).to.eq(200); // Adjust the expected status code as needed
          });
        });
      });     
})