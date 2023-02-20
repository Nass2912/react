import searchImages from './api.js';
import SearchBar from './components/SearchBar.js';
import ImageList from './components/ImageList.js';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  
  const onSubmitterFn = async (term) => {    
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchBar onSubmitterFn = {onSubmitterFn}/>
      <ImageList images = {images}/>
    </div>
  );
}

export default App;