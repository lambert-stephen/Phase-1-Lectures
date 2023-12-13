//Review Arrays
const arr = [10, 20, 15, 0, 1]
arr.push(25, 30)
console.log(arr)
arr.pop()
console.log(arr)
//push and pop from an array
//destruture an array with spread operator
const newArray = [...arr]
console.log(newArray)
//filter an array
const filterArray = newArray.filter((number) => {
    console.log(number)
    if(number > 10){
        console.log(number)
        return true
    }
    // else{
    //     return false
    // }
    return false
})
console.log(filterArray)

const students = {
    First_Name: "John",
    lastName: "Doe",
    "age": 25,
    concentration: "Software Engineering",
    phases: ["Javacscript", "React", "Python", "Flask"],
    func: (data) => console.log(data)

}
console.log(students.firstname)
console.log(students["age"])
students.firstname = "Stephen"
console.log(students)
console.log(Object.values(students))
console.log(Object.keys(students))

const studentUpdate = []
for(student in students){
    console.log(students[student])
    console.log(student)
    studentUpdate.push(students[student])
}
console.log(studentUpdate)

//select an element from the dom using querySelector


//change the text content


//create a new div element


//demonstrate appending



