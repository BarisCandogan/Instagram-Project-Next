import Post from './Post'

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
  {
    id: '9',
    title: 'Nikola Jokic',
    profile: `https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU`,
    image: `https://i.picsum.photos/id/800/200/300.jpg?hmac=p2lPeodOve_jNKshk2YAKVhKm4UUIJhfUe_Tt4FdnTA`,
    caption: '2 time mvp !!',
  },
]

function Posts() {
  return (
    <div>
      {data.map((item) => (
        <Post
          key={item.id}
          id={item.id}
          profile={item.profile}
          title={item.title}
          image={item.image}
          caption={item.caption}
        />
      ))}
    </div>
  )
}

export default Posts
