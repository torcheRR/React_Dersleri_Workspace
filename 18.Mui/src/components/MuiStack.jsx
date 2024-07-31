import { Divider, Stack } from '@mui/material'
import React from 'react'

function MuiStack() {
  return (
    <div>
        <Stack direction={{xs:"column" ,sm:"row"}} spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
        </Stack>
    </div>
  )
}

export default MuiStack