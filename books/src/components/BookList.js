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
          time={book.time}
          referencedUpdateFromList={referencedUpdateFromList}
        />
    )
  })
  return(
    <div className="columns" style={{flexWrap: "wrap"}}>
      {booksDisplay}
    </div>
  )
}

export default BookList;