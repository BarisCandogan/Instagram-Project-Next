import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
import styles from '../../styles/Signin.module.css'

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          className={styles.img}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'
          alt=''
        />

        <p>This app build for practice</p>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={styles.button}
              onClick={() =>
                SignIntoProvider(provider.id, { callbackUrl: '/' })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signin
