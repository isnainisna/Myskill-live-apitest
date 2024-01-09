const { expect } = require('chai')
const request = require('supertest')

describe('Post Request Example', () =>{
    const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send ({
            "id": 123456,
                "username": "Isnaini",
                "firstName": "Isna",
                "lastName": "Ini",
                "email": "isnaini@gmail.com",
                "password": "12345",
                "phone": "089783654",
                "userStatus": 2
        })

        it('response status equal to 200', async () => {
            //checkresponse status harus sama dengan 200
            expect((await response).status).to.equal(200)
        })

        it('response body to haveOwnProperty', async () =>{
            //expect dalam body response terdapat value 'message'
            expect((await response).body).to.haveOwnProperty('message')
        })
        //reporting in mochawesome

})