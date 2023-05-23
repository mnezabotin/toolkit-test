import styles from './styles.module.css';
import github from '../../assets/github-mark.svg';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={github} />
      <span>Github Repos</span>
      <input placeholder='Поиск' />
    </header>
  )
}
