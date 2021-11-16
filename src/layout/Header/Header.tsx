import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import Link from '@components/Link'

import HideOnScroll from './HideOnScroll'
import NavigationDrawer from './NavigationDrawer'

function Header(): JSX.Element {
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
    <nav id="navbar">
      <HideOnScroll>
        <AppBar elevation={0} sx={{ backgroundColor: theme.palette.grey[900], color: theme.palette.common.white }}>
          <Toolbar sx={{ display: 'flex' }} disableGutters>
            <Link sx={{ textDecoration: 'none !important', flexGrow: 1 }} href="/" variant="button">
              <Typography variant="h6" color="white">
                CN-MOVIEDB
              </Typography>
            </Link>

            <Hidden smDown implementation="css">
              {menuItems.map((item) => (
                <Link
                  sx={{ padding: '12px 15px' }}
                  key={item.name}
                  href={item.link}
                  variant="button"
                  color="inherit"
                  underline="none"
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>

            <Hidden mdUp implementation="css">
              <IconButton onClick={handleDrawerToggle} aria-label="Open Navigation">
                <MenuIcon fontSize="large" color="secondary" />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <NavigationDrawer menuItems={menuItems} open={mobileOpen} onClose={handleDrawerToggle} />
    </nav>
  )
}

export default Header
