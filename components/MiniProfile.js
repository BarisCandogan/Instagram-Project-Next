import styles from '../styles/MiniProfile.module.css'
import Image from 'next/image'

function MiniProfile() {
  return (
    <div className={styles.img}>
      <Image
        layout='fill'
        src='https://i.pinimg.com/600x315/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg'
        alt=''
        objectFit='cover'
      />
    </div>
  )
}

export default MiniProfile
