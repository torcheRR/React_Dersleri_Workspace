import { Avatar, Stack } from '@mui/material'
import React from 'react'


function MuiAvatar() {
  return (
    <div>
        <Stack spacing={2}>
            <Avatar sx={{width:"90px",height:"90px"}} src="https://cdn.motor1.com/images/mgl/zxxMzK/s1/2023-porsche-911-gt3-rs.webp"/>
            <Avatar sx={{width:"90px",height:"90px"}} src="https://cdn.shopify.com/s/files/1/0075/5046/8132/files/ScreenShot2023-03-17at2.05.21AM_480x480.png?v=1679036754"/>
            <Avatar sx={{width:"90px",height:"90px"}} >BY</Avatar>
        </Stack>
    </div>
  )
}

export default MuiAvatar