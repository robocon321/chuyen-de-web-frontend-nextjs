
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Client/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Client/Footer'
// =======
// import Header from '../components/Client/Header';
// import Footer from '../components/Client/Footer';
import Home from '../components/Client/home/index';
// >>>>>>> 45126307d1d7707c22a6b25baa9b563460b78a6e


export default function HomePage() {
  return (
    <>
      <Header />

      {/* <Footer/> */}

      <Home />
      <Footer />

    </>
  )
}
