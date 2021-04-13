console.log("hello");

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

function Book(title, autor,pages,isRead) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.isRead = isRead
    this.saybook = function () {
        console.log(title + ' written by ' + autor)
    }
}

const book1 = new Book('hobbit',"Jrr",342,false)

book1.saybook()