import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import React from 'react'

import CardItemMedia from '@components/CardItemMedia'
import { EntryType } from '@model/entryType'

const useStyles = makeStyles((theme) => ({
  card: {
    // maxWidth: 345,
  },
  media: {
    width: '100%',
    minHeight: 364,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
function CardItem(result: EntryType): JSX.Element {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
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
