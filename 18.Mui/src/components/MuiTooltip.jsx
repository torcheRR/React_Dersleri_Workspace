import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MuiTooltip() {
  return (
    <div style={{margin:90}} >
        <Tooltip title="silmek için tıklayın" placement='top-end'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default MuiTooltip