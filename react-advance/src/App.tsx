import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1> Hello, World!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment </button>
    </div>
  );
};

export default App;
