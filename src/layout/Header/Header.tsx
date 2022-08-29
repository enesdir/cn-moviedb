import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import Link from '@/components/Link'

import HideOnScroll from './HideOnScroll'
import NavigationDrawer from './NavigationDrawer'
import { Search, SearchProps } from './Search'
interface HeaderProps {
  title?: string
  search?: SearchProps
}
function Header({ title, search }): JSX.Element {
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
        <AppBar elevation={0}>
          <Toolbar sx={{ display: 'flex' }} disableGutters>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open Navigation"
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 5 }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Link sx={{ textDecoration: 'none !important', flexGrow: 1 }} href="/" variant="button">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                CN-MOVIEDB
              </Typography>
            </Link>
            {title ?? <Search {...search} />}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavigationDrawer menuItems={menuItems} open={mobileOpen} onClose={handleDrawerToggle} />
    </Box>
  )
}

export default Header
