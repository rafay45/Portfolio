import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VantaBackground from '../components/VantaBackground'
import ScrollTop from '../components/ScrollTop'

export default function MyApp({ Component, pageProps }) {
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
