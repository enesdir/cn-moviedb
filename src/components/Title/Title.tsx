import Typography from '@mui/material/Typography'

import { TRenderProps } from '@typings/commonPropTypes'

function Title({ children }: TRenderProps): JSX.Element {
  return (
    <Typography variant="h4" component="h1" gutterBottom align="center">
      {children}
    </Typography>
  )
}

export default Title
