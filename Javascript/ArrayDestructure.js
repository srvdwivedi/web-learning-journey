// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function(starterIndex, mainMenuIndex){
    return ([ this.starterMenu[starterIndex],  this.mainMenu[mainMenuIndex] ])
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  }
};

const arr = [1, 2, 3, 4];

// You should not assign variables like below
const a = arr[0];
const b = arr[1];

// Array destructure :
const [w, x, y, z] = arr;

console.log(w, x, y, z);

// Use node [Filename] to run in console
// eg: node ArrayDestructure.js

console.log(arr);

// so original array is not affected

// ---------------------------------------------------------------------------------------------------

let [first, second] = restaurant.categories

console.log(first, second)


// You can skip item by just using comma
let [first1, ,third] = restaurant.categories

console.log(first1, third)

// ---------------------------------------------------------------------------------------------------

// Replace variables without using temp
// [first, second] = [second, first]

// console.log(first, second)

// ---------------------------------------------------------------------------------------------------

console.log('Your Order :', restaurant.order(2, 1))

// ---------------------------------------------------------------------------------------------------

// Nested Destructuring :

const nestedArray = [1, 2, [3, 4]]

let [foo, , [bar, ho]] = nestedArray


console.log(foo, bar, ho)