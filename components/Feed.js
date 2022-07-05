import Stories from './Stories'
import styles from '../styles/Feed.module.css'
import Posts from './Posts'
import poststyle from '../styles/Posts.module.css'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
function Feed() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.stories}>
          <Stories />
        </div>
        <div className={styles.profile}>
          <MiniProfile />
          <Suggestions />
        </div>
      </div>
      <div className={poststyle.main}>
        <div className={poststyle.posts}>
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default Feed
