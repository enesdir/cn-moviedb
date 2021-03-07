import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
}))

function Loader(): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default Loader
