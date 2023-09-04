
describe('Alerts (smoke)',{tags:'@smokeTag'},()=>{
    
    it('JS Alert', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        // alert window automatically close by cypress
        cy.get("button[onclick='jsAlert()']").click();

        // for validation on alter we need to use events
        cy.on('window:alert',(al)=>{
            expect(al).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    
    it('JS Confirmation Alert -OK', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(al)=>{
            expect(al).to.contains('I am a JS Confirm')
        })

        // cypress automatically close alert window by using ok button-defalut
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('JS Confirmation Alert -Cancel', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',()=> false)  // cypress closes alert window by cancel button
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('JS Prompt Alert', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text','You entered: Welcome')
    })

    it('Authenticated Alert', ()=>{

        // Approch 1
        cy.visit('http://the-internet.herokuapp.com/basic_auth',
                 {auth:{username:"admin",password:"admin"}});
        
        cy.get('p').should('contain',"Congratulations!")   

        // Approch 2
        // cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')
        // cy.get('p').should('contain',"Congratulations!")
    })
})