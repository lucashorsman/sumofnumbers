
function sumFor (list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

// Using while-loop
function sumWhile (list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

// Using recursion
function sumRecursion (list) {
  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1));
  }
}

// Using underscore
const _ = require('underscore');
function sumTheSimpleWay (list) {
  return _.reduce(list, function(memo, num) {
    return memo + num;
  },0);
}