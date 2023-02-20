import BookEdit from "./BookEdit";
import DateObject from "react-date-object";

function BookShow({title, author, index, referencedUpdateFromList}){
  const referencedUpdate = (value) => {
    referencedUpdateFromList(value)
  }
  return(
    <>
      <div className="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{title}</p>
                <p class="subtitle is-6">{author}</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris
              <br/>
              <div style={{color: "blue"}}>{new DateObject().format(("dddd DD MMMM @ hh:mm:ss.SSS a"))}</div>
            </div>
          </div>
          <BookEdit
            title={title}
            author={author}
            index={index}
            referencedUpdate={referencedUpdate}
          />
        </div>
      </div>
    </>
  )
}

export default BookShow;
