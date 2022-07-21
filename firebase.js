// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCWJQhUN3ArO2_mVdK0XcWU9AIlrGf-gko',
  authDomain: 'instagram-v2-d4335.firebaseapp.com',
  projectId: 'instagram-v2-d4335',
  storageBucket: 'instagram-v2-d4335.appspot.com',
  messagingSenderId: '988413549450',
  appId: '1:988413549450:web:67483e1ed7aa7e917c8673',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
