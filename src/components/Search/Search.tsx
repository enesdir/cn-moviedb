import ClearIcon from '@mui/icons-material/Clear'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
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
