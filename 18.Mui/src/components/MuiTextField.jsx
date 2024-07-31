import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Person } from "@mui/icons-material";
import PasswordIcon from "@mui/icons-material/Password";

function MuiTextField() {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" />
        <TextField label="isim" variant="filled" />
        <TextField label="isim" variant="standard" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" color="warning"></TextField>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="warning"
          helperText="İsminizi Giriniz"
        ></TextField>
        <TextField
          label="şifre"
          variant="outlined"
          color="warning"
          helperText="Şifrenizi Giriniz"
        ></TextField>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField label="kimlik no" disabled variant="outlined" />
      </div>

      <div style={{ marginBottom: "30px" }}></div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
        size="small"
          label="isim"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
        size="medium"
          label="soyisim"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Person></Person>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default MuiTextField;
