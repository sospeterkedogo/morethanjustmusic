


import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>MoreThanJustMusic - Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern, accessible, mobile-first image gallery with high-end animations." />
      </Head>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
        {/* Porsche background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          background: "url('/images/porsche.jpg') center center / cover no-repeat",
          filter: 'brightness(0.72)',
        }} />

        {/* Hero Section - text close to edges */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '3vw 3vw 0 3vw',
            flex: 1,
          }}>
            <h1 className="lux-title" style={{margin: 0, fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '0.04em'}}>
              MoreThanJustMusic
            </h1>
            <h2 className="lux-subtitle" style={{margin: '0.5em 0 1.5em 0', fontSize: 'clamp(1.2rem, 3vw, 2.5rem)'}}>
              <span style={{ fontWeight: 700, color: 'var(--luxury-accent)' }}>Coming Soon...</span>
            </h2>
            <div style={{display: 'flex', gap: '1.5vw', marginTop: '1.5em'}}>
              <button
                style={{
                  padding: '1.1em 2.7em',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #ffd700 0%, #e52e71 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 0,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  letterSpacing: '0.03em',
                  minWidth: '180px',
                  transition: 'background 0.2s',
                }}
                onClick={() => router.push('/gallery')}
              >
                View Gallery
              </button>
              <button
                style={{
                  padding: '1.1em 2.7em',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  border: '2px solid #ffd700',
                  borderRadius: 0,
                  cursor: 'pointer',
                  minWidth: '180px',
                  letterSpacing: '0.03em',
                  transition: 'background 0.2s',
                }}
                onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
              >
                About Us
              </button>
            </div>
          </div>

          {/* Lower edge sections */}
          <div style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0 3vw 3vw 3vw',
            gap: '2vw',
          }}>
            <div style={{color: '#fff', maxWidth: '420px', fontSize: '1.1rem', opacity: 0.92}}>
              <h3 style={{margin: 0, fontWeight: 700, fontSize: '1.5rem'}}>What's Coming</h3>
              <ul style={{margin: '0.7em 0 0 1.2em', padding: 0, lineHeight: 1.6}}>
                <li>Ultra-premium music & art gallery</li>
                <li>Luxury design system</li>
                <li>Exclusive events & experiences</li>
                <li>Next-level animations & UI</li>
              </ul>
            </div>
            <div style={{color: '#fff', maxWidth: '420px', fontSize: '1.1rem', opacity: 0.92}} id="about-us">
              <h3 style={{margin: 0, fontWeight: 700, fontSize: '1.5rem'}}>About Us</h3>
              <p style={{margin: '0.7em 0 0 0', lineHeight: 1.6}}>
                MoreThanJustMusic is a curated platform for luxury, art, and sound. We blend high-end design with exclusive content and experiences for true connoisseurs.
              </p>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
      </main>
      <Footer />
    </>
  );
}