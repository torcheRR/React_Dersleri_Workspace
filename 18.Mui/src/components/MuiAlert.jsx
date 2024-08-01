import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function MuiAlert() {
  return (
    <div style={{ margin: "300px" }}>
      <Alert severity="info">Bilgilendirme Mesajı</Alert>
      <Alert severity="error">Hata Mesajı</Alert>
      <Alert severity="warning" variant="outlined">Uyarı Mesajı</Alert>

      <Alert severity="error" variant="filled">
      <AlertTitle>Berkay</AlertTitle>
        Yareni Çok Seviyor</Alert>
    </div>
  );
}

export default MuiAlert;
