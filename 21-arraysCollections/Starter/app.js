var arr = [
  1,
  false,
  {
    name: 'Chorizo',
    address: '111 Main St.'
  },
  function(name) {
    var greeting = 'Hello';
    console.log(`${greeting} ${name}`);
  },
  'Hello'
];

console.log(arr);
arr[3](arr[2].name);
