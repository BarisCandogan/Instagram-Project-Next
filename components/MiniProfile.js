import styles from '../styles/MiniProfile.module.css'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalstate } from '../atoms/modalAtoms'
import { display } from '@mui/system'

function MiniProfile() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalstate)

  console.log(session)
  return (
    <div>
      {open && (
        <div style={{ opacity: 0.5, display: 'flex' }}>
          <div className={styles.logodiv}>
            <img className={styles.img} src={session?.user?.image} alt='' />
          </div>
          <div className={styles.welcome}>
            <p style={{ fontWeight: 'bold' }}>{session?.user?.username}</p>
            <p style={{ fontSize: '10px', color: 'rgb(110,110,110)' }}>
              Welcome to instagram
            </p>
          </div>
          <button className={styles.button1}>Sign Out</button>
        </div>
      )}
      {!open && (
        <div style={{ display: 'flex' }}>
          <div className={styles.logodiv}>
            <img className={styles.img} src={session?.user?.image} alt='' />
          </div>
          <div className={styles.welcome}>
            <p style={{ fontWeight: 'bold' }}>{session?.user?.username}</p>
            <p style={{ fontSize: '10px', color: 'rgb(110,110,110)' }}>
              Welcome to instagram
            </p>
          </div>
          <button onClick={signOut} className={styles.button}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default MiniProfile
