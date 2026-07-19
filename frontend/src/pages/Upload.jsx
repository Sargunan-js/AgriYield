import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const navigate = useNavigate();

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
    setAnalyzing(true);
    // Simulates AI processing time (later this becomes real API call)
    setTimeout(() => {
      navigate('/dashboard');
    }, 1800);
  };

  return (
    <div className="container" style={{ maxWidth: '550px' }}>
      <h2 style={{ color: '#1b5e20', marginBottom: '8px' }}>Upload Crop Leaf Image</h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>
        Select a clear photo of the affected leaf for AI analysis.
      </p>

      <div style={{
        background: 'white',
        borderRadius: '14px',
        padding: '30px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}>
        <label style={{
          display: 'inline-block',
          padding: '10px 20px',
          border: '2px dashed #2e7d32',
          borderRadius: '10px',
          cursor: 'pointer',
          color: '#2e7d32',
          fontWeight: 500
        }}>
          📁 Choose Image
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>

        {preview && (
          <div style={{ marginTop: '20px' }}>
            <img src={preview} alt="preview" style={{
              width: '250px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              opacity: analyzing ? 0.6 : 1,
              transition: 'opacity 0.3s'
            }} />
          </div>
        )}

        <br />
        <button onClick={handleSubmit} disabled={analyzing} style={{
          marginTop: '20px',
          padding: '12px 30px',
          backgroundColor: analyzing ? '#81c784' : '#2e7d32',
          color: 'white',
          fontSize: '15px',
          borderRadius: '25px',
          cursor: analyzing ? 'not-allowed' : 'pointer'
        }}>
          {analyzing ? '🔄 Analyzing...' : '🔍 Analyze Image'}
        </button>
      </div>
    </div>
  );
}

export default Upload;