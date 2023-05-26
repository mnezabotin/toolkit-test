import { Link } from 'react-router-dom'
import Loading from './Loading';
import styles from './styles.module.css'

type Repo = {
  id: string;
  name: string;
  stargazerCount: number;
  updatedAt: string;
  url: string;
}

type Props = {
  perPage: number;
  loading: boolean;
  items: Repo[];
}

export default({
  perPage,
  items,
  loading,
}: Props): JSX.Element => {
  return (
    <div className={styles.grid}>
      <div>
        <div>Название репозитория</div>
        <div>Кол-во звёзд </div>
        <div>Дата последнего коммита</div>
      </div>
      {loading ? (
        <Loading count={perPage} />
      ) : items.map(r => (
        <div>
          <div>
            <Link to={r.id}>
              {r.name}
            </Link>
          </div>
          <div className={styles.star}>{r.stargazerCount?.toLocaleString() ?? 0}</div>
          <div>{r.updatedAt ? new Date(r.updatedAt).toLocaleDateString() : ''}</div>
          <div>
            <a
              href={r.url}
              target='_blank'
            >
              открыть на Github
            </a>
          </div>
        </div>
      ))}
      {!loading && !items.length && (
        <div className={styles['no-data']}>Репозитории не найдены</div>
      )}
    </div>
  )
}
