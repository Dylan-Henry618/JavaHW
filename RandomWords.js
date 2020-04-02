console.log("RANDOM WORDS")

firstArray = ["cheese puffs", "pancakes", "waffles", "steak", "chicken"];
secondArray = ["milk", "soda", "orange juice", "water" , "wine", "beer"];

var food = Math.floor(Math.random() * firstArray.length);
var drink = Math.floor(Math.random() * secondArray.length);

console.log("Your next meal should probably consist of " + firstArray[food] + " and " + secondArray[drink]);
