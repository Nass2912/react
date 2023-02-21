import BookEdit from "./BookEdit";

function BookShow({title, author, index, referencedUpdateFromList, time, referencedDelete}){
  const referencedUpdate = (value) => {
    referencedUpdateFromList(value)
  }

  const handleDelete = () => {
    referencedDelete(index)
  }
  return(
    <>
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{author}</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris
              <br/>
              <div style={{color: "blue"}}>{time}</div>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <BookEdit
              title={title}
              author={author}
              index={index}
              referencedUpdate={referencedUpdate}
            />
            <button className="button is-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookShow;
