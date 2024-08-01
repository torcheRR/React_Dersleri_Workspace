import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MuiDialog() {

  const type ={
    YES:"YES",
    YESS:"YESS"
  }

  const result =(typeParam)=>{
    console.log("kullanıcı sonucu:",typeParam)
    typeParam==type.YES?console.log("berkay yareni çok seviyormuş"):console.log("berkay yareni çooooooookkk seviyormuş")
    setDialogOpen(false)
  }
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>soru</DialogTitle>
        <DialogContent>
          <DialogContentText>Yaren'i seviyor musun?</DialogContentText>
          <Button onClick={()=>result(type.YES)}>EVET</Button>
          <Button onClick={()=>result(type.YESS)}>EVETTTT</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MuiDialog;
