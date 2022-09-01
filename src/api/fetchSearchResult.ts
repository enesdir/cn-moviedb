import useSWR from 'swr'

import { EntryFullType } from '@/types/entryType'
import type { SearchResponseType } from '@/types/searchResponseType'
import fetcher, { QueryProps } from '@/utils/fetcher'

type ResponseType = SearchResponseType | EntryFullType

// eslint-disable-next-line unused-imports/no-unused-vars
async function fetchSearchResult(params: QueryProps): Promise<ResponseType> {
  const axiosResponse = await fetcher<ResponseType>('', params)
  return Promise.resolve(axiosResponse)
}
export const useGetSearchResult = <ResponseType, ErrorType = any>(
  params: QueryProps,
  fallbackData?: SearchResponseType,
  isReady = true
) => {
  const { data, error, mutate } = useSWR<ResponseType, ErrorType>(isReady ? params : null, fetchSearchResult, {
    fallbackData,
  })

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
}

export { fetchSearchResult }
