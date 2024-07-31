import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

function MuiGrid() {
  return (
    <div>
        <Grid container>
            <Grid xs={12} sm={6} md={8} lg={9}> ITEM1</Grid>
            <Grid xs={12} sm={6} md={4} lg={3}> ITEM2</Grid>
        </Grid>
    </div>
  )
}

export default MuiGrid