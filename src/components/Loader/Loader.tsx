import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

function Loader(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default Loader
