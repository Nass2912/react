import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import {useState} from 'react'
import DateObject from 'react-date-object'

function App(){
  const [Books, setBooks] = useState([{title: "The Bible", author: "God", time: new DateObject("2023 2 20 14 02 36 100 pm").format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}])
  
  
  const referencedUpdateFromApp = (value) => {
    const newBooks = [...Books]
    newBooks[value.index] = {title: value.title, author: value.author, time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}
    setBooks(newBooks)
  }

  function AddToBooks(obj){
    if(!obj.title || !obj.author) return alert("Please fill out both fields")
    setBooks([...Books, {title: obj.title, author: obj.authort,time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}])
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