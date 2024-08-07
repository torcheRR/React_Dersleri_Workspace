import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import gt3rs from "/Users/berkayocer/Desktop/github/React_Dersleri_Workspace/18.Mui/src/images/gt3rs.png"

function MuiSkeleton() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, []);
  return (
    <div style={{ margin: "20px" }}>
      {loading ? (
        <img src={gt3rs} width={700} height={400} />
      ) : (
        <Skeleton width={700} height={400} animation="wave" />
      )}
    </div>
  );
}

export default MuiSkeleton;
