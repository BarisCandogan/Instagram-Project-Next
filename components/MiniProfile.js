import styles from '../styles/MiniProfile.module.css'
import Image from 'next/image'
import { colors } from '@material-ui/core'
import { useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className={styles.logodiv}>
        <img className={styles.img} src={session?.user?.image} alt='' />
      </div>
      <div className={styles.welcome}>
        <p style={{ fontWeight: 'bold' }}>{session?.user?.username}</p>
        <p style={{ fontSize: '10px', color: 'rgb(110,110,110)' }}>
          Welcome to instagram
        </p>
      </div>
      <button className={styles.button}>Sign Out</button>
    </div>
  )
}

export default MiniProfile
