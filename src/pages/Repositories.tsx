import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import List from '../components/List'
import Paginator from '../components/Paginator'

export default (): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams()
  let page = useMemo((): number => {
    const page = searchParams.get('page')
    return page ? +page : 1;
  }, [searchParams])

  return (
    <>
      <List />
      <Paginator
        page={page}
        per={10}
        total={1}
        onChange={p => setSearchParams({page: p.toString()})}
      />
    </>
  )
}
