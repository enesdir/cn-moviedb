import axios from './omdb'

type ListType = 'movie' | 'series' | 'episode'
type PlotType = 'short' | 'full'

interface QueryProps {
  s?: string
  i?: string
  y?: number
  r?: 'json' | 'xml'
  type?: ListType
  plot?: PlotType
  page?: number
  v?: number
}
const fetcher = (query: QueryProps) => axios.get('', { params: query }).then((res) => res.data)

export default fetcher
