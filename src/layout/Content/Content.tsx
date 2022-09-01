import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'

import { TRenderProps } from '@/types/commonPropTypes'

function Content({ children }: TRenderProps): JSX.Element {
  const theme = useTheme()
  return (
    <Container maxWidth="xl">
      <Box sx={{ paddingTop: theme.spacing(10), paddingBottom: theme.spacing(8) }}>{children} </Box>
    </Container>
  )
}

export default Content
