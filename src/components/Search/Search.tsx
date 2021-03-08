import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import React, { useState, ChangeEvent } from 'react'

import CardGrid from '@components/CardGrid'
import Paginator from '@components/Paginator'
import Title from '@components/Title'
import useDebounce from '@hooks/useDebounce'
import useSearch from '@hooks/useSearch'

function Search(): JSX.Element {
  const [title, setTitle] = useState('')
  const debouncedValue = useDebounce(title, 3000)
  const [page, setPage] = useState(1)
  const { results, error, isLoading } = useSearch(debouncedValue, page)

  const isResponseEmpty = debouncedValue !== '' && results?.Response === 'False'

  const clearSearch = () => {
    setTitle('')
    setPage(1)
  }
  return (
    <>
      <Paper
        style={{
          padding: '20px 20px',
          margin: '1em 0 1em 0',
        }}
      >
        <Title>Welcome to CN-MOVIEDB</Title>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item>
            <FormControl onSubmit={(e) => e.preventDefault()}>
              <InputLabel htmlFor="standard-adornment-search">Search Movies/Series</InputLabel>
              <Input
                id="standard-adornment-search"
                type="text"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Clear-Search" onClick={clearSearch}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      {error && (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="40vh">
          <Typography color="textSecondary" variant="h4" align="center">
            Something Wrong.
          </Typography>
        </Box>
      )}
      {isResponseEmpty && (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="40vh">
          <Typography color="textSecondary" variant="h4" align="center">
            No results
          </Typography>
        </Box>
      )}
      <CardGrid results={results?.Search} isLoading={isLoading} />
      {results?.Search && <Paginator page={page} setPage={setPage} total={parseInt(results.totalResults)} />}
    </>
  )
}

export default Search
