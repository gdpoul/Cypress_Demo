
describe('OAuth2',()=>{

    var access_token='';
    it('Get OAuth2 Access Token',()=>{

        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                client_id:'b5b91fcc9041a36f8fa6',
                client_secret:'4d1129be4f2ec5d7367aac8cba176f3765d90af2',
                code:'1084f2eb197f14b87504'
            }
        }).then((response)=>{
           expect(response.status).to.eq(200); 
           const param= response.body.split('&');
           access_token=param[0].split('=')[1];
        })
    })
})