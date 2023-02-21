import BookShow from "./BookShow";

function BookList({books,referencedUpdateFromApp,referencedDelete}){
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
          referencedDelete={(value) => referencedDelete(value)}
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