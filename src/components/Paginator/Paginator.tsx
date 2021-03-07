import Pagination from '@material-ui/core/Pagination'
import { makeStyles } from '@material-ui/core/styles'

import { RESULTS_PER_PAGE } from '@constants/paginator'
const useStyles = makeStyles((theme) => ({
  paginatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10),
    },
  },
}))
interface PaginatorProps {
  total: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
function Paginator({ total, page, setPage }: PaginatorProps): JSX.Element {
  const classes = useStyles()
  const count = Math.round(+total / RESULTS_PER_PAGE)

  const handlePageChange = (value: number) => {
    window.scrollTo(0, 0)
    setPage(value)
  }
  return (
    <div className={classes.paginatorContainer}>
      <Pagination
        count={count}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(_, value) => handlePageChange(value)}
      />
    </div>
  )
}

export default Paginator
