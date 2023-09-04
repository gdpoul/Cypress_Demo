describe('API Testing',()=>{


    it('Approach1- Hard cord json object',()=>{

        const requestBody={
            tourist_name: "Mike",
            tourist_email: "mike827ddda@gmail.com",
            tourist_location: "London"
        }

        cy.request(
            {
                method:'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody
            }
        ).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location);
        })
    })

    it('Approach2- Dynamically Generate json object',()=>{

        const requestBody={
            tourist_name: Math.random().toString(36).substring(2),
            tourist_email: Math.random().toString(36).substring(2)+"@gmail.com",
            tourist_location: "London"
        }

        cy.request(
            {
                method:'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody
            }
        ).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location);
        })
    })

    it.only('Approach3- Using Fixture',()=>{


        var requestBody;
        var uniqueEmail=Math.random().toString(36).substring(2);
        cy.fixture('tourist.json').then((data)=>{
            requestBody=data;

            cy.request(
                {
                    method:'POST',
                    url: 'http://restapi.adequateshop.com/api/Tourist',
                    body:{
                        tourist_name: requestBody.tourist_name,
                        tourist_email:uniqueEmail+requestBody.tourist_email,
                        tourist_location:requestBody.tourist_location
                    }
                }
            ).then((response)=>{
                expect(response.status).to.eq(201);
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
                expect(response.body.tourist_email).to.eq(uniqueEmail+requestBody.tourist_email);
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location);
            })
        })

    })
})