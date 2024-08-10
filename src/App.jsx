import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/SvRafael.png',
      name: 'Rafael Souza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: "👉 Rafaeldev/doctorcare"},
      { type: 'link', content: "#novoprojeto"},
      { type: 'link', content: "#nlw"},
      { type: 'paragraph', content: "#rocketseat"}
    ],
    publishedAt: new Date("2022-05-03 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/SvRafael.png',
      name: 'Pepe',
      role: 'Scrum master'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: "👉{' '}Rafaeldev/doctorcare"},
      { type: 'link', content: "#novoprojeto{' '}"},
      { type: 'link', content: "#nlw{' '}"},
      { type: 'paragraph', content: "#rocketseat"}
    ],
    publishedAt: new Date('2022-05-03 15:00:00'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div> 
  )
}

export default App
