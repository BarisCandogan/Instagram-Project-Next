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
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalstate } from '../atoms/modalAtoms'

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalstate)
  return (
    <div
      style={{
        padding: 10,
        borderBottom: '2px solid whitesmoke',
        background: 'white',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: 'auto',
        }}
      >
        <div className={styles.container}>
          <div className={styles.relative}>
            <Image
              onClick={() => router.push('/')}
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

          {session ? (
            <>
              <div className={styles.div}>
                <div className={styles.icondiv}>
                  <SearchIcon className={styles.icon} />
                </div>

                {!open && (
                  <input
                    className={styles.input}
                    type='text'
                    placeholder='Search'
                  />
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon className={styles.home} />
                <PaperAirplaneIcon className={styles.paper} />
                <div className={styles.number}>3</div>

                <PlusCircleIcon
                  onClick={() => setOpen(true)}
                  className={styles.circle}
                />
                <MenuIcon className={styles.menu} />
                <UserGroupIcon className={styles.group} />
                <HeartIcon className={styles.heart} />
                <div className={styles.logodiv}>
                  {open && (
                    <img
                      className={styles.logo3}
                      src={session.user.image}
                      alt=''
                    />
                  )}
                  {!open && (
                    <img
                      onClick={signOut}
                      className={styles.logo2}
                      src={session.user.image}
                      alt=''
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon
                  onClick={() => router.push('/')}
                  className={styles.home}
                />
                <button
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={signIn}
                >
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
