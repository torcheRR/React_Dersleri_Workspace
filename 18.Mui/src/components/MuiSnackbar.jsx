import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

function MuiSnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };
  const action = (
    <div>
      <Button size="small" color="info" onClick={handleClose}>
        Kapat
      </Button>
      <IconButton sx={{ color: "white" }} onClick={handleClose}>
        <Close></Close>
      </IconButton>
    </div>
  );

  return (
    <div>
      <Button onClick={handleClick}>Snackbar'ı aç</Button>
      <Snackbar
        open={openSnackbar}
        message="Hata oluştu"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
      />
    </div>
  );
}

export default MuiSnackbar;
