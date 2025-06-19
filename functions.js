function hello(){
    console.log("Hello js");
}
hello();

function add(a,b){
    console.log(a+b);
}
add(1,2);

function displayAnotherFunction(func){
    func(1,2);
}
displayAnotherFunction(add);

let varFunc = add;
varFunc(1,4);

let newFuncVar = function(){
    console.log("Variable Function");
};

newFuncVar();

const arrowFuncVar = ()=>{
    console.log("Arrow Functions");
};

arrowFuncVar();

//Filter , Map, Reduce
let nums = [1,2,3,4,5];
let evens = nums.filter((n)=>{
    return (n%2===0);
});
let newEvents = nums.filter((n) => n%2 === 0);
console.log(evens);

let newList = [];

for(let i = 0;i<nums.length;i++){
    if(nums[i]%2 === 0){
        newList.push(nums[i]);
    }
}
console.log(newList);

console.log("Using Map method");
let squares = nums.map((n) => {
    return n*n;
});
console.log(squares);


//Reduce method
console.log("Using Reduce method");
//let sum = nums.reduce((sum, n) => sum + n,0);
let newSum = nums.reduce((sum, n) =>{
    return sum + n;
}, (sum = 0));
console.log(newSum);

