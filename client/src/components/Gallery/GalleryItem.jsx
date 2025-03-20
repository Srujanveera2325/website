import React from 'react';

function GalleryItem({ image, alt }) {
  console.log("Image URL in GalleryItem:", image); // ADD THIS LOG
  return (
    <div className='gallery-item'>
      <img src={image} alt={alt} />
    </div>
  );
}

export default GalleryItem;