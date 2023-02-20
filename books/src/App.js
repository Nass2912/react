import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import {useState} from 'react'
import 'bulma/css/bulma.css'

function App(){
  const [Books, setBooks] = useState([{title: "The Bible", author: "God"}])
  
  const referencedUpdateFromApp = (value) => {
    const newBooks = [...Books]
    newBooks[value.index] = {title: value.title, author: value.author}
    setBooks(newBooks)
  }

  function AddToBooks(obj){
    if(!obj.title || !obj.author) return alert("Please fill out both fields")
    setBooks([...Books, {title: obj.title, author: obj.author}])
  }
  return (
    <>
      <BookCreate referencedClick={AddToBooks}/>
      <BookList
        books={Books}
        referencedUpdateFromApp={referencedUpdateFromApp}
      />
    </>
  )
}

export default App