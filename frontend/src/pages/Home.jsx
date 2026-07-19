import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>🌾</div>
        <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#1b5e20', marginBottom: '15px' }}>
          AgriYield
        </h1>
        <p style={{ fontSize: '18px', color: '#444', maxWidth: '550px', margin: '0 auto 30px' }}>
          AI-driven crop disease detection and yield-economic decision support for small-scale farmers.
        </p>
        <Link to="/upload">
          <button style={{
            padding: '14px 32px',
            fontSize: '16px',
            backgroundColor: '#2e7d32',
            color: 'white',
            borderRadius: '30px'
          }}>
            Get Started — Upload Leaf Image
          </button>
        </Link>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '60px', flexWrap: 'wrap' }}>
        <FeatureCard icon="🔍" title="Disease Detection" desc="Upload a leaf photo and detect crop disease instantly using AI." delay={0.1} />
        <FeatureCard icon="📈" title="Price Forecasting" desc="Get market price trends to decide the best time to sell." delay={0.2} />
        <FeatureCard icon="✅" title="Smart Recommendation" desc="Combined advice — treat now or sell now, based on AI analysis." delay={0.3} />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: 'white',
        borderRadius: '14px',
        padding: '25px',
        width: '230px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '30px', marginBottom: '10px' }}>{icon}</div>
      <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#1b5e20' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>{desc}</p>
    </motion.div>
  );
}

export default Home;