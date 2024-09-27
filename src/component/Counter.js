import React, { useState } from 'react'

export default function Counter() {
  const [count,newcount]=useState(1);
  const increment=()=>{
      newcount(count+1);
  }
  return (
    <div>
      <button onClick={increment}>+1</button>

    </div>
  )
}
