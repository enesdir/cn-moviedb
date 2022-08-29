import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'

import Link from '@/components/Link'

interface MenuItems {
  link: string
  name: string
  icon: JSX.Element
}

interface NavigationDrawerProps {
  menuItems: MenuItems[]
  open: boolean
  onClose: () => void
}

function NavigationDrawer(props: NavigationDrawerProps): JSX.Element {
  const { menuItems, open, onClose } = props
  const theme = useTheme()

  return (
    <Drawer variant="temporary" anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
        }}
      >
        <IconButton onClick={onClose}>
          <CloseIcon fontSize="large" color="secondary" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            onClick={onClose}
            key={item.name}
            {...{ component: Link, href: item.link, noLinkStyle: true }}
          >
            <ListItemIcon sx={{ minWidth: '56px' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default NavigationDrawer
