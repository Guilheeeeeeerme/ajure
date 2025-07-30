import React, { useState, useEffect } from 'react';
import './App.css';

interface ApiResponse {
  status: string;
  timestamp: string;
  service: string;
}

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Loading...');
  const [apiHealth, setApiHealth] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // Test connection to backend
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setBackendStatus(data))
      .catch(error => setBackendStatus('Backend connection failed: ' + error.message));

    // Check API health
    fetch('http://localhost:3001/api/health')
      .then(response => response.json())
      .then(data => setApiHealth(data))
      .catch(error => console.error('Health check failed:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
        <div style={{ margin: '20px', padding: '20px', background: '#282c34', borderRadius: '8px' }}>
          <h2>Backend Status</h2>
          <p>{backendStatus}</p>
          
          {apiHealth && (
            <div>
              <h3>API Health Check</h3>
              <p>Status: {apiHealth.status}</p>
              <p>Service: {apiHealth.service}</p>
              <p>Last checked: {new Date(apiHealth.timestamp).toLocaleString()}</p>
            </div>
          )}
        </div>
        
        <p>
          This is the admin interface that communicates with the NestJS backend.
        </p>
      </header>
    </div>
  );
}

export default App;
