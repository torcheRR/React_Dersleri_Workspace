import { Email } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'


function MuiBadge() {
  return (
    <div style={{marginLeft:"100px",marginTop:"100px"}}>
        <Badge badgeContent={100} max={99} color='success' anchorOrigin={{vertical:"top",horizontal:"left"}}>
            <Email></Email>
        </Badge>
    </div>
  )
}

export default MuiBadge