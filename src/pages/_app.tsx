import { CacheProvider, EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import { MUIThemeProvider } from '@/providers/MUIThemeProvider'
import createEmotionCache from '@/utils/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My Site</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MUIThemeProvider>
        <Component {...pageProps} />
      </MUIThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
