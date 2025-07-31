import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h1>🎓 Student Dashboard</h1>

      <div style={{ marginTop: '20px' }}>
        <Link to="/create" style={linkStyle}>➕ Add Student</Link>
        <Link to="/list" style={linkStyle}>📋 View All Students</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textDecoration: 'none',
  color: '#333',
  backgroundColor: '#f0f0f0',
};

export default Dashboard;
