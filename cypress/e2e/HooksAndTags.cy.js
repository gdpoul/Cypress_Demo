/* 4 types of hooks provided by Cypress
   before
   after
   beforeEach
   afterEach
*/ 
describe('MyTestSuite',()=>{

    before(()=>{
        cy.log("** before hook **")
    })

    after(()=>{
        cy.log("** before hook **")
    })

    beforeEach(()=>{
        cy.log("** beforeEach **")
    })

    afterEach(()=>{
        cy.log("** afterEach **")
    })

    it('Test1',()=>{
        cy.log("** Test 1 **")
    })
    it('Test2',()=>{
        cy.log("** Test 2 **")
    })
    it('Test3',()=>{
        cy.log("** Test 3 **")
    })
})