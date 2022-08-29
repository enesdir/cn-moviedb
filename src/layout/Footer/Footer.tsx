import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import NextLinkComposed from '@/components/Link'

function Footer() {
  const theme = useTheme()
  return (
    <Box component="footer" sx={{ padding: theme.spacing(5, 0, 5, 0) }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Fab
          sx={{ marginBottom: theme.spacing(2) }}
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
    </Box>
  )
}

export default Footer
