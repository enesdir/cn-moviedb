export interface EntryType {
  Title: string
  Year: number
  Poster: string
  imdbID: string
}
export interface EntryFullType extends EntryType {
  Released: string
  Plot: string
  Poster: string
  Language: string
  Genre: string
}
