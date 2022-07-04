import Image from 'next/image'
import styles from '../styles/Header.module.css'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from '@heroicons/react/outline'
function Header() {
  return (
    <div style={{ padding: 10, borderBottom: '1px solid whitesmoke' }}>
      <div
        style={{
          maxWidth: 1000,
          margin: 'auto',
        }}
      >
        <div className={styles.container}>
          <div className={styles.relative}>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'
              layout='fill'
            />
          </div>
          <div className={styles.logo}>
            <Image
              src='https://brandslogo.net/wp-content/uploads/2016/05/instagram-icon-logo-vector-download.jpg'
              layout='fill'
            />
          </div>

          <div className={styles.div}>
            <div className={styles.icondiv}>
              <SearchIcon className={styles.icon} />
            </div>
            <input className={styles.input} type='text' placeholder='Search' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon className={styles.home} />
            <PaperAirplaneIcon className={styles.paper} />
            <div className={styles.number}>3</div>
            <PlusCircleIcon className={styles.circle} />
            <MenuIcon className={styles.menu} />
            <UserGroupIcon className={styles.group} />
            <HeartIcon className={styles.heart} />
            <div className={styles.logo2}>
              <Image
                src='https://i.pinimg.com/600x315/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
