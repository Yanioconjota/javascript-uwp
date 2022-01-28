var people = [
  {
    //the 'Tony' object
    firstname: 'Tony',
    lastname: 'Soprano',
    addresses: [
      '14 Aspen Dr, Caldwell, NJ 07006, United States',
      '101 Kearny Avenue',
      '230 NJ-17, Lodi, NJ 07644, USA'
    ]
  },
  {
    //the 'Paulie' object
    firstname: 'Paulie',
    lastname: 'Gualtieri',
    addresses: [
      '30 70th St, NY 11209'
    ],
    greet: function () {
      return `Hi ${this.firstname}`;
    }
  }
];

console.log(people);