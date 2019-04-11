const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('some demo test',function()
{
  it('Save a record',function(done){
      var char = new MarioChar({
        name:'Rakib'
      });
      char.save().then(function(){
        assert(char.isNew === false);
        done();
      });

  });
});
