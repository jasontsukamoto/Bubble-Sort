var chai = require('chai');
var should = chai.should();

var bubble = require('../bubble-sort.js');

describe('bubble-sort', function () {

  it('should be a function', function () {
    bubble.bubbleSort.should.be.a('function');
  });

  it('should bubble sort the array', function () {
    bubble.bubbleSort([5,7,1,2,9,100,414,42,41,7,8,9,333,320,65,750,29,34,0]).should.be.equal(64);
  });
});