function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);//[2,4,6]

var arr3 = mapForEach(arr1, function(item) {
  return item * 2
});

console.log(arr3);//[2,4,6]

var arr4 = mapForEach(arr1, function(item) {
  return item > 2
});

console.log(arr4);//[false, false, true]

var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

//currying
var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr5)// [false, true, true]

//simplificando con currrying

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(1));

console.log(arr6)// [false, true, true]

//underscorejs

var arr7 = _.map(arr1, function(item) {
  return item * 3;
});

console.log(arr7);//[3, 6, 9]

var arr8 = _.map(arr1, i => i * 3);//es6
console.log(arr8);//[3, 6, 9]

var arr8 = _.filter([2,3,4,5,6,7,8], function(item) {
  return item % 2 === 0;
});

console.log(arr8);//[2, 4, 6, 8]

