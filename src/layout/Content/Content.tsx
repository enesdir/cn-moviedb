import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import { TRenderProps } from '@typings/commonPropTypes'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
}))

function Content({ children }: TRenderProps): JSX.Element {
  const classes = useStyles()
  return (
    <Container maxWidth="xl">
      <div className={classes.root}>{children} </div>
    </Container>
  )
}

export default Content
