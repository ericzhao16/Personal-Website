import Head from 'next/head'
import Image from 'next/image'
import NavBar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eric Zhao | Software Engineer</title>
        <meta name="description" content="Generated my create next app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <NavBar/>
      <Main/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
