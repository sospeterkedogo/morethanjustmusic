
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
        <header style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '32px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          padding: '32px 24px',
          maxWidth: '480px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.18)',
          margin: '2.5rem auto 1.5rem auto',
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 7vw, 2.8rem)',
            fontWeight: 800,
            marginBottom: '1.2rem',
            background: 'linear-gradient(90deg, #ff8c00 0%, #e52e71 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            MoreThanJustMusic
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: 400,
            marginBottom: '2.5rem',
            color: '#f8fafc',
            opacity: 0.85,
          }}>
            Stay Tuned!<br />
            <span style={{ fontWeight: 600, color: '#ff8c00' }}>Coming Soon...</span>
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