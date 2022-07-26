import { useRecoilState } from 'recoil'
import { modalstate } from '../atoms/modalAtoms'
import styles from '../styles/modal.module.css'

function Modal() {
  const [open, setOpen] = useRecoilState(modalstate)
  return <div>{open && <p className={styles.container}>hello</p>}</div>
}

export default Modal
