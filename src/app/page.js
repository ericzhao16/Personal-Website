import Head from 'next/head'
import Image from 'next/image'
import NavBar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eric Zhao | Software Engineer</title>
        <meta name="description" content="Generated my create next app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <NavBar/>
    </div>
  )
}
