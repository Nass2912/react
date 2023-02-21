import BookShow from "./BookShow";

function BookList({books,referencedUpdateFromApp,referencedDelete}){

  const booksDisplay = books.map((book, index) => {
    return(
        <BookShow
          key={index}
          index={index}
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