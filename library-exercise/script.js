// function Book(title, author, pages, info) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.info = info
//   this.sayInfo = function() {
//     return info
//   }
// }

function Book(title, author, pages, info) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = info
}

Book.prototype.readInfo = function() {
  return this.info
}
