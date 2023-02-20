import { useState } from 'react';

function BookEdit({title, author, index, referencedUpdate}){
  
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
    referencedUpdate({title: value, author: otherValue, index: index})
  }

  const renderButtonText = () => {
    if(toggler){
      return "Cancel"
    } else {
      return "Edit"
    }
  }

  const showEdit = () => {
    if(toggler){
      return(
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={(event) => {handleChange("title", event)}}/>
          <input type="text" value={otherValue} onChange={(event) => {handleChange("author", event)}}/>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }

  return(
    <>
      <div>
        <button onClick={handleClick}>{renderButtonText()}</button>
        {showEdit()}
      </div>
    </>
  )
}

export default BookEdit;