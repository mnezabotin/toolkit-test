import Back from '../Back';
import styles from './styles.module.css';

type Owner = {
  login: string;
  url: string;
  avatarUrl?: string;
}

type Props = {
  name: string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
  langs: string[];
  desc: string;
  owner: Owner;
  loading: boolean;
}

export default ({
  name,
  url,
  stargazerCount,
  updatedAt,
  langs,
  desc,
  owner,
  loading,
}: Props): JSX.Element => (
  <div className={`${styles.repository} ${loading ? styles.loading : ''}`}>
    <div className={styles.owner}>
      <Back />
      {owner.avatarUrl && <img src={owner.avatarUrl} />}
      <a
        href={owner.url}
        target='_blank'
      >
        {owner.login}
      </a>
    </div>
    <h2>
      <a
        href={url}
        target='_blank'
      >
        {name}
      </a>
    </h2>
    <h5 className={styles.star}>{!loading && stargazerCount.toLocaleString()}</h5>
    <h5 className={styles.date}>{!loading && updatedAt ? new Date(updatedAt).toLocaleDateString() : ''}</h5>
    <p className={styles.langs}>
      {langs.map(l => (
        <span key={l}>{l}</span>
      ))}
    </p>
    <p>{desc}</p>
  </div>
)
