import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'
import styles from '../styles/Post.module.css'

function Post({ id, title, image, caption, profile }) {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: '30px',
          padding: '10px',
          border: '1px solid rgb(232,232,232)',
        }}
      >
        <img src={profile} className={styles.post} alt='' />
        <p className={styles.title}>{title}</p>
        <DotsHorizontalIcon
          style={{ height: '20px', color: 'rgb(150,150,150)' }}
        />
      </div>
      <img className={styles.img} src={image} alt='' />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <HeartIcon className={styles.icon} />
          <ChatIcon className={styles.icon} />
          <PaperAirplaneIcon className={styles.icon} />
        </div>
        <BookmarkIcon className={styles.icon} />
      </div>
      <p className={styles.comment}>
        <span style={{ fontWeight: 'bold' }}>{title} </span>
        {caption}
      </p>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <EmojiHappyIcon style={{ width: '30px', margin: '10px' }} />
        <input
          type='text'
          placeholder='Add a comment...'
          style={{ flex: 1, padding: 10, border: 'none', outline: 'none' }}
        />
        <button
          style={{
            backgroundColor: 'white',
            border: 'none',
            color: '#0095F6',
          }}
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
