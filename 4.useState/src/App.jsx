import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const handleChanger=()=>{
    if(firstName=="Berkay"){
      setFirstName("Yaren");
      setLastName("ÇOLAK");
    }else{
      setFirstName("Berkay")
      setLastName("ÖCER")
    }
  }

  const [count,setCount]=useState(0);

  const arttir=()=>{
    setCount(count+1);
  }

  const azalt=()=>{
    setCount(count-1)
  }

  const [firstName,setFirstName]=useState('Berkay');
  const [lastName,setLastName]=useState('ÖCER');
  const [names,setNames]=useState(["Berkay","Yaren","Gökay","Nuray","Tuncay","Nilay"])

  return (
    <div>
    <div>
          <div>
            {firstName} {lastName}
          </div>
          <div><button onClick={handleChanger}>tıkla</button></div>
    </div>


    <div>
      {names.map((name,index)=>(
        <div key={index}>{name}</div>
      ))}
    </div>

    <div>
      {count}
    </div>

    <div>
      <button onClick={arttir}>arttır</button>
      <button onClick={azalt}>azalt</button>
    </div>

    </div>
  )
}

export default App