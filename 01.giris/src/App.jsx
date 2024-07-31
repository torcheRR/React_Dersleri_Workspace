import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  let a = 20;

  let vize1 = 50;
  let vize2 = 70;

  const firstName = "Berkay";

  var sonuc = false;


  let isimler = ["Berkay","Yaren","Gökay","Selenay"];


  return ( <div>

    {/*}
      <p>Öğrenci ADI: {firstName}</p>

      <p>Ortalama: {(vize1+vize2)/2}</p>

      {(vize1+vize2)/2>70?sonuc=true:sonuc=false}

      {sonuc? <p>Ehliyet Alabilirsin!</p>:<p>Ehliyet alamazsın!</p>}
  */}

    {
      isimler.map((isim,index)=>(
        <div style={{
          border:'.1px solid black',
          backgroundColor: 'orange' 
        }} key={index}>{isim}</div>
      ))
    }

  </div>
  )
}

export default App
