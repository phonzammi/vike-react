import { useData } from 'vike-react/useData'
import type { Data } from './+data'

export default () => {
  const movie = useData<Data>()
  return  movie.title
}
