import Grid from '@mui/material/Grid'

import CardItem from '@components/CardItem'
import Loader from '@components/Loader'
import { EntryType } from '@model/entryType'
interface CardGridProps {
  results: EntryType[] | undefined
  isLoading?: boolean
}

function CardGrid({ results, isLoading }: CardGridProps): JSX.Element {
  return (
    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      {results &&
        results.map((result, index) => (
          <Grid item lg={3} sm={6} md={4} xs={12} key={`result-${index}`}>
            <CardItem Title={result.Title} Poster={result.Poster} Year={result.Year} imdbID={result.imdbID} />
          </Grid>
        ))}
      {isLoading && <Loader />}
    </Grid>
  )
}

export default CardGrid
