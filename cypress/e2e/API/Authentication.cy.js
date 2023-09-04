describe('Authentication',()=>{


    it('Basic Authentication',()=>{

        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it('Digest Authentication',()=>{

        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'degest'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it('Bearer Token Authentication',()=>{

        const bearerToekn ="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"
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+bearerToekn
            }
        }).then((response)=>{
            expect(response.status).to.eq(200); 
        })
    })

    it('API Key Authentication',()=>{

        cy.request({
            method:'GET',
            url:'api.openweathermap.org/data/2.5/weather?q=Delhi',
            qs:{
                appid:'f5a3d10293f9fc8f0b6ff510d20b71bb'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200); 
        })
    })
})