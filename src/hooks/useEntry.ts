import { AxiosError } from 'axios'
import useSWR from 'swr'

import fetcher from '@utils/fetcher'

import { InfoType } from '../model/infoType'

type UseInfoValues = {
  result: InfoType | undefined
  isLoading: boolean
  error: AxiosError<any> | undefined
}

const useEntry = (phrase: string): UseInfoValues => {
  const { data, error } = useSWR<InfoType, AxiosError>(
    () => `ByID/phrase=${phrase}`,
    () => fetcher({ i: phrase, plot: 'full' })
  )
  return {
    result: data,
    isLoading: !error && !data,
    error,
  }
}

export default useEntry
