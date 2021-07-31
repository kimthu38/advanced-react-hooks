// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({ initialCount = 0, step = 1 }) {
  function countReducer(previousCount, change) {
    const { type, step } = change
    if (type === 'INCREMENT') {
      return { ...previousCount, count: previousCount.count + step }
    }
  }
  // const [count, changeCount] = React.useReducer((countReducer), initialCount)

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => dispatch({ type: 'INCREMENT', step })


  // const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
