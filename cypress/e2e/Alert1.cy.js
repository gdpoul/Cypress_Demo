
describe('Alerts Handling',()=>{

    it('JavaScript Alert', ()=>{

        cy.visit('https://demo.automationtesting.in/Alerts.html');
        cy.get(`[href="#Textbox"]`).should("be.visible").click();


        cy.window().then((win)=>{

            cy.stub(win,'prompt').callsFake((message, defaultValue)=>{
                return defaultValue;
            })
        })

        cy.get("div#Textbox button").should("be.visible").click();
        
    })
})
