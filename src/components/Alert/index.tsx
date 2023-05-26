import styles from './styles.module.css';

type Props = {
  msg: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

export default ({
  msg,
  type = 'info'
}: Props): JSX.Element => (
  <div className={`${styles.alert} ${styles[type]}`}>
    {msg}
  </div>
)
