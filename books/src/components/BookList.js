import BookShow from "./BookShow";

function BookList({books,referencedUpdateFromApp,referencedDelete}){

  const booksDisplay = books.map((book) => {
    return(
        <BookShow
          key={book.id}
          index={book.id}
          title={book.title}
          author={book.author}
          time={book.time}
          img={book.img}
          referencedUpdateFromList={referencedUpdateFromApp}
          referencedDeleteFromList={referencedDelete}
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