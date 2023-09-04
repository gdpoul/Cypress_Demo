describe('File Upload and Download', ()=>{


    it('file upload demo1', ()=>{
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#myfile').selectFile('cypress/fixtures/logoImage.jpg') 
    })

    it('file upload demo2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/logoImage.jpg')
        cy.get('#file-submit').click() 
    })

    it('file upload - Drag and drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/logoImage.jpg',{action:'drag-drop'})
        cy.get('#file-submit').click() 
    })
    
    it('File Upload - Shadow DOM',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true})
              .selectFile('cypress/fixtures/logoImage.jpg',{force:true})

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('logoImage.jpg')
    })
    it('File Downlaod test',()=>{
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','my_downloads','example.jpg')
    })
})
