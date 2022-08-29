import Paper from '@mui/material/Paper'

import Title from '@/components/Title'

function Hero(): JSX.Element {
  return (
    <>
      <Paper
        style={{
          padding: '20px 20px',
          margin: '1em 0 1em 0',
        }}
      >
        <Title>Welcome to CN-MOVIEDB</Title>
      </Paper>
    </>
  )
}

export default Hero
