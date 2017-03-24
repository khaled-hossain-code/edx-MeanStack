var assert = require('assert');

describe(".checksum", function(){
    it('should return true', function(){
        assert(2+2,4);
    });

    it('should fail gracefully', function(){
        assert.throws(function(){
            throw 'Error!'
        })
    })
})

describe('my other function', function(){
    it('async', function(done){
        setTimeout(function(){
         done();   
        },25);
    })
})