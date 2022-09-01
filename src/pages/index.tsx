import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { useState } from 'react'

import { fetchSearchResult, useGetSearchResult } from '@/api/fetchSearchResult'
import CardGrid from '@/components/CardGrid'
import { Paginator } from '@/components/Paginator'
import { HEAD_TITLE } from '@/constants/seo'
import Layout from '@/layout'
import type { SearchResponseType } from '@/types/searchResponseType'

type HomePageProps = {
  fallbackData: SearchResponseType
}

export default function HomePage({ fallbackData }: HomePageProps): JSX.Element {
  const [title, setTitle] = useState('star')
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetSearchResult({ s: title, page: page }, fallbackData, !!title)
  const isResponseEmpty = title === '' && data?.Response === 'False'
  const error = isError ? 'Something wrong' : null
  return (
    <>
      <Head>
        <title>{HEAD_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Layout.Header search={{ title: title, setTitle: setTitle }} />
        <Layout.Content>
          {isResponseEmpty && (
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="40vh">
              <Typography color="textSecondary" variant="h4" align="center">
                No results
              </Typography>
            </Box>
          )}
          <CardGrid results={data?.Search} isLoading={isLoading} errorMessage={error} />
          {data?.Search && <Paginator page={page} setPage={setPage} total={parseInt(data.totalResults)} />}
        </Layout.Content>
        <Layout.Footer />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const fallbackData = await fetchSearchResult({ s: 'star', page: 1 })

  return {
    props: {
      fallbackData,
    },
  }
}
