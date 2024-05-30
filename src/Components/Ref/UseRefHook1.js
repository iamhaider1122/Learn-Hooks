import React, { useRef, useState, useEffect } from 'react'

export default function UseRefHook1() {
const [count,setCount]=useState(0)
const [headVal,setHeadVal]=useState('i am heading 2')
  useEffect(() => {
    console.log('rendering every time whenever component is rendered')
  })
  const heading=useRef()
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
    console.log(ref.current)
    console.log(heading.current, "i am element")
    let text=heading.current
     text=text.innerText
     console.log(text)
     setHeadVal(text)
  }

  const handelstate=()=>{
     setCount(count+1)
  }
  return (
    <div>
      i am UseRefHook1
      <h1 ref={heading}>heading 1</h1>
      <button onClick={handleClick}> useRef Me</button>
      <br/>
      <button onClick={handelstate}>usestate Me</button>
      
      <div>{count}</div>

      <div>{headVal}</div>
      
    </div>
  )
}





// useref hook Does Not Cause Re-renders
//useref return only one object called current

// we can't pass ref to our own components
// const inputRef = useRef(null);
// return <MyInput ref={inputRef} />;