import { useMemo, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/getRepositories'
import { GET_OWNER_REPOSITORIES } from '../graphql/getOwnerRepositories'
import Header from '../components/Header'
import List from '../components/List'
import Alert from '../components/Alert'
import Pagination from '../components/Pagination'

export default (): JSX.Element => {
  const [total, setTotal] = useState(0)
  const isNext = useRef(0)
  const first = 10;

  let [searchParams, setSearchParams] = useSearchParams()

  let page = useMemo((): number => {
    const page = searchParams.get('page')
    return page ? +page : 1;
  }, [searchParams])

  let query = useMemo((): string => {
    const query = searchParams.get('query')
    return query ?? '';
  }, [searchParams])

  let variables = useMemo((): any => {
    if (!query) {
      return {}
    }
    const start = searchParams.get('start')
    const end = searchParams.get('end')
    const prevstart = searchParams.get('prevstart')
    const prevend = searchParams.get('prevend')

    const v = { query }
    if (start && isNext.current > 0) {
      v.after = end
      v.first = first
    }
    if (end && isNext.current < 0) {
      v.before = start
      v.last = first
    }
    if (isNext.current === 0) {
      if (prevstart) {
        v.before = prevstart
        v.last = first
      }
      if (prevend) {
        v.after = prevend
        v.first = first
      }
      if (!prevstart && !prevend) {
        v.first = first
      }
    }
    return v
  }, [page, query])

  const { loading, error, data } = useQuery(query ? GET_REPOSITORIES : GET_OWNER_REPOSITORIES, {
    variables
  });

  const onSearchParams = (q: string, p: number, start: string, end: string ) => {
    const page = p.toString()
    const query = q
    const params = {query, page, start, end}
    if (isNext.current > 0) {
      params.prevend = end
    }
    if (isNext.current < 0) {
      params.prevstart = start
    }
    setSearchParams(params)
  }

  const onSearch = (value: string) => {
    isNext.current = 0
    onSearchParams(value, 1, '', '')
  }

  const onPage = (next: boolean) => {
    isNext.current = next ? 1 : -1;
    onSearchParams(query, page + isNext.current, searchParams.get('start') ?? '', searchParams.get('end') ?? '')
  }

  useEffect(() => {
    if (data) {
      const pageInfo = query ? data?.search?.pageInfo : data?.viewer?.repositories?.pageInfo
      const start = pageInfo.startCursor
      const end = pageInfo.endCursor
      const prevstart = searchParams.get('prevstart') ?? ''
      const prevend = searchParams.get('prevend') ?? ''
      setSearchParams({
        query,
        page: page.toString(),
        start,
        end,
        prevstart,
        prevend,
      })
      const total = query ? (data?.search?.repositoryCount ?? 0) : (data?.viewer?.repositories?.totalCount ?? 0)
      setTotal(total)
    }
  }, [data])

  const list = (query ? data?.search?.nodes : data?.viewer?.repositories?.nodes) ?? [];

  return (
    <>
      <Header
        searchValue={query}
        onSearch={onSearch}
      />
      <List
        perPage={first}
        items={list}
        loading={loading}
      />
      {error && <Alert type='error' msg={error.message} />}
      <Pagination
        loading={loading}
        page={page}
        per={first}
        total={total}
        onChange={onPage}
      />
    </>
  )
}
