import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

import CardItemMedia from '@components/CardItemMedia'
import Link from '@components/Link'
import { EntryType } from '@model/entryType'

function CardItem(result: EntryType): JSX.Element {
  return (
    <Card>
      <CardActionArea>
        <Link
          href={`/title/${result.imdbID}`}
          as={`/title/${result.imdbID}`}
          shallow
          underline="none"
          variant="inherit"
        >
          <CardItemMedia poster={result.Poster} title={result.Title} />
        </Link>

        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {result.Title}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Year : {result.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem
