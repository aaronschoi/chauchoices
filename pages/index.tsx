import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chau Choices</title>
        <meta name="description" content="Do you want to eat da cafe fud? Okay." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>CHAU CHOICES</h1>
        </div>
        <div>
          <div>
            About Us: Dis me. Dis also me. We do duh chauy ratings.
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
