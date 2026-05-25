

export default function Footer() {
  return (
    <footer className="lux-footer lux-glass" id="contact">
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%', maxWidth: '900px', margin: '0 auto 1rem auto'}}>
        <div style={{minWidth: 180}}>
          <strong>Contact Us</strong>
          <p>Email: info@morethanjustmusic.com</p>
          <p>Phone: +44 234 123-4567</p>
          <p>Location: Northampton, UK</p>
        </div>
        <div style={{minWidth: 180}}>
          <strong>Follow Us</strong>
          <p>Instagram | Twitter | Facebook</p>
        </div>
      </div>
      <div style={{textAlign: 'center', fontSize: '0.95em', color: '#aaa'}}>
        &copy; {new Date().getFullYear()} MoreThanJustMusic. All rights reserved.
      </div>
    </footer>
  );
}
