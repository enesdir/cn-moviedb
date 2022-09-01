import { EntryType, EntryFullType } from './entryType'

export interface SearchResponseType {
  Response: string
  Search: EntryType[] | EntryFullType
  totalResults: string
}
