// Why Objects? ------------------------------------------
// -------------------------------------------------------
//  they allow you to group up related information about a single entity
//  they work better than arrays for this purpose
var theUser = [
  'Nizar Khalife',
  31,
  173,
  'Puerto Rican',
  'married',
  'brown',
  'brown',
  'pizza',
  'nizar@example.com',
  '+33555555555',
  undefined
];

// how are we supposed to remember that position 5 is the hair color?
console.log( theUser[5] );

// with objects it's easier because you reference information by a "key"


// Creating Objects --------------------------------------
// -------------------------------------------------------
//  key-value pairs separated by commas
//  colon separates each key and from the value
var theUser = {
  fullName: 'Nizar Khalife',
  age: 31,
  height: 173,
  nationality: 'Puerto Rican',

  // use quotes for keys with special characters (like spaces)
  'relationship status': 'married',

  hairColor: 'brown',
  eyeColor: 'brown',
  favoriteFood: 'pizza',
  email: 'nizar@example.com',
  phone: '+33555555555',
  hometown: undefined
};


// Accessing Values --------------------------------------
// -------------------------------------------------------
//  the object variable has all the information inside it
console.log( theUser );

//  dot notation allows you to access individual keys
console.log( theUser.hairColor );

//  use [] and quotes for keys with special characters (like spaces)
//  dot notation is more common since it's 3 characters shorter
console.log( theUser['relationship status'] );

//  "in" operator checks if a key exists in the object
console.log( 'hometown' in theUser );
console.log( 'gender' in theUser );

//  compare against "undefined" to checks if a key DOESN'T exist in the object
//  (accessing keys that don't exist returns "undefined")
console.log( theUser.gender === undefined );

// or compare against any value
console.log( theUser.fullName === 'Sami' );


// Modifying Values --------------------------------------
// -------------------------------------------------------
//  assignment with the equal sign allows you to update a key's value
//  it also allows you to add new keys and values that didn't exist before
theUser.hometown = 'San Juan, Puerto Rico';
theUser.eyeColor = 'grey';

//  the "delete" operator can remove a key from the object
delete theUser.phone;

//  it's as if it was never there
console.log( theUser );
console.log( 'phone' in theUser );


// Get Arrays From Objects -------------------------------
// -------------------------------------------------------
//  returns an array of ONLY the KEYS
console.log( Object.keys(theUser) );

//  returns an array of ONLY the VALUES
var myValues = Object.values(theUser);

myValues.forEach(function (oneValue) {
  console.log('- ' + oneValue);
});
