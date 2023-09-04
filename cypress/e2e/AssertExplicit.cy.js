import { expect } from 'chai';
import assert from 'assert';

describe('Verify Explicit Assertion (regression)',{tags:'@regressionTag'},()=>{

    it('Write test using expect:',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
          .then((header)=>{
            expect(header.text()).to.equal('Dashboard') 
          })
    })

    it('Write test using assert:',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
          .then(($header)=>{
            assert.equal($header.text(),'Dashboard')
          })         
    })
})