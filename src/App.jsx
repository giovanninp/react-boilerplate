import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <strong style={styles.text}>Hello World</strong>
    </div>
  );
}

const styles = {
  container: {
    flex: '1 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(360deg, #0096FF, #000)',
  },
  text: {
    color: '#fff',
  },
};

export default App;
