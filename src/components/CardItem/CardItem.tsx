import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React from 'react'

import CardItemMedia from '@components/CardItemMedia'
import { EntryType } from '@model/entryType'

function CardItem(result: EntryType): JSX.Element {
  return (
    <Card>
      <CardActionArea>
        <Link href={`/title/${result.imdbID}`} as={`/title/${result.imdbID}`} shallow>
          <MuiLink underline="none" variant="inherit" href={`/title/${result.imdbID}`}>
            <CardItemMedia poster={result.Poster} title={result.Title} />
          </MuiLink>
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
