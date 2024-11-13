import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello, World!</h1>
      <p style={styles.subtitle}>Welcome to React/Jenkins/AWS App.Test 7</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#4a90e2',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666',
  },
};

export default App;
