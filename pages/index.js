import dynamic from 'next/dynamic';
import Head from 'next/head';
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false });

export default function Home() {
	return (
		<>
			<Head>
				<title>MoreThanJustMusic - Gallery</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="A modern, accessible, mobile-first image gallery with high-end animations." />
			</Head>
			<main style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
				color: '#fff',
				fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
				letterSpacing: '0.03em',
				padding: 0,
				margin: 0,
			}}>
				<header style={{
					background: 'rgba(255,255,255,0.05)',
					borderRadius: '32px',
					boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
					padding: '32px 24px',
					maxWidth: '480px',
					textAlign: 'center',
					border: '1px solid rgba(255,255,255,0.18)',
					marginTop: '2.5rem',
					marginBottom: '1.5rem',
				}}>
					<h1 style={{
						fontSize: '2.8rem',
						fontWeight: 800,
						marginBottom: '1.2rem',
						background: 'linear-gradient(90deg, #ff8c00 0%, #e52e71 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}>
						MoreThanJustMusic
					</h1>
					<h2 style={{
						fontSize: '1.5rem',
						fontWeight: 400,
						marginBottom: '2.5rem',
						color: '#f8fafc',
						opacity: 0.85,
					}}>
						Stay Tuned!<br />
						<span style={{ fontWeight: 600, color: '#ff8c00' }}>Coming Soon...</span>
					</h2>
				</header>
				<Gallery />
			</main>
		</>
	);

}