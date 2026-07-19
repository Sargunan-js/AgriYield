import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      background: 'linear-gradient(90deg, #1b5e20, #2e7d32)',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h2 style={{ margin: 0, fontSize: '22px', letterSpacing: '0.5px' }}>
        🌾 AgriYield
      </h2>
      <div style={{ display: 'flex', gap: '30px', fontSize: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
        <Link to="/upload" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;