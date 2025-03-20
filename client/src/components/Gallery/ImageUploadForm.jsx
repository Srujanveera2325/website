// client/src/components/Gallery/ImageUploadForm.jsx
import React, { useState } from 'react';
import api from '../../services/api';

function ImageUploadForm() {
  const [image, setImage] = useState(null); // Store the selected file
  const [altText, setAltText] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]); // Get the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    if (!image) {
      setError(new Error('Please select an image to upload.'));
      setIsLoading(false);
      return;
    }

    const formData = new FormData(); // Use FormData for file uploads
    formData.append('image', image); // 'image' must match the backend's upload.single('image')
    formData.append('altText', altText);
    formData.append('category', category);

    try {
      const response = await api.post('/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      console.log('Image uploaded successfully:', response.data);
      setSuccessMessage('Image uploaded successfully!');
      // Reset form
      setImage(null);
      setAltText('');
      setCategory('');
    } catch (err) {
      setError(err);
      console.error('Error uploading image:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading && <div>Uploading...</div>}
      {successMessage && <div style={{color: 'green'}}>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*" // Restrict to image files
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="altText">Alt Text:</label>
        <input
          type="text"
          id="altText"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>Upload Image</button>
    </form>
  );
}

export default ImageUploadForm;