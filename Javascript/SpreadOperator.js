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

const dishes = ['Dish1', 'Dish2', 'Dish3']

console.log('Merged Array :', [ ...restaurant.mainMenu, ...dishes])


// Shallow copy 
const mainMenuCopy = [...restaurant.mainMenu]
console.log('mainMenuCopy', mainMenuCopy)

// Merge Array : 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log('Combined Menu :', menu)

const name = 'Sourav Dwivedi'

console.log("Res :", [...name])