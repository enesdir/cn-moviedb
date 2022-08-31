import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'

import type { TRenderProps } from '@/typings/commonPropTypes'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function MUIThemeProvider({ children }: TRenderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const initialColorMode = prefersDarkMode ? 'dark' : 'light'
  const [mode, setMode] = React.useState<'light' | 'dark'>(initialColorMode)

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export { MUIThemeProvider, ColorModeContext }
