import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'

import Link from '@components/Link'

import HideOnScroll from './HideOnScroll'
import NavigationDrawer from './NavigationDrawer'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
  },
  logo: {
    textDecoration: 'none !important',
    flexGrow: 1,
  },
  link: {
    padding: '12px 15px',
  },
}))

function Header(): JSX.Element {
  const classes = useStyles()

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
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar className={classes.toolbar} disableGutters>
            <Link className={classes.logo} href="/" variant="button">
              <Typography variant="h6" color="white">
                CN-MOVIEDB
              </Typography>
            </Link>

            <Hidden smDown implementation="css">
              {menuItems.map((item) => (
                <Link
                  className={classes.link}
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
