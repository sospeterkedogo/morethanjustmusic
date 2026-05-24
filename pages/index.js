export default function Home() {
	return (
		<main style={{
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
			color: '#fff',
			fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
			letterSpacing: '0.03em',
		}}>
			<div style={{
				background: 'rgba(255,255,255,0.05)',
				borderRadius: '32px',
				boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				padding: '48px 32px',
				maxWidth: '480px',
				textAlign: 'center',
				border: '1px solid rgba(255,255,255,0.18)'
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
					opacity: 0.85
				}}>
					Stay Tuned!<br />
					<span style={{fontWeight: 600, color: '#ff8c00'}}>Coming Soon...</span>
				</h2>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '1.5rem',
					marginTop: '2rem'
				}}>
					<span style={{
						display: 'inline-block',
						width: '12px',
						height: '12px',
						borderRadius: '50%',
						background: '#ff8c00',
						animation: 'pulse 1.2s infinite alternate',
					}} />
					<span style={{
						display: 'inline-block',
						width: '12px',
						height: '12px',
						borderRadius: '50%',
						background: '#e52e71',
						animation: 'pulse 1.2s 0.4s infinite alternate',
					}} />
					<span style={{
						display: 'inline-block',
						width: '12px',
						height: '12px',
						borderRadius: '50%',
						background: '#fff',
						animation: 'pulse 1.2s 0.8s infinite alternate',
					}} />
				</div>
				<style>{`
					@keyframes pulse {
						0% { transform: scale(1); opacity: 0.7; }
						100% { transform: scale(1.4); opacity: 1; }
					}
				`}</style>
			</div>
		</main>
	);
}





