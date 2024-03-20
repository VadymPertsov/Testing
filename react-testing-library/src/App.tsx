import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<null | { name: string }>(null)
  const [toggle, setToggle] = useState<boolean>(false)

  const onClick = () => setToggle(prev => !prev)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({name: 'John'})
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {toggle && <div data-testid="toggle">TOGGLE</div>}
      {data && <div>{data.name}</div>}
      <h1>Testing</h1>
      <input type="text" placeholder='INPUT' />
      <button onClick={onClick} >BUTTON</button>
    </div>
  );
}

export default App;
