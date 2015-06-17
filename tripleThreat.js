var assert = require('assert');

/********************************
* Return true if the array contains, somewhere, three increasing
* adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
*
* See the asserts below for examples of input
* and expected output.
*
* If you have node installed, all you need to do to test
* your code is run: `node tripleThreat.js`. If you see errors,
* it is because the tests below did not pass. Once the
* tests do pass, you will see a log of `Success!`
*
* YOUR CODE BELOW HERE
********************************/


function tripleThreat(array) {
  var len = array.length;
  for(var i=0; i<len-2; i++){
      if(array[i+1]==array[i]+1){
         if(array[i+2]== array[i]+2){
            return true
         }
      }
  }
  return false;
}

/********************************
* YOUR CODE ABOVE HERE
********************************/

assert.equal(
  tripleThreat([1, 4, 5, 6, 2]),
  true
);

assert.equal(
  tripleThreat([1, 2, 3]),
  true
);
