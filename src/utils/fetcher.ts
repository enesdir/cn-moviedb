import axios from './omdb'

interface QueryProps {
  s?: string
  i?: string
  y?: number
  r?: 'json' | 'xml'
  type?: 'movie' | 'series' | 'episode'
  plot?: 'short' | 'full'
  page?: number
  v?: number
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetcher = (query: QueryProps) => axios.get('', { params: query }).then((res) => res.data)

export default fetcher
