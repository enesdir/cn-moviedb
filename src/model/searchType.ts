import { EntryType, EntryFullType } from './entryType'

export interface SearchType {
  Response: string
  Search: EntryType[] | EntryFullType
  totalResults: string
}
