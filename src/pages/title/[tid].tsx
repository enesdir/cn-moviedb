import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import CardItemMedia from '@/components/CardItemMedia'
import Loader from '@/components/Loader'
import { HEAD_TITLE } from '@/constants/seo'
import Layout from '@/layout'
import { SearchType } from '@/model/searchType'
import fetcher from '@/utils/fetcher'

export default function Detail({ tid, fallbackData }): JSX.Element {
  const router = useRouter()

  const theme = useTheme()
  const { data, error, isLoading } = useSWR<SearchType, AxiosError>(
    () => `ByID/phrase=${tid}`,
    () => fetcher({ i: tid, plot: 'full' }),
    { refreshInterval: 0, fallbackData }
  )
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>
              {HEAD_TITLE} - {data?.Title}
            </title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Layout.Header title={data?.Title} />
            <Layout.Content>
              <Button
                sx={{ marginTop: theme.spacing(2) }}
                variant="contained"
                color="primary"
                onClick={() => {
                  router.back()
                }}
              >
                Back
              </Button>
              <Paper sx={{ marginTop: theme.spacing(2), padding: theme.spacing(2), margin: 'auto' }} elevation={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={5}>
                    <div style={{ position: 'relative' }}>
                      <CardItemMedia poster={data?.Poster} title={data?.Title} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={7} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h5">{``}</Typography>
                        <Typography gutterBottom variant="h4">
                          {data?.Title}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Year: {data?.Year}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Language: {data?.Language}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Genre:{data?.Genre}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Plot:{data?.Plot}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Layout.Content>
          </Layout>
        </>
      )}
    </Container>
  )
}
export async function getServerSideProps({ query }) {
  const data = await fetcher({ i: query, plot: 'full' })
  return { props: { fallbackData: data, tid: query.tid } }
}
