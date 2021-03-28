import { AxiosError } from 'axios'
import useSWR, { SWRConfiguration } from 'swr'

import { SWRHookResp } from '@typings/SWRHookResp'
import fetcher from '@utils/fetcher'

import { InfoType } from '../model/infoType'

type UseInfoValues = SWRHookResp & {
  result: InfoType | undefined
}

const useEntry = (phrase: string, swrConfig?: SWRConfiguration): UseInfoValues => {
  const { data, error } = useSWR<InfoType, AxiosError>(
    () => `ByID/phrase=${phrase}`,
    () => fetcher({ i: phrase, plot: 'full' }),
    swrConfig
  )
  return {
    result: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useEntry
