const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  it('should return the sum of two numbers rounded to two decimal places', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
    assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 3.1);
  });

  it('should return the difference of two numbers rounded to two decimal places', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -3.1);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3.1);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -5.9);
  });

  it('should return the quotient of two numbers rounded to two decimal places', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.31);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.31);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, -2), 0);
  });
});

