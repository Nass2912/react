import BookEdit from "./BookEdit";

function BookShow({title, author, index, referencedUpdateFromList}){
  const referencedUpdate = (value) => {
    referencedUpdateFromList(value)
  }
  return(
    <>
      <div>BookShow
        <h1>{title}</h1>
        <h1>{author}</h1>
        <BookEdit
          title={title}
          author={author}
          index={index}
          referencedUpdate={referencedUpdate}
        />
      </div>
    </>
  )
}

export default BookShow;