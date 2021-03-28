import { AxiosError } from 'axios'
import { SWRConfiguration } from 'swr'

export type SWRHookResp = SWRConfiguration & {
  isLoading: boolean
  isError: AxiosError<any> | undefined
}
