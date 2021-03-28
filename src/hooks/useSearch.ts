import { AxiosError } from 'axios'
import useSWR from 'swr'

import fetcher from '@utils/fetcher'

import { SearchType } from '../model/searchType'

type UseSearchValues = {
  results: SearchType | undefined
  isLoading: boolean
  error: AxiosError<any> | undefined
}

const useSearch = (phrase: string, page: number): UseSearchValues => {
  const { data, error } = useSWR<SearchType, AxiosError>(
    () => `search/phrase=${phrase}/page=${page}`,
    () => fetcher({ s: phrase, page: page }),
    { refreshInterval: 1000 }
  )
  return {
    results: data,
    isLoading: !error && !data,
    error,
  }
}

export default useSearch
