import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

import Link from '@components/Link'

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItemIcon: {
    minWidth: '56px',
  },
}))

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
  const classes = useStyles()

  return (
    <Drawer variant="temporary" anchor="right" open={open} onClose={onClose}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <CloseIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            onClick={onClose}
            key={item.name}
            {...{ component: Link, href: item.link, noLinkStyle: true }}
          >
            <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default NavigationDrawer
