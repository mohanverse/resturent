import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='App'>
    <h1>Counter Value - {count} </h1> 
    <button onClick={() => setCount(count+1)}>Increment Counter</button>
    <button onClick={() => setCount(0)}>Reset Counter</button>
    <button onClick={() => setCount(count-1)}>Decrement Counter</button>
    </div>
  )
}

export default Counter
