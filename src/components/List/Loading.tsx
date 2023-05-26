import styles from './styles.module.css'

export default ({count}: {count: number}): JSX.Element => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push(
      <div
        key={`lg_${i}`}
        className={styles.loading}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }

  return <>{rows}</>;
}
