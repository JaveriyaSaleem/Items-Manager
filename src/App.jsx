import React from 'react'
import { useState } from 'react'



const App = () => {
const [input, setinput] = useState('')
const [items, setitems] = useState([])
const handelItem = ()=>{
  if(input.trim()){
    let itemsCopy =[...items,input]
    setitems(itemsCopy)
  
  console.log(itemsCopy) 
  setinput('')
  }
  else{
    alert("Can't add empty")
  }

}

  return (
    <div>
    
      <h1 style={{textAlign:"center"}}>Items List</h1>
      <div style={{display:"flex",flexDirection: "row", gap: "2px"}}>
   <input type="text" value={input} onChange={(e)=>{setinput(e.target.value);}}/>
   <button onClick={handelItem}>Add Item</button>
   </div>
   <ul>
    {items.map((item,index)=>(
     
    <li key={index}>{item}</li>
    ))}
   </ul>
    </div>
  )
}

export default App
