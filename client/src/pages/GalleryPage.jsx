import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../services/api';
import Gallery from '../components/Gallery/Gallery';
// import ImageUploadForm from '../components/Gallery/ImageUploadForm'; // REMOVED

function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getGalleryImages();
        console.log("API Response:", response); // LOG THE RESPONSE
        setImages(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching gallery images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading gallery...</div>;
  }

  if (error) {
    return <div>Error loading gallery: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>View photos of our events and activities.</p>
      {/* <ImageUploadForm /> */}
      <Gallery images={images} />
    </div>
  );
}

export default GalleryPage;