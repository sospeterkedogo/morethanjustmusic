
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  return { props: {} };
}

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery - MoreThanJustMusic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern, accessible, mobile-first image gallery with high-end animations." />
      </Head>
      <Navbar />
      <main>
        <div style={{marginTop: '2rem', textAlign: 'center', padding: '2rem'}}>
          <em>The Gallery is only available in development mode or on the client.</em>
        </div>
      </main>
      <Footer />
    </>
  );
}
