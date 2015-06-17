var assert = require('assert');

/********************************
* We want make a package of goal kilos of skittles. We have
* inventory of small bags (1 kilos each) and big bags (5 kilos each).
* Return the number of small bags to use, assuming we always
* use big bags before small bags. Return -1 if it can't be done.
*
* See the asserts below for examples of input
* and expected output.
*
* If you have node installed, all you need to do to test
* your code is run: `node skittles.js`. If you see errors,
* it is because the tests below did not pass. Once the
* tests do pass, you will see a log of `Success!`
*
* YOUR CODE BELOW HERE
********************************/


function createPackage(small, big, goal) {
	var count=0;
	while(goal/5 >= 1 && big > 0){
		goal -= 5;
		big -= 1;
	}

	if(goal == 0){

		return 0;
	}else if(goal<1){
      
		return -1;
	}
	
  	while(goal >0 && small > 0){
		count++;
		goal -= 1;
		small -= 1;
	}

	if(goal == 0){
		return count;
	}else{
		return -1;
	}
	
}

/********************************
* YOUR CODE ABOVE HERE
********************************/

assert.equal(
 createPackage(4, 1, 9),
 4
);

assert.equal(
 createPackage(4, 1, 10),
 -1
);

assert.equal(
 createPackage(4, 1, 7),
 2
);

assert.equal(
 createPackage(6, 2, 7),
 2
);

assert.equal(
 createPackage(4, 1, 5),
 0
);

assert.equal(
 createPackage(4, 1, 4),
 4
);

assert.equal(
 createPackage(5, 4, 9),
 4
);

assert.equal(
 createPackage(9, 3, 18),
 3
);

console.log('Success!');
