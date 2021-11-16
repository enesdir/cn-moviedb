import { blue, red, grey } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Creates a theme
// For more info see https://material-ui.com/customization/theming/
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: blue[700],
      },
      error: {
        main: red.A400,
      },
      background: {
        default: grey[100],
      },
    },
    typography: {
      fontSize: 17,
      h1: {
        fontSize: '2.0rem',
        lineHeight: 2.0,
        color: '#333333',
      },
      subtitle1: {
        fontSize: '1.0rem',
        lineHeight: 1.5,
        color: '#666666',
      },
    },
  })
)
export default theme
