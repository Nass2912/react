import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import {useState} from 'react'

function App(){
  const [Books, setBooks] = useState([])
  
  const referencedUpdateFromApp = (value) => {
    const newBooks = [...Books]
    newBooks[value.index] = {title: value.title, author: value.author}
    setBooks(newBooks)
  }

  function increment(obj){
    setBooks([...Books, {title: obj.title, author: obj.author}])
  }
  return (
    <>
      <BookCreate referencedClick={increment}/>
      <BookList
        books={Books}
        referencedUpdateFromApp={referencedUpdateFromApp}
      />
    </>
  )
}

export default App