import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useEffect, useContext} from 'react'
import {BooksContext} from './context/books'


function App(){
  const {fetchBooks} = useContext(BooksContext)
    useEffect(
      () => {
      fetchBooks();
      },[fetchBooks]
  )
  
  return (
    <>
      <BookCreate/>
      <BookList/>
    </>
  )
}

export default App