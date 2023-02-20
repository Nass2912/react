function BookCreate({referencedClick}){

  const handleSubmit = (e) => {
    e.preventDefault()
    referencedClick({
      title: e.target[0].value,
      author: e.target[1].value
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default BookCreate;