const request = require('supertest')
const baseUrl = require('../../env')

describe('post request example', () => {
    it('success create user', async () =>{
        const response = request(baseUrl())
        .post('/user')
        .send({
                "id": 123456,
                "username": "Isnaini",
                "firstName": "Isna",
                "lastName": "Ini",
                "email": "isnaini@gmail.com",
                "password": "12345",
                "phone": "089783654",
                "userStatus": 2
              }
          )
          console.log((await response).satus)
          console.log((await response).body)
    })
})