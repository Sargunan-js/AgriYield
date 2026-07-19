function Dashboard() {
  // Dummy data for now — later this will come from backend
  const result = {
    disease: "Tomato — Early Blight",
    confidence: 87,
    severity: "Moderate",
    priceToday: "₹28/kg",
    priceForecast: "₹32/kg (next 7 days)",
    recommendation: "Treat the crop now and hold selling for 5-7 days — price expected to rise."
  };

  return (
    <div className="container">
      <h2 style={{ color: '#1b5e20', marginBottom: '25px' }}>Analysis Result</h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Disease Card */}
        <Card title="🦠 Disease Detected">
          <p style={{ fontSize: '18px', fontWeight: 600 }}>{result.disease}</p>
          <p style={{ color: '#666' }}>Confidence: {result.confidence}%</p>
          <SeverityBadge level={result.severity} />
        </Card>

        {/* Price Card */}
        <Card title="📈 Market Price Forecast">
          <p style={{ color: '#666' }}>Today: <b>{result.priceToday}</b></p>
          <p style={{ color: '#666' }}>Forecast: <b>{result.priceForecast}</b></p>
        </Card>
      </div>

      {/* Recommendation */}
      <div style={{
        marginTop: '25px',
        background: '#e8f5e9',
        borderLeft: '5px solid #2e7d32',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h3 style={{ color: '#1b5e20', marginBottom: '8px' }}>✅ Recommendation</h3>
        <p style={{ color: '#333' }}>{result.recommendation}</p>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '14px',
      padding: '20px',
      minWidth: '260px',
      flex: 1,
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    }}>
      <h4 style={{ color: '#1b5e20', marginBottom: '12px' }}>{title}</h4>
      {children}
    </div>
  );
}

function SeverityBadge({ level }) {
  const colors = {
    Low: '#4caf50',
    Moderate: '#ff9800',
    High: '#f44336'
  };
  return (
    <span style={{
      display: 'inline-block',
      marginTop: '8px',
      padding: '5px 14px',
      borderRadius: '20px',
      color: 'white',
      fontSize: '13px',
      fontWeight: 600,
      backgroundColor: colors[level] || '#999'
    }}>
      {level} Severity
    </span>
  );
}

export default Dashboard;