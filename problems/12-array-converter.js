/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
//We need to loop through each array. Every one of the elements in the array become the keys.
//we also need to find a way to count the number of occurences of the key and make it our value.
//Therefore we would need a condition to check everytime the key is mentioned
//still in our loop, we would want to make our object. but since we don't want to make 
//new object everytime, we can then assign it outside the loop and create new object each time.

//initiate the counter variable
//initiate the object variable
//initiate the for loop
//initiate the key function
//initiate a condition to check if the key is in the array, if it is, we add to counter variable.
//add our key to our object, with counter as our value.
//end loop
//return object
//end function

function arrayConverter(array) {
  let object = {};
 array.forEach(function (key){
  object[key]? object[key]++ :object[key] = 1;
 });

 return object;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;