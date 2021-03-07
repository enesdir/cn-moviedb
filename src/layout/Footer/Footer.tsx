import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import NextLinkComposed from '@components/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0, 5, 0),
  },
  fab: {
    marginBottom: theme.spacing(2),
  },
}))

function Footer(): JSX.Element {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Fab
          className={classes.fab}
          color="secondary"
          size="small"
          href="/"
          component={NextLinkComposed}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <Typography component="p" variant="h6" align="center" gutterBottom>
          Enes ESEN ©2021
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
