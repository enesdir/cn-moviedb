import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { margin } from '@mui/system'
import { useState } from 'react'

import Link from '@/components/Link'

import HideOnScroll from './HideOnScroll'
import Logo from './Logo'
import NavigationDrawer from './NavigationDrawer'
import { Search, SearchProps } from './Search'
import ToggleColorMode from './ToggleColorMode'
interface HeaderProps {
  title?: string
  search?: SearchProps
}
function Header({ title, search }: HeaderProps): JSX.Element {
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    {
      link: '/#',
      name: 'HOME',
      icon: <HomeIcon />,
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar
          sx={{
            fontFamily: 'Montserrat',
            width: '100%',
            transition: 'all 0.5s',
            backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#eaeaea',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open Navigation"
              size="large"
              edge="start"
              color="inherit"
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Logo title="CN-MOVIEDB" />
            {title ?? <Search {...search} />}

            <ToggleColorMode />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavigationDrawer menuItems={menuItems} open={mobileOpen} onClose={handleDrawerToggle} />
    </Box>
  )
}

export default Header
