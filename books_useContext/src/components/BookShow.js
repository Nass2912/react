import BookEdit from "./BookEdit";
import { BooksContext } from "../context/books";
import { useContext } from "react";

function BookShow({title, author, index, time, img}){
  const {referencedDelete} = useContext(BooksContext)
  const handleDelete = () => {
    referencedDelete(index)
  }
  return(
    <>
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={img} alt="Placeholder"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={img} alt="Placeholder"/>
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
            />
            <button className="button is-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookShow;
