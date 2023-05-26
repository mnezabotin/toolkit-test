import styles from './styles.module.css';

type Props = {
  page: number;
  per: number;
  total: number;
  loading: boolean;
  onChange: (next: boolean) => void;
}

export default ({
  page,
  per,
  total,
  loading,
  onChange,
}: Props): JSX.Element => {
  let max = Math.ceil(total / per)
  let pages = []
  let leftSide = page - 2
  let rightSide = page + 2

  if (leftSide < 1) {
    rightSide += Math.abs(1 - leftSide)
    leftSide = 1
  }

  if (rightSide > max) {
    leftSide -= Math.abs(max - rightSide)
    rightSide = max
  }

  for (let num = Math.max(leftSide, 1); num <= Math.min(rightSide, max); num++) {
    pages.push(
      <button
        key={`pag_${num}`}
        className={num === page ? styles.active : ''}
      >
        {num}
      </button>,
    );
  }

  const onPrev = () => {
    if (page > 1 && !loading) {
      onChange(false)
    }
  }

  const onNext = () => {
    if (page < max && !loading) {
      onChange(true)
    }
  }

  return (
    <div className={styles.pagination}>
      <button className={loading ? styles.loading : ''} onClick={onPrev}>&#10094;</button>
      {pages}
      <button className={loading ? styles.loading : ''} onClick={onNext}>&#10095;</button>
    </div>
  );
}
