import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

import Link from '@/components/Link'

type LogoProps = {
  title: string
}

const Logo = ({ title }: LogoProps) => {
  const theme = useTheme()
  return (
    <>
      <Link sx={{ textDecoration: 'none !important' }} href="/" variant="button">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          {title}
        </Typography>
      </Link>
    </>
  )
}

export default Logo
