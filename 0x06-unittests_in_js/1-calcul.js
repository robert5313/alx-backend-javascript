'use strict';
function round(num) {
  return Math.round(num * 100) / 100;
}

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a + b);
  }

  if (type === 'SUBTRACT') {
    return round(a - b);
  }

  if (type === 'DIVIDE') {
    if (round(b) === 0) {
      return 'Error';
    }

    return round(a / b);
  }
}

module.exports = calculateNumber;
