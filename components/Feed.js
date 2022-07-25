import Stories from './Stories'
import styles from '../styles/Feed.module.css'
import Posts from './Posts'
import poststyle from '../styles/Posts.module.css'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
import { userAgent } from 'next/server'
function Feed() {
  const { data: session } = useSession()
  return (
    <div>
      {!session && (
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.stories}>
              <Stories />
            </div>
            {session && (
              <div className={styles.profile}>
                <MiniProfile />
                <div className={styles.suggestions}>
                  <Suggestions />
                </div>
              </div>
            )}
          </div>

          <div className={poststyle.main}>
            <div className={poststyle.posts}>
              <Posts />
            </div>
          </div>
        </div>
      )}
      {session && (
        <div>
          <div className={styles.flex}>
            <div className={styles.stories}>
              <div className={styles.userDiv}>
                <img
                  className={styles.userImg}
                  src={session.user.image}
                  alt=''
                />
                <p className={styles.userTitle}>{session.user.username}</p>
              </div>
              <Stories />
            </div>
            {session && (
              <div className={styles.profile}>
                <MiniProfile />
                <div className={styles.suggestions}>
                  <Suggestions />
                </div>
              </div>
            )}
          </div>

          <div className={poststyle.main}>
            <div className={poststyle.posts}>
              <Posts />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed
