let fruits = ["apple","watermelon","grapes"]
console.log("Original Array");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after Push operation:");
console.log(fruits);

fruits.pop();
console.log("Array after pop operation:");
console.log(fruits);

console.log("Accesing the 1st & last element:");
console.log(fruits[0]);
let size = fruits.length;
console.log(fruits[size - 1]);

console.log();
fruits.unshift("cherry");
console.log(fruits);

console.log();
fruits.shift();
console.log(fruits);

console.log("Array after splice operation");
let removeElement=fruits.splice(1,1);
console.log(fruits);


fruits.push("Orange");
fruits.push("Banana");
fruits.push("Mango");
console.log("Accessing an array using Loop:");
for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}
