

  return (
    <footer className="lux-footer lux-glass" id="contact">
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%', maxWidth: '900px', margin: '0 auto 1rem auto'}}>
        <div style={{minWidth: 180}}>
          <strong>Contact Us</strong>
          <p>Email: info@morethanjustmusic.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Nairobi, Kenya</p>
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
