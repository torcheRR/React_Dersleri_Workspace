import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

function MuiProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{

    const timer = setInterval(() => {

      setProgress((oldProgress)=>{
        if(oldProgress==100){
          return 0;
        }
        const plusVal = Math.floor(Math.random()*10)
        return Math.min(oldProgress+plusVal,100)
      })
    }, 500);

    return ()=>{
      clearInterval(timer)
    }
  },[])
  return (
    <div>
      <CircularProgress />
      <LinearProgress color="warning" variant="determinate" value={progress} />
    </div>
  );
}

export default MuiProgress;
