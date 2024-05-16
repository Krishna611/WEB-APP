import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id} className="ui card">
        <div className="image">
          <img src={image.urls.small} alt={image.description} />
        </div>
        <div className="content">
          <a
            className="header"
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image.description || 'Untitled'}
          </a>
        </div>
      </div>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
