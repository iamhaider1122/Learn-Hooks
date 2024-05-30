import React, { useEffect } from 'react'
import { useReducer } from 'react'
export default function Red1() {


  useEffect(() => {
    console.log('rendering on every state update')
  })

  const reducer = (state, action) => {
    switch (action) {
      case "increment": {
        const newCount = state.count + 1
        const isAbove = newCount > 5
        return {
          ...state, count: isAbove ? state.count : newCount,
          flag: isAbove ? "it is above 5" : null
        }
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0, flag: null })


  return (
    <div>

      <div>{state.count}</div>
      {state.flag && <div>{state.flag}</div>}
      <button onClick={() => { dispatch('increment') }}>Increment</button>

    </div>
  )
}


// The useReducer hook is a state management hook in React that provides an alternative to the useState hook. It is used when the //
//state of a component is complex and requires more than one state variable.
//it is when we need to change state based on some logic
