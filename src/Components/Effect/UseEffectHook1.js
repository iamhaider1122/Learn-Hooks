import React, { useEffect } from 'react'

export default function UseEffectHook1() {
  useEffect(()=>{
    console.log('component is mounted')

    return ()=>{
      console.log('component will unmount')
    }
  }
  ,[])
  return (
    <div>
      component unmount
    </div>
  )
}
