import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'

interface HideOnScrollProps {
  children: React.ReactElement
}

function HideOnScroll({ children }: HideOnScrollProps): JSX.Element {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
