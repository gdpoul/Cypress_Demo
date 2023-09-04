
describe('multiple elements handling',()=>{

    it('handle multiple elements',()=>{
        cy.visit("https://www.amazon.in/")

    // find total header link
       cy.get('#nav-xshop>a.nav-a')
       .then(($links)=>{  
           const totalLinks=$links.length;
           cy.log("Total header links: "+totalLinks)
        })

    // print all header link in console
        cy.get('#nav-xshop>a.nav-a')
        .each(($link)=>{
         cy.wrap($link).invoke('text')
            .then((text)=>{
              cy.log(text);
            })
        })       
    })

    it('print todays Deal options',()=>{
        cy.visit("https://www.amazon.in/")
        cy.contains("Today's Deals").click(); 
        cy.get('ol.a-carousel>li>a')
          .each(($all)=>{
            const deal=$all.text();
            cy.log(deal)
          })      
    })
    it('find Get to Know Us footer link',()=>{
        cy.visit('https://www.amazon.in/')
        cy.xpath("//div[text()='Get to Know Us']/..//ul/li")
          .then(($links)=>{
             cy.log("total footer links are: "+$links.length)
             cy.log($links.text())
          })
    })
})