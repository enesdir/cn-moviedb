import Typography from '@material-ui/core/Typography'

import { TRenderProps } from '@typings/commonPropTypes'

function Title({ children }: TRenderProps): JSX.Element {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  )
}

export default Title
