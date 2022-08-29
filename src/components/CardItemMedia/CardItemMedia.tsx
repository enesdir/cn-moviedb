import CardMedia from '@mui/material/CardMedia'

interface CardItemMediaProps {
  poster: string
  title: string
}

function Title({ poster, title }: CardItemMediaProps): JSX.Element {
  const onMediaFallback = (event) => (event.target.src = '/404.png')
  return (
    <CardMedia component="img" sx={{ height: 400 }} src={poster} title={title} onError={onMediaFallback} alt={title} />
  )
}

export default Title
