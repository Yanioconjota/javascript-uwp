function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function(){
    console.log(greeting);
  }, 1500);
}

sayHiLater();

function tellMeWhenDone(callback) {
  var a = 1000;// come code...
  var b = 2000;// come code...
  callback(); //el callback, corre la función que le asignes
}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function () {
  console.log("All done...");
});

tellMeWhenDone(function () {
  console.warn("I am done!");
});

