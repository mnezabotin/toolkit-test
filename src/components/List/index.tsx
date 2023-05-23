import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const repos = new Array(10).fill(0).map((_, i) => ({
  name: `Название ${i}`,
  raiting: i,
  date: new Date(),
}))


export default function List(): JSX.Element {
  return (
    <div className={styles.grid}>
      <div>
        <div>Название репозитория</div>
        <div>Кол-во звёзд </div>
        <div>Дата последнего коммита</div>
      </div>
      {repos.map(r => (
        <div>
          <div>
            <Link to='34'>
              {r.name}
            </Link>
          </div>
          <div className={styles.star}>{r.raiting}</div>
          <div>{r.date.toDateString()}</div>
          <div>
            <a
              href='https://github.com/logos'
              target='_blank'
            >
              открыть на Github
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
