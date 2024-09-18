module.exports = function reverse (n) {
  const isNumberToArr = n.toString().split('');
  const result = [];
  for(let i = isNumberToArr.length - 1; i >= 0; i = i - 1) {
    result.push(isNumberToArr[i]);
  }
  return nunberReverse = parseInt(result.join(''));
}

