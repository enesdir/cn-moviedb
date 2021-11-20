import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

import CardGrid from '@components/CardGrid'
import { Paginator } from '@components/Paginator'
import { HEAD_TITLE } from '@constants/seo'
// import useDebounce from '@hooks/useDebounce'
import Layout from '@layout'
import { SearchType } from '@model/searchType'
import fetcher from '@utils/fetcher'

export default function HomePage({ fallbackData }): JSX.Element {
  const [title, setTitle] = useState('star')
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = useSWR<SearchType, AxiosError>(
    () => `search/phrase=${title}/page=${page}`,
    () => fetcher({ s: title, page: page }),
    { refreshInterval: 0, fallbackData }
  )
  const isResponseEmpty = title === '' && data?.Response === 'False'
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
          <CardGrid results={data?.Search} isLoading={isLoading} errorMessage={error?.message} />
          {data?.Search && <Paginator page={page} setPage={setPage} total={parseInt(data.totalResults)} />}
        </Layout.Content>
        <Layout.Footer />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetcher({ s: 'star', page: 1 })
  return { props: { fallbackData: data } }
}
