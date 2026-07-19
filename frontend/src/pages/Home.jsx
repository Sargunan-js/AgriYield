import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🌾 AgriYield</h1>
      <p>AI-driven crop disease detection & yield-economic decision support for farmers.</p>
      <Link to="/upload">
        <button style={{ marginTop: '15px' }}>Get Started — Upload Leaf Image</button>
      </Link>
    </div>
  );
}

export default Home;