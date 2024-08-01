import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import { Stack } from "@mui/material";
import { MenuItem } from "@mui/material";


function MuiAppbar() {
  const [anchorEl   , setAnchorEl] = React.useState(null);

  const openControl = anchorEl ? true : false;

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu =()=>{
    setAnchorEl(null)
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6">BERKAY</Typography>

          <Stack sx={{ marginLeft: "auto", flexDirection: "row" }}>
            <Button sx={{ color: "white" }}>Anasayfa</Button>
            <Button onClick={openMenu} sx={{ color: "white" }}>
              Ürünler
            </Button>
            <Button sx={{ color: "white" }}>Hakkımızda</Button>
            <Button sx={{ color: "white" }}>İletişim</Button>
          </Stack>
          <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Lastik</MenuItem>
            <MenuItem onClick={closeMenu}>Jant</MenuItem>
            <MenuItem onClick={closeMenu}>Egzoz</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MuiAppbar;
