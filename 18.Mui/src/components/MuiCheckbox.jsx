import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function MuiCheckbox() {
  const [isConfirmed, setConfirmed] = useState(false);
  const submit = () => {
    isConfirmed
      ? alert("Form başarıyla gönderildi")
      : alert("Kullanım Koşullarını kabul etmediniz.");
  };
  return (
    // <FormControl component="fieldset">
    //   <FormLabel>Eğitim durumu</FormLabel>
    //   <FormGroup>
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="ilkokul"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox defaultChecked />}
    //       label="ortaokul"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="lise"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="üniversite"
    //       labelPlacement="end"
    //     />
    //   </FormGroup>
    // </FormControl>

    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isConfirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
          }
          label="Kullanım koşullarını kabul ediyorum"
          labelPlacement="end"
        />

        <Button onClick={submit} variant="contained">
          Formu Gönder
        </Button>
      </FormGroup>
    </FormControl>
  );
}

export default MuiCheckbox;
