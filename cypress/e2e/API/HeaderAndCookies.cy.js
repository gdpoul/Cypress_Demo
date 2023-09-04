describe('API Testing',()=>{

    var authToken=null;
    before("Creating access token",()=>{

        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{'Content-Type':'application/json'},
            body:{
                clientName:'ABC',
                clientEmail:Math.random().toString(36).substring(2)+"@gmail.com"
            }           
        }).then((response)=>{
            expect(response.status).equal(201);
            authToken=response.body.accessToken
        })
    })

    it('Create An Order',()=>{
      
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' +authToken
            },
            body:{
                "bookId":1,
                "customerName":'Abc1234'
            }           
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        })
    })

    it('Get All Order',()=>{

        cy.request({
            method: 'GET',
            url:'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' +authToken
            },
            cookies:{
                'cookieName':'my cookies'
            }
        }).then((respose)=>{
            expect(respose.status).to.eq(200);
            expect(respose.body).has.length(1);
        })
    })
})