
describe('Handle Tables',()=>{

    beforeEach('Login',()=>{
        // Login to application
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()

        // close window
        cy.get('.btn-close').click()
        // Go to Customers -> customer
        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    })
    it('Check Number of Rows & Columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
          .should('have.length',10)
        
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td")
          .should('have.length',7)  
    })

    it('Check cell data from specific row & column',()=>{
        cy.get('tbody tr:nth-child(8) td:nth-child(3)')
          .contains('neha@gmail.com')
    })

    it('Read All the Rows and Columns data in first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
          .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
          })         
    })

    it('Pagination',()=>{
        // find total number of pages
        let totalPages;
        cy.get('.col-sm-6.text-end').then((ele)=>{
            let mytext=ele.text() // Showing 1 to 10 of 12233 (1224 Pages)
            totalPages=mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 )
            
            cy.log("Total no. of pages are: "+totalPages)
        })
    })
})