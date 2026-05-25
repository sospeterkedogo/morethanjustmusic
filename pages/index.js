
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>MoreThanJustMusic - Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern, accessible, mobile-first image gallery with high-end animations." />
      </Head>
      <Navbar />
      <main>
        <header className="lux-glass" style={{maxWidth: '540px', margin: '2.5rem auto 1.5rem auto', textAlign: 'center', padding: '2.5rem 2rem'}}>
          <h1 className="lux-title">MoreThanJustMusic</h1>
          <h2 className="lux-subtitle">
            Stay Tuned!<br />
            <span style={{ fontWeight: 700, color: 'var(--luxury-accent)' }}>Coming Soon...</span>
          </h2>
        </header>
        <div id="gallery">
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
}