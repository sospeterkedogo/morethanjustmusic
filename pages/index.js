


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
      <main>
        <header className="lux-glass" style={{maxWidth: '540px', margin: '2.5rem auto 1.5rem auto', textAlign: 'center', padding: '2.5rem 2rem'}}>
          <h1 className="lux-title">MoreThanJustMusic</h1>
          <h2 className="lux-subtitle">
            Stay Tuned!<br />
            <span style={{ fontWeight: 700, color: 'var(--luxury-accent)' }}>Coming Soon...</span>
          </h2>
        </header>
        <div id="gallery" style={{textAlign: 'center', padding: '2rem'}}>
          <em>Gallery is now available on a dedicated page.</em>
          <br /><br />
          <button
            className="lux-card"
            style={{fontSize: '1.2rem', padding: '1rem 2.5rem', cursor: 'pointer', border: 'none', borderRadius: '2rem', background: 'linear-gradient(90deg, #ffd700 0%, #e52e71 100%)', color: '#fff', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}
            onClick={() => router.push('/gallery')}
          >
            Go to Gallery
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}