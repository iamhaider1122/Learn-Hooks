import React, { useEffect } from 'react'
import { memo } from "react";




  function Todo({addTodo,todos}) {

  useEffect(()=>{
    console.log('i am rendering on each re-render for todo\n')
  })
  return (
    <div>
        

        {todos.map((todo,index)=>{
          return(
            <div key={index}>{todo}</div>
          )
        })}

        <button onClick={addTodo}>Add todo</button>

    </div>
  )
}
export default memo(Todo);
//this file is used in back1.js 