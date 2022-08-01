import { useRecoilState } from 'recoil'
import { modalstate } from '../atoms/modalAtoms'
import styles from '../styles/Modal.module.css'
import { CameraIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from '@firebase/firestore'
import { db, storage } from '../firebase'
import { useSession } from 'next-auth/react'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

function Modal() {
  const { data: session } = useSession()

  const [open, setOpen] = useRecoilState(modalstate)
  const filePickerRef = useRef(null)
  const [selectedfile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const captionRef = useRef(null)

  const uploadPost = async () => {
    if (loading) {
      return setLoading(true)
    }
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.username,
      capttion: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    })

    console.log('New doc added to ID', docRef.id)

    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    await uploadString(imageRef, selectedfile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        })
      }
    )

    setOpen(false)
    setLoading(false)
    setSelectedFile(null)
  }

  const addImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }
  return (
    <div>
      {open && (
        <div className={styles.container}>
          <div className={styles.textdiv}>
            {selectedfile ? (
              <img
                className={styles.img}
                src={selectedfile}
                onClick={() => setSelectedFile(null)}
                alt=''
              />
            ) : (
              <div
                onClick={() => filePickerRef.current.click()}
                className={styles.cameraDiv}
              >
                <CameraIcon className={styles.camera} />
              </div>
            )}

            <div>
              <p>Upload a photo</p>
            </div>
            <div>
              <input
                type='file'
                ref={filePickerRef}
                onChange={addImage}
                hidden
              />
            </div>
            <input
              className={styles.input}
              placeholder='Please enter a caption..'
              type='text'
              ref={captionRef}
            />
            <button
              disabled={!selectedfile}
              type='button'
              className={styles.button}
              onClick={uploadPost}
            >
              {loading ? 'Uploading...' : 'Upload Post'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
