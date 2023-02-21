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

  const AddToBooks = (obj) =>{
    if(!obj.title || !obj.author) return alert("Please fill out both fields")
    setBooks([{title: obj.title, author: obj.author,time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}, ...Books])
  }

  const referencedDelete = (value) => {
    let newBooks = [...Books]
    newBooks = newBooks.filter((book) => {
      return book !== newBooks[value]
    })
    setBooks(newBooks)
  }

  return (
    <>
      <BookCreate referencedClick={AddToBooks}/>
      <BookList
        books={Books}
        referencedUpdateFromApp={referencedUpdateFromApp}
        referencedDelete={referencedDelete}
      />
    </>
  )
}

export default App