import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

function MuiDrawer() {
  const [isOpen,setOpen]=useState(false);
  const openDrawer=()=>{
    setOpen(true);
  }
  const closeDrawer =()=>{
    setOpen(false)
  }
  return (
    <div>
      <Button onClick={openDrawer}>aç</Button>

      <Drawer open={isOpen} onClose={closeDrawer} anchor="right">
        <Box sx={{width:"400px",textAlign:"center"}}>
          <h1>başlık</h1>
          Lorem ipsum dolor sit amet.
        </Box>
      </Drawer>
    </div>
  );
}

export default MuiDrawer;
