import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import {useState} from 'react'
import DateObject from 'react-date-object'
import searchImages from './api'

function App(){
  const [Books, setBooks] = useState([{id: Math.floor(Math.random()*9999) ,title: "The Bible", author: "God", time: new DateObject("2023 2 20 14 02 36 100 pm").format(("dddd DD MMMM @ hh:mm:ss.SSS a")), img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"}])
  
  
  const referencedUpdateFromApp = (value) => {
    console.log(value)
    const intBooks = Books.map((book) => {
      if(book.id === value.index){
        return { ...book, title: value.title, author: value.author, time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}
      }else{
        return book;
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
        id: Math.floor(Math.random()*9999),
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
    newBooks = newBooks.filter((book) => {
      return book.id !== value
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