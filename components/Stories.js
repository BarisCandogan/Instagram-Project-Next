import styles from '../styles/Stories.module.css'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalstate } from '../atoms/modalAtoms'

const data = [
  {
    id: '10',
    title: 'Gustavo Fring',
    image: `https://i2.milimaj.com/i/milliyet/75/0x410/617633a045d2a0a1041bb645.jpg`,
  },
  {
    id: '1',
    title: 'Josh Emmet',
    image: `https://i.picsum.photos/id/291/200/300.jpg?hmac=5htP1HYHWPOMv5wbTtTsh6GjRk__SPxuXIv6gHLBHHg`,
  },
  {
    id: '2',
    title: 'Tyron Woodley',
    image:
      'https://i.picsum.photos/id/401/200/300.jpg?hmac=he-7UMMRVf8kPoCBJEkzRVnGbaQDdCwMS8APgacLgBI',
  },
  {
    id: '11',
    title: 'Mike Ehrmantraut',
    image: `https://upload.wikimedia.org/wikipedia/tr/e/ea/Mike_Ehrmantraut_BCS_S3.png`,
  },
  {
    id: '3',
    title: ' Alex Morgan',
    image: ` https://i.picsum.photos/id/480/200/300.jpg?hmac=-NCJbhpqFCFd17uR0DXt17Ccp5H073pZLLaStM6erZg`,
  },
  {
    id: '4',
    title: 'Mary Linton',
    image: `https://pbs.twimg.com/media/E1h14cVWEAMIN6H.jpg:large`,
  },
  {
    id: '5',
    title: 'Arthur Morgan',
    image: `https://i.picsum.photos/id/513/200/300.jpg?hmac=KcBD-M89_o9rkxWW6PS2yEfAMCfd3TH9McppOsf3GZ0`,
  },
  {
    id: '6',
    title: 'Barış Candoğan',
    image: `https://i.picsum.photos/id/202/200/300.jpg?hmac=KWOdj8XRnO9x8h_I9rIbscSAhD1x-TwkSPPYjWLN2sI`,
  },
  {
    id: '7',
    title: ' Triss Merigold',
    image: `https://i.picsum.photos/id/690/200/300.jpg?hmac=YX9nONyDZ_zuGZ5wLOen_mxLWVHEsjpkADU43laON4M`,
  },
  {
    id: '8',
    title: 'Anthony Edwards',
    image: `https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4`,
  },
  {
    id: '9',
    title: 'Nikola Jokic',
    image: `https://i.picsum.photos/id/800/200/300.jpg?hmac=p2lPeodOve_jNKshk2YAKVhKm4UUIJhfUe_Tt4FdnTA`,
  },

  {
    id: '12',
    title: 'Lincoln Burrows',
    image: `https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU`,
  },
  {
    id: '13',
    title: 'Fernando Sucre',
    image: `https://i.picsum.photos/id/361/200/300.jpg?hmac=unS_7uvpA3Q-hJTvI1xNCnlhta-oC6XnWZ4Y11UpjAo`,
  },
  {
    id: '14',
    title: 'Skyler White',
    image: `https://i.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA`,
  },
]

function Stories() {
  const [open, setOpen] = useRecoilState(modalstate)

  return (
    <div style={{ display: 'flex' }}>
      {!open &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <div className={styles.images}>
                <Image
                  src={item.image}
                  style={{ display: 'flex' }}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <p className={styles.titles}>{item.title}</p>
            </div>
          )
        })}
      {open &&
        data.map((item) => {
          return (
            <div style={{ opacity: 0.5 }} key={item.id}>
              <div className={styles.images}>
                <Image
                  src={item.image}
                  style={{ display: 'flex' }}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <p className={styles.titles}>{item.title}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Stories
