import type { AxiosResponse } from 'axios'

import axios from './omdb'

type ListType = 'movie' | 'series' | 'episode'
type PlotType = 'short' | 'full'

export interface QueryProps {
  s?: string
  i?: string
  y?: number
  r?: 'json' | 'xml'
  type?: ListType
  plot?: PlotType
  page?: number
  v?: number
}
const fetcher = <ResType>(url: string, query: QueryProps) =>
  axios.get(url, { params: query }).then((res: AxiosResponse<ResType>) => res.data)

export default fetcher
