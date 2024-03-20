import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<null | { name: string }>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({name: 'John'})
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {data && <div>{data.name}</div>}
      <h1>Testing</h1>
      <input type="text" placeholder='INPUT' />
      <button>BUTTON</button>
    </div>
  );
}

export default App;
