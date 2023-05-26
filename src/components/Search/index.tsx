import { useState, useRef, useEffect } from 'react'
// import styles from './styles.module.css';

type Pros = {
  initValue?: string;
  onSearch?: (value: string) => void;
}

export default ({
  initValue = '',
  onSearch
}: Pros): JSX.Element => {
  const didMountRef = useRef(0);
  const [searchTerm, setSearchTerm] = useState(initValue)
  const timeout = useRef(0)

  useEffect(() => {
    if (didMountRef.current > 2) {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        onSearch && onSearch(searchTerm)
      }, 700)
    }
    didMountRef.current++
    return () => {
      didMountRef.current++
    }
  }, [searchTerm])

  return (
    <input
      placeholder='Поиск'
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
