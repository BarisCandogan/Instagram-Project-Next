import Stories from './Stories'
import styles from '../styles/Feed.module.css'

function Feed() {
  return (
    <div className={styles.grid}>
      <Stories />
    </div>
  )
}

export default Feed
