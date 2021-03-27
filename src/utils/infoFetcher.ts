import axios from './omdb'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const infoFetcher = (phrase: string) => axios.get('', { params: { i: phrase } }).then((res) => res.data)

export default infoFetcher
