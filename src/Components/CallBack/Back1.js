import React, { useCallback, useEffect, useState } from 'react'
import Todo from './Todo'

export default function Back1() {

  useEffect(() => {
    console.log('i am back1.js rendering on every re-render')
  })

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["todo1", "todo2"])

  const increment = () => {
    setCount(c => c + 1)
  }
  const addTodo =useCallback(()=>{
    setTodos(t => [...t, "new todo"])
  },[todos])
   
  

  return (
    <div>
      <Todo addTodo={addTodo} todos={todos} />
      <br />
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
