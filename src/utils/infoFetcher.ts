import axios from './omdb'

const infoFetcher = (phrase: string) => axios.get('', { params: { i: phrase } }).then((res) => res.data)

export default infoFetcher
