import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios';
import { useEffect, useContext } from 'react';
import { BooksContext } from './context/books';


function App(){
  const {setBooks} = useContext(BooksContext)

  async function fetchData() {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(() => {
    fetchData();
  },[])



  return (
    <>
      <BookCreate/>
      <BookList/>
    </>
  )
}

export default App