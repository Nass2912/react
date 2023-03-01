import BookShow from "./BookShow";
import {BooksContext} from "../context/books";
import { useContext } from "react";

function BookList(){
  const {Books} = useContext(BooksContext)
  const booksDisplay = Books.reverse().map((book) => {
    return(
        <BookShow
          key={book.id}
          index={book.id}
          title={book.title}
          author={book.author}
          time={book.time}
          img={book.img}
        />
    )
  })
  return(
    <>
      <div className="columns" style={{flexWrap: "wrap"}}>
        {booksDisplay}
      </div>
    </>
  )
}

export default BookList;