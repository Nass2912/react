import BookShow from "./BookShow";

function BookList({books,referencedUpdateFromApp}){
  const referencedUpdateFromList = (value) => {
    referencedUpdateFromApp(value)
  }

  const booksDisplay = books.map((book, index) => {
    return(
      <BookShow
        key={index}
        index={index}
        title={book.title}
        author={book.author}
        referencedUpdateFromList={referencedUpdateFromList}
      />
    )
  })
  return(
    <>
      <div>BookList</div>
      {booksDisplay}
    </>
  )
}

export default BookList;