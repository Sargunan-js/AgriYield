import { useState } from 'react';

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      alert("Please select an image first");
      return;
    }
    console.log("Image ready to send to backend:", selectedImage);
    // Later: send to backend using axios/fetch here
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Crop Leaf Image</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div style={{ marginTop: '15px' }}>
          <img src={preview} alt="preview" width="250" />
        </div>
      )}

      <br />
      <button onClick={handleSubmit} style={{ marginTop: '15px' }}>
        Analyze Image
      </button>
    </div>
  );
}

export default Upload;