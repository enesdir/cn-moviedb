import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { useRouter } from 'next/router'

import CardItemMedia from '@components/CardItemMedia'
import Loader from '@components/Loader'
import { HEAD_TITLE } from '@constants/seo'
import useEntry from '@hooks/useEntry'
import Layout from '@layout'

function Info(): JSX.Element {
  const router = useRouter()
  const { tid } = router.query
  const { result, isLoading } = useEntry(tid)
  const theme = useTheme()

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>
              {HEAD_TITLE} - {result?.Title}
            </title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Layout.Header />
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
                      <CardItemMedia poster={result?.Poster} title={result?.Title} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={7} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h5">{``}</Typography>
                        <Typography gutterBottom variant="h4">
                          {result?.Title}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Year: {result?.Year}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Language: {result?.Language}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Genre:{result?.Genre}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                          Plot:{result?.Plot}
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

export default Info
