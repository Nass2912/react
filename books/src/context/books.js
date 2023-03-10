import { createContext, useState } from "react";
import axios from "axios";
import DateObject from 'react-date-object'
import { searchImages } from "../api.js";


const BooksContext = createContext();

const Provider = ({children}) => {
  
  const [Books, setBooks] = useState([])

  const referencedUpdateFromApp = async (value) => {
    const intImg = Books.find((book) => book.id === value.index).img
    const response = await axios.put(`http://localhost:3001/books/${value.index}`,{
      title: value.title,
      author: value.author,
      img: intImg,
      time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))
    })
      
    const intBooks = Books.map((book) => {
      if(book.id === value.index){
        return { ...book, ...response.data}
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
      const response = await axios.post('http://localhost:3001/books',{
        title: obj.title,
        author: obj.author,
        time: new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a")),
        img:img[0].urls.regular
      })
      setBooks([response.data, ...Books])
    }
  }

  const referencedDelete = async (value) => {
    const response = await axios.delete(`http://localhost:3001/books/${value}`)
    let newBooks = [...Books]
    console.log(response)
    newBooks = newBooks.filter((book) => {
      return book.id !== value
    })
    setBooks(newBooks)
  }
  
  return (
    <BooksContext.Provider value={{setBooks,Books,referencedDelete,referencedUpdateFromApp,AddToBooks}}>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider, BooksContext};