function BookCreate({referencedClick}){

  const handleSubmit = (e) => {
    e.preventDefault()
    referencedClick({
      title: e.target[0].value,
      author: e.target[1].value
    })
    e.target[0].value = ""
    e.target[1].value = ""
  }

  return(
    <div className="box">
      <form onSubmit={handleSubmit} style={{
            width: "50%",
            margin: "0 auto"
      }}>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g bible"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. jesus"/>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Add Book</button>
        </div>
      </form>
    </div> 
  )
}

export default BookCreate;

