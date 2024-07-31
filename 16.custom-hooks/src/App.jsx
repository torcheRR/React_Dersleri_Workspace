import { useState } from "react";
import "./App.css";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
  // const {count,increase,decrease} = useCounter();

  // const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("pes etme çalış");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div>{count}</div>
      <div>
        <button onClick={increase}>arttır</button>
        <button onClick={decrease}>azalt</button>
      </div> */}
      {/* 
      {open && (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        >
          kutu
        </div>
      )}

      <div>
        <button onClick={change}>{open?'gizle':'göster'}</button>
      </div> */}

      <div>
        {copied&&'kopyalandı'}
        <button onClick={copy}>kopyala</button>
      </div>

      <div ><input style={{width:"300px",marginTop:"20px "}} type="text" placeholder="buraya yapıştır / paste it here"  /></div>
    </div>
  );
}

export default App;
