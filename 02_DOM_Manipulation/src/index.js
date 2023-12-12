//BookStore data
const bookStore = {
    location: "Seattle",
    address:'333 st ne Seattle wa 99999',
    number: 9999999999,
    name: 'Easley\'s Technical Books',
    hours: 'Monday - Friday 9am - 6pm',
    inventory: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            id:6,
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            id:7,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]
  }

console.log(document.querySelector("div"))
console.log(document.querySelector("#header"))
console.log(document.querySelector(".secondDiv"))
console.log(document.querySelector("#book-list"))
console.log(document.getElementById("book-list"))
console.log(document.querySelectorAll("div"))
console.log(document.getElementsByClassName("list"))
console.log(document.getElementsByTagName("li"))
const book_list = document.querySelector("#book-list")
const h1 = document.querySelector("h1")
h1.textContent = "Welcome to the Bookstore!"
h1.innerText = "Flatiron Bookstore"

body = document.querySelector("body")
const newDiv = document.createElement("div")
newDiv.innerHTML = `
  <p> This is a new Div </p>
`
body.append(newDiv)
// newDiv.remove()
newDiv.innerHTML = ""


function renderHeader(){
    return document.querySelector("h1").textContent = bookStore.name
}
renderHeader()

const renderH1 = () => {
    const header = document.querySelector("h1")
    header.textContent = bookStore["name"]
}
renderH1()

function renderFooter(){
    const footers = document.querySelectorAll('footer div')
    console.log(footers)
    footers[0].textContent = bookStore.name
    footers[1].textContent = bookStore.address
    footers[2].textContent = bookStore.hours
    return footers
}
renderFooter()

// bookStore.inventory.forEach((book) => {
//     console.log(book)
//     const li = document.createElement("li")
//     const h3 = document.createElement("h3")
//     const pAuthor = document.createElement("p")
//     const pPrice = document.createElement("p")
//     const image = document.createElement("img")
//     const btn = document.createElement("button")
//     h3.textContent = book.title
//     pAuthor.textContent = book.author
//     pPrice.textContent = `$ ${book.price}`
//     image.src = book.imageUrl
//     btn.textContent = "Delete"
//     li.className = "list-li"
//     li.append(h3, pAuthor, pPrice, image, btn)
//     // book_list.append(li)
//     document.querySelector("#book-list").append(li)
// })


//* 1. use a forEach to iterate over BookStore inventory.
//  2. Pass the forEach an anonymous callback that takes the inventory data and creates an li, with an h3 tag, 2 p tags, and image tag.
// 3. Add the cardData content to the tags.
// 4. Append li to the DOM through the ul with the id of book-list


//* Refactor to make the anonymous callback its own function so it can be reused later. 

const renderBookCard = (book) => {
    console.log(book)
    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const pAuthor = document.createElement("p")
    const pPrice = document.createElement("p")
    const image = document.createElement("img")
    const btn = document.createElement("button")
    h3.textContent = book.title
    pAuthor.textContent = book.author
    pPrice.textContent = `$ ${book.price}`
    btn.textContent = "Delete"
    image.src = book.imageUrl
    li.className = 'list-li'
    li.append(h3, pAuthor, pPrice, image, btn)
    book_list.append(li)
}
bookStore.inventory.forEach(renderBookCard)

