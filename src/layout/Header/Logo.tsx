import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useState } from 'react'

import Link from '@/components/Link'

import HideOnScroll from './HideOnScroll'
import NavigationDrawer from './NavigationDrawer'
import { Search, SearchProps } from './Search'
import ToggleColorMode from './ToggleColorMode'

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
