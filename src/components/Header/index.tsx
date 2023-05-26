import Search from '../Search'
import styles from './styles.module.css'
import github from '../../assets/github-mark.svg'

type Pros = {
  searchValue?: string;
  onSearch?: (value: string) => void;
}

export default ({
  searchValue,
  onSearch,
}: Pros): JSX.Element => {
  return (
    <header className={styles.header}>
      <img src={github} />
      <span>Github Repos</span>
      {onSearch && (
        <Search
          initValue={searchValue}
          onSearch={onSearch}
        />
      )}
    </header>
  )
}
