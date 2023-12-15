function arrayConverter(array) {
    let object = {};

    for(let i = 0; i < array.length; i++){
        let key = array[i];
        if(object[key]){
            object[key]++;
        } else {
            object[key] = 1;
        }
    }
 
    return object;
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}