import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VantaBackground from '../components/VantaBackground'
import ScrollTop from '../components/ScrollTop'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    function setHeaderHeight() {
      const header = document.querySelector('.site-header')
      if (header) {
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)
      }
    }
    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [])

  return (
    <>
      <VantaBackground />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <ScrollTop />
      <Footer />
    </>
  )
}
