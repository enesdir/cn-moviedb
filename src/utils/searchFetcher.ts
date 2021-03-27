import axios from './omdb'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetcher = (phrase: string, page?: string) =>
  axios.get('', { params: { s: phrase, page } }).then((res) => res.data)

export default fetcher
