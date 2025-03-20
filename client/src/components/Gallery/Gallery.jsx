// client/src/components/Gallery/Gallery.jsx
import React from 'react';
import GalleryItem from './GalleryItem';
import './gallery.scss';

function Gallery({ images }) {
  // Use placehold.co for placeholder images.  Customize as needed.
  const placeholderImages = [
    { _id: '1', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404870/p1_urhiiw.png', altText: 'Placeholder 1' },
    { _id: '2', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404871/p3_lpj3wj.png', altText: 'Placeholder 2' },
    { _id: '3', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404871/p4_ait8g5.png', altText: 'Placeholder 3' },
    { _id: '4', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404870/p2_diepx4.png', altText: 'Placeholder 4' },
    { _id: '5', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404871/p5_phw6db.png', altText: 'Placeholder 5' },
    { _id: '6', imageUrl: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404872/p6_nkmgwu.png', altText: 'Placeholder 6' },
  ];

  return (
    <div className='gallery-container'>
      {/* Use the placeholderImages array */}
      {placeholderImages.map((image) => (
        <GalleryItem key={image._id} image={image.imageUrl} alt={image.altText} />
      ))}
    </div>
  );
}

export default Gallery;