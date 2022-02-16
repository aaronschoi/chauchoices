import type { NextPage } from 'next'
import Head from 'next/head'

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chau Choices</title>
        <meta name="description" content="Do you want to eat da cafe fud? Okay." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.title_container}>
          <h1><span>CHAU</span> <span>CHOICES</span></h1>
        </div>
        <div>
          <div>
            Abou
          </div>
        </div>
    </>
  )
}

export default Home
