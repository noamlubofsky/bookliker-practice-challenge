document.addEventListener("DOMContentLoaded", () => {getBooks()});

const getBooks = () => {
    fetch(`http://localhost:3000/books`)
    .then(res => res.json())
    .then(books => books.forEach(renderBookList))
}

const renderBookList = (book) => {
    const sideBookList = document.getElementById("list")

    const bookList = document.createElement('li')
    bookList.innerHTML = book.title

    sideBookList.append(bookList)

    bookList.addEventListener('click', () => {showBookInfo(book)})
}

const showBookInfo = (book) => {

    const bookImage = document.createElement('img')
    bookImage.src = book.img_url

    const bookTitle = document.createElement('h2')
    bookTitle.innerText = book.title

    const bookAuthor = document.createElement('h2')
    bookAuthor.innerText = book.author

    const bookSubtitle = document.createElement('h2')
    bookSubtitle.innerText = book.subtitle

    const bookSummary = document.createElement('p')
    bookSummary.innerText = book.description

    // const bookUsers = (book.users.username)
    // console.log(bookUsers)

    const bookUsers = book.filter(book => book.users === username)
    console.log(bookUsers)

    const bookLikes = document.createElement('li')
    bookLikes.innerHTML = bookUsers

 



    const bookDisplay = document.getElementById("show-panel")
    bookDisplay.innerHTML = ''
    bookDisplay.append(bookImage, bookTitle, bookSubtitle, bookAuthor, bookSummary, bookLikes)
}
