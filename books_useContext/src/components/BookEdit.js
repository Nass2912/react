import { useState, useContext } from 'react';
import { BooksContext } from '../context/books';

function BookEdit({title, author, index}){

  const {referencedUpdateFromApp} = useContext(BooksContext)

  const [toggler, setToggler] = useState(false);
  const [value, setValue] = useState(title)
  const [otherValue, setOtherValue] = useState(author)

  const handleClick = () => {
    setToggler(!toggler);
  }

  const handleChange = (title, e) => {
    if(title === "title"){
      setValue(e.target.value);
    } else {
      setOtherValue(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    referencedUpdateFromApp({title: value, author: otherValue, index: index})
    setToggler(false);
  }

  const renderButtonText = () => {
    if(toggler){ 
      return <button className='button is-danger' onClick={handleClick}>Cancel</button>
    } else {
      return <button className='button is-primary' onClick={handleClick}>Edit</button>
    }
  }

  const showEdit = () => {
    if(toggler){
      return(
        <form onSubmit={handleSubmit} style={{width: "80%"}}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
            <input className='input' type="text" value={value} onChange={(event) => {handleChange("title", event)}}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Author</label>
            <div className="control">
            <input className='input' type="text" value={otherValue} onChange={(event) => {handleChange("", event)}}/>
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Edit Book</button>
          </div>
        </form>
      )
    }
  }

  return(
    <>
      <div style={{ paddingBottom: "10px", margin: "0 20px"}}>
        {renderButtonText()}
        {showEdit()}
      </div>
    </>
  )
}

export default BookEdit;