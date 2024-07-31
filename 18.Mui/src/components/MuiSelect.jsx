import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function MuiSelect() {
  const [currencies, setCurrencies] = useState([]);

  return (
    <div>
      {/* <FormControl sx={{width:"200px"}}>
            <InputLabel >Para Birimi</InputLabel>
            <Select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </Select>
        </FormControl> */}

      <TextField
      sx={{width:"250px"}}
        SelectProps={{ multiple: true }}
        value={currencies}
        label="Para Birimi"
        select
        onChange={(e) => setCurrencies(e.target.value)}
      >
        <MenuItem value="TRY">Türk Lirası</MenuItem>
        <MenuItem value="USD">Dolar</MenuItem>
        <MenuItem value="EUR">Euro</MenuItem>
      </TextField>
    </div>
  );
}

export default MuiSelect;
