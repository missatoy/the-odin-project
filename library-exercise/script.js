let myLibrary = [];

function Book(title, author, pages, info) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = info
}

function addBookToLibrary() {
  myLibrary.push(newBook)
}


// function Book(title, author, pages, info) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.info = info
//   this.sayInfo = function() {
//     return info
//   }
// }


// function Book(title, author, pages, info) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.info = info
// }

// Book.prototype.readInfo = function() {
//   return this.info
// }


// function Student() {
// }

// Student.prototype.sayName = function() {
//   console.log(this.name)
// }

// function EighthGrader(name) {
//   this.name = name
//   this.grade = 8
// }

// EighthGrader.prototype = Object.create(Student.prototype)

// const carl = new EighthGrader("Carl")
// carl.sayName() // console.logs "Carl"
// carl.grade // 8
