import { Link } from 'react-router-dom';
import { Sprout, Home as HomeIcon, Upload as UploadIcon, LayoutDashboard } from 'lucide-react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 20px',
      background: 'linear-gradient(90deg, #1b5e20, #2e7d32)',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <h2 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sprout size={20} /> AgriYield
      </h2>
      <div style={{ display: 'flex', gap: '15px', fontSize: '13px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <HomeIcon size={16} /> Home
        </Link>
        <Link to="/upload" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <UploadIcon size={16} /> Upload
        </Link>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <LayoutDashboard size={16} /> Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;