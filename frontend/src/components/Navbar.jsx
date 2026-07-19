import { Link } from 'react-router-dom';
import { Sprout, Home as HomeIcon, Upload as UploadIcon, LayoutDashboard } from 'lucide-react';

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
      <h2 style={{ margin: 0, fontSize: '22px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sprout size={24} /> AgriYield
      </h2>
      <div style={{ display: 'flex', gap: '25px', fontSize: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HomeIcon size={18} /> Home
        </Link>
        <Link to="/upload" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <UploadIcon size={18} /> Upload
        </Link>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <LayoutDashboard size={18} /> Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;