import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MuiDialog() {
  return (
    <div>
        <Button>Dialog</Button>
        <Dialog open={true}>
            <DialogTitle>soru</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yaren'i seviyor musun?
                </DialogContentText>
                <Button>EVET</Button>
                <Button>EVETTTT</Button> 
            </DialogContent>

        </Dialog>
    </div>
  )
}

export default MuiDialog