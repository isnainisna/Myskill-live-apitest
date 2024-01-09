const assert = require('chai').assert;
const app = require('../../assert')

describe('welcome test',function(){
    it('app should return message', function(){
        assert.equal(app(),"welcome to my first QA portofolio")
    })
})