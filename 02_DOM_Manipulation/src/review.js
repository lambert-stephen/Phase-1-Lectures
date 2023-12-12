//Review variables
//global scope
let globalVar = "Hello World!"
let letVar = "This is our variable"
console.log(globalVar)
globalVar = 20
//Functions & Scope
function test1(param1, param2){
    globalVar = "In the function"
    console.log(globalVar)
    console.log(globalVar + " scope")
    console.log(param1)
    console.log(param2)
}
test1(10, "Stephen")
console.log(globalVar)

function test2(){
    const globalVar = "Goodbye"
    console.log(globalVar)

    if(true){
        const globalVar = "In the if statement"
        console.log(globalVar)
    }
    console.log("In test 2")
    console.log(globalVar)
}
test2()
//Anoymous Functions 
function callCallback(innerFunction){
    console.log(innerFunction)
    innerFunction()
}

callCallback(function(){
    console.log("Calling the annoymous function")
})

callCallback(()=> {
    console.log("Calling the arrow function")
})

callCallback(test2)

const fruits = ["Apple", 'Orange', "Banana", "Pineapple"]
fruits.push("Mango")
fruits.push('Strawberry')
console.log(fruits)

const popFruit = fruits.pop()
console.log(popFruit)

for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

function loopFruit(fruit){
    // fruit.forEach((f)=> {
    //     console.log(f + " To Eat")
    // })
    console.log(fruit)
    return fruit + " To Eat"
}
// loopFruit(fruits)
const mapFruit = fruits.map(loopFruit)
console.log(mapFruit)

const user = {
    name: "Stephen",
    school: "Flatiron School",
    location: "Denver"
}

for(const key in user){
    console.log(`${key}: ${user[key]}`)
}
//Arrow Functions


//Array iterationss


//create a list of fruits


//test pushing to a list


//create a variable that pops an element from the list


//loop through the list with a regular for loop


// loop using a .forEach

//loop using .map






