const assert = require('assert');

// assert.equal(1, '1')
firstArray = [1,2,3]
secondArray = [firstArray]
firstArray = [4,5,6]
// assert.deepStrictEqual([1,2,3], ['1',2,3]);

// assert.strictEqual(firstArray, secondArray);
assert.equal(false, true);

assert.strictEqual(firstArray,secondArray);
assert.equal(false,true)


// Example One:
// assert.equal(false, true);
// assert.equal(true, true);
// assert.equal(false, true);

// Example Two:
// assert.strictEqual(1, '1');
// assert.equal(true, true);
// assert.equal(false, true);

// Example Three:
// assert.equal(1, '1');
// assert.strictEqual([1,2,3], [1,2,3]);
// assert.equal(false, true);