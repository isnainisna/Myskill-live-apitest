const request = require('supertest')
const baseUrl = require('../../env')

describe('get request example', () => {
    it('Find Pets By Status', async () =>{
        const response = request(baseUrl())
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})