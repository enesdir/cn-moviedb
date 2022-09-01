import { Chip } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

import CardItemMedia from '@/components/CardItemMedia'
import Link from '@/components/Link'
import { EntryType } from '@/types/entryType'

function CardItem(result: EntryType): JSX.Element {
  return (
    <Card sx={{ borderRadius: 6, maxHeight: 560 }}>
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

        <CardContent sx={{ height: 120 }}>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            {result.Title}
          </Typography>
          <Chip label={result.Year} sx={{ bottom: 10, position: 'absolute' }} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem
