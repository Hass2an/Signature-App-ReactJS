import React, { useState } from 'react'
import Title from './componets/Title'
const App = () => {
  const [name,setName] = useState("")
  const [dob,setDob] = useState("")
  return (
    <div>
      <h1>Signature App</h1>
      <Title text =  {name}/>
      <Title text = {dob}/>
      <p>lorem1sds;d;sjdgajjamnbvcxfarwa</p>
      <input type = "text" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type = "date" value={dob} onChange={(e)=>setDob(e.target.value)} />
    </div>
  )
}

export default App