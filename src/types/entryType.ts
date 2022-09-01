export enum Type {
  Movie = 'movie',
  Series = 'series',
  Episode = 'episode',
}
export interface Rating {
  Source: string
  Value: string
}
export interface EntryType {
  Title: string
  Year: number
  Poster: string
  imdbID: string
  type: Type
}
export interface EntryFullType extends EntryType {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  totalSeasons?: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response: string
}
