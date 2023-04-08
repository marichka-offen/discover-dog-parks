import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const onClickHandler = () => {
    console.log('clicked')
  }
  return (
    <>
      <Head>
        <title>BarkFinder</title>
        <meta
          name='description'
          content="Find the perfect place to play with your furry friend! Our site helps you discover local dog parks, complete with reviews and amenities. Whether you're looking for off-leash areas, agility courses, or simply a spot to enjoy the great outdoors, we've got you and your pup covered. Start exploring now!"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/pet-paw.svg' />
      </Head>
      <main className={styles.main}>
        <Banner onClickHandler={onClickHandler} />
      </main>
    </>
  )
}
