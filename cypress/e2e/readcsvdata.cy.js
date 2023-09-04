describe('Read Excel data in Cypress', () => {
    const filePath = 'cypress/fixtures/excelData.xlsx';
    const sheetName = 'Sheet1';
    let username;
    let password;

    before(()=>{  
        cy.readExcelData(filePath, sheetName).then((data) =>{
        // Access the data and use it in your test
        data.forEach((row) => {
            // Access individual fields in the row
             username = row['username'];
             password = row['password'];
        })
    })
   })

    it('should read data from Excel and use it in the test', () => {
          // Perform actions with the data
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
          cy.get("input[name='username']").type(username)
          cy.get("input[name='password']").type(password)
          cy.get("button[type='submit']").click();
    })

})