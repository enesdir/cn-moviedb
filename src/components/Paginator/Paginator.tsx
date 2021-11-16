import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import { useTheme } from '@mui/material/styles'

import { RESULTS_PER_PAGE } from '@constants/paginator'

interface PaginatorProps {
  total: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
function Paginator({ total, page, setPage }: PaginatorProps): JSX.Element {
  const theme = useTheme()
  const count = Math.round(+total / RESULTS_PER_PAGE)

  const handlePageChange = (value: number) => {
    window.scrollTo(0, 0)
    setPage(value)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
          marginBottom: theme.spacing(10),
        },
      }}
    >
      <Pagination
        count={count}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(_, value) => handlePageChange(value)}
      />
    </Box>
  )
}

export default Paginator
