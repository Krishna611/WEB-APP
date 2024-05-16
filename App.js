import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async (term) => {
    setLoading(true);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID YOUR_UNSPLASH_ACCESS_KEY',
      },
    });
    setImages(response.data.results);
    setLoading(false);
  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {loading ? <div>Loading...</div> : <ImageList images={images} />}
    </div>
  );
};

export default App;
