Array.prototype.myCustomFeature = 'cool!';

var arr = ['Ironman', 'Captain America', 'Spider-man'];

var arr2 = ['Jim', 'Pam', 'Dwight'];

for (const prop in arr) {
  console.log(`${prop}: ${arr[prop]}`);
}

for (const prop in arr2) {
  console.log(`${prop}: ${arr2[prop]}`);
}

