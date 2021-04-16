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

function Book(title, autor, pages, isRead) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.sayBook = function () {
    console.log(this.title + " is a book written by " + this.autor);

    if (this.isOld) {
        console.log("es un libro viejo");
    } else {
        console.log("es un libro nuevo");
    }
}

function LibroAntiguo(name, autorrrr) {
    this.title = name;
    this.autor = autorrrr;
    this.isOld= true;
}

LibroAntiguo.prototype = Object.create(Book.prototype)

const book2 = new LibroAntiguo("La Odisea" , "Homero")

book2.sayBook()

const book1 = new Book('hobbit', "JRR Tolkien ", 342, false)

book1.sayBook()