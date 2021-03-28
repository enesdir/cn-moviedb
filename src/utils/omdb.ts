import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const omdb = axios.create({
  baseURL: 'https://www.omdbapi.com',
  params: {
    apikey: API_KEY,
  },
})

export default omdb
