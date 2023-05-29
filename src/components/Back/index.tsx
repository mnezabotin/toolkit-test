import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

export default () => {
  const navigate = useNavigate()

  return (
    <button
      className={styles.back}
      onClick={() => navigate(-1)}
    >
      &#10094;
    </button>
  )
}
