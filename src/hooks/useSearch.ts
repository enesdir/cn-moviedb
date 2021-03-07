import { AxiosError } from 'axios'
import useSWR from 'swr'

import searchFetcher from '@utils/searchFetcher'

import { SearchType } from '../model/searchType'

type UseSearchValues = {
  results: SearchType | undefined
  isLoading: boolean
  error: AxiosError<any> | undefined
}

const useSearch = (phrase: string, page: number): UseSearchValues => {
  const numPage = page.toString()
  const { data, error } = useSWR<SearchType, AxiosError>(
    () => `search/phrase=${phrase}/page=${page}`,
    () => searchFetcher(phrase, numPage),
    { refreshInterval: 10 }
  )
  return {
    results: data,
    isLoading: !error && !data,
    error,
  }
}

export default useSearch
