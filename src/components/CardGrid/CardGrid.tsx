import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

import CardItem from '@/components/CardItem'
import Loader from '@/components/Loader'
import type { EntryType } from '@/types/entryType'
interface CardGridProps {
  results: EntryType[] | undefined
  isLoading?: boolean
  errorMessage?: string
}

function CardGrid({ results, isLoading, errorMessage }: CardGridProps): JSX.Element {
  const retrievedMovies =
    isLoading && !errorMessage ? (
      <>
        <Loader />
      </>
    ) : errorMessage ? (
      <Typography color="red">{errorMessage}</Typography>
    ) : !errorMessage ? (
      <>
        {results?.map((result, index) => (
          <Grid item lg={3} sm={4} md={6} xs={12} key={`result-${index}`}>
            <CardItem Title={result.Title} Poster={result.Poster} Year={result.Year} imdbID={result.imdbID} />
          </Grid>
        ))}
      </>
    ) : (
      { errorMessage }
    )
  return (
    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      {retrievedMovies}
    </Grid>
  )
}

export default CardGrid
