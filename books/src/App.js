import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import {useState} from 'react'
import DateObject from 'react-date-object'
import searchImages from './api'

function App(){
  const [Books, setBooks] = useState([{title: "The Bible", author: "God", time: new DateObject("2023 2 20 14 02 36 100 pm").format(("dddd DD MMMM @ hh:mm:ss.SSS a")), img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"}])
  
  
  const referencedUpdateFromApp = (value) => {
    const intBooks = Books.map((book, index) => {
      if(index === value.index){
        return {title: value.title, author: value.author, time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}
      } else {
        return book
      }
    })
    setBooks(intBooks)
  }

  const AddToBooks = async (obj) =>{
    if(!obj.title || !obj.author){
      return alert("Please fill out both fields")
    }
    else{
      const img = await searchImages(obj.title)
      const bookToAdd = {
        title: obj.title,
        author: obj.author,
        time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a")),
        img:img[0].urls.regular
      }
      setBooks([bookToAdd, ...Books])
    }
  }

  const referencedDelete = (value) => {
    let newBooks = [...Books]
    newBooks = newBooks.filter((_book, index) => {
      return value !== index
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