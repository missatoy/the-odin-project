function Book(title, author, pages, info) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = info
  this.sayInfo = function() {
    return info
  }
}
