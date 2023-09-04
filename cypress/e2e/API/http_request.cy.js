describe("HTTP Request",()=>{


    it.only("GET Request", ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status')
        .should('equal',200);
    })

    it("POST Request", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body:{
                name: "Raj",
                job: "QA Engineer"
            }
        })
        .its('status')
        .should('equal',201);
    })

    it("PUT Request", ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body:{
                name: "Ganesh",
                job: "SQE"
            }
        })
        .its('status')
        .should('equal',200);
    })

    it("DELETE Request", ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2'
        })
        .its('status')
        .should('equal',200);
    })

})