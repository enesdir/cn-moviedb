import { AxiosError } from 'axios'
import useSWR from 'swr'

import infoFetcher from '@utils/infoFetcher'

import { InfoType } from '../model/infoType'

type UseInfoValues = {
  result: InfoType | undefined
  isLoading: boolean
  error: AxiosError<any> | undefined
}

const useEntry = (phrase: string): UseInfoValues => {
  const { data, error } = useSWR<InfoType, AxiosError>(
    () => `ByID/phrase=${phrase}`,
    () => infoFetcher(phrase)
  )
  return {
    result: data,
    isLoading: !error && !data,
    error,
  }
}

export default useEntry
