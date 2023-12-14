// Array manipulation
const cars = [
    {
        color: "Blue",
        make: "Chevy",
        model: "Camaro",
        cap: 4
    },
    {
        color: "Black",
        make: "Dodge",
        model: "Charger",
        cap: 5
    }
]
const filterModel = cars.filter((c)=>{
    console.log(c)

})
const filteredArray = cars.filter((car)=> {
    console.log(car)
    console.log(car.color)
    console.log(car.make)
    console.log(car.model)

    if(car.cap != 5){
        return false
    }
    // else{
    //     return true 
    // }
    return true
})
console.log(filteredArray)

const numbers = [10, 20, 30, 40, 50, 60]
console.log(numbers.slice(0, 4))
console.log(numbers)
console.log(numbers.splice(0, 4).push(1))
console.log(numbers.push(1))
console.log(numbers)
console.log(numbers.includes(10))
function findNumber(num){
    if(num > 50){
        return true
    }
    return false
}
console.log(numbers.find((num)=> num > 50))
console.log(numbers.find((num)=> findNumber(num)))
//query selectors and event listeners
/*
*/
//array methods
const h= document.querySelector("#header header div h1")
console.log(h)
h.textContent = "Press"
h.addEventListener("click", (e)=> {
    console.log("hello")
    console.log(e.target.parentNode)
})

const form = document.querySelector("#book-form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(document.querySelector("#form-title").value)
    console.log(event.target.title.value)

})
