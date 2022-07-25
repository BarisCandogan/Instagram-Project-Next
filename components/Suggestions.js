import styles from '../styles/Suggestion.module.css'

const data = [
  {
    id: '10',
    title: 'Gustavo Fring',
    profile: `https://i2.milimaj.com/i/milliyet/75/0x410/617633a045d2a0a1041bb645.jpg`,
    image: `https://preview.redd.it/bo90qje0e4d81.jpg?auto=webp&s=a63e94958f00d1561035dc5ae1d636f6df4f568e`,
    caption: 'Los pollos hermanos disipline ',
  },
  {
    id: '8',
    title: 'Anthony Edwards',
    profile: `https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4`,
    image: `https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4`,
    caption: 'Look at this animal :DD',
  },
  {
    id: '13',
    title: 'Fernando Sucre',
    profile:
      'https://i.picsum.photos/id/361/200/300.jpg?hmac=unS_7uvpA3Q-hJTvI1xNCnlhta-oC6XnWZ4Y11UpjAo',
    image: `https://i.pinimg.com/originals/6a/b1/42/6ab142b9ee9ae65bb5baeef849600951.jpg`,
    caption: 'Prison life',
  },

  {
    id: '4',
    title: 'Mary Linton',
    profile: `https://picsum.photos/200/300`,
    image: `https://picsum.photos/200/300`,
    caption: 'My old laptop :)',
  },
  {
    id: '11',
    title: 'Mike Ehrmantraut',
    profile: `https://upload.wikimedia.org/wikipedia/tr/e/ea/Mike_Ehrmantraut_BCS_S3.png`,
    image: `https://awardsfocus.com/files/better-call-saul-jonathan-banks-A-750x400.jpg`,
    caption: 'Time to visit Kaylee. ',
  },
]

function Suggestions() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <p style={{ color: 'rgb(160,160,160)' }}>Suggestions for you</p>
        <p style={{ fontWeight: 'bold', marginLeft: '40px' }}>See All</p>
      </div>
      <div>
        {data.map((item) => (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex' }}>
                <div className={styles.img} key={item.id}>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    src={item.profile}
                    alt=''
                  />
                </div>
                <p style={{ marginLeft: 10, fontSize: 12, fontWeight: 700 }}>
                  {item.title}
                </p>
              </div>
              <p style={{ color: '#0095f6', fontSize: 14, fontWeight: 300 }}>
                Follow
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Suggestions
