function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      function () {
        console.log(i);
      }
    );
  }

  return arr;
}

var fs = buildFunctions();

console.log(fs);
fs[0]();//3
fs[1]();//3
fs[2]();//3

function buildFunctions2() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(
      function () {
        console.log(i);
      }
    );
  }

  return arr;
}

var fs2 = buildFunctions2();

console.log(fs2);
fs2[0]();//0
fs2[1]();//1
fs2[2]();//2

function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var fs3 = buildFunctions3();

console.log(fs3);
fs3[0]();//0
fs3[1]();//1
fs3[2]();//2



