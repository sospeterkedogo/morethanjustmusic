

export default function Navbar() {
  return (
    <nav className="lux-nav lux-glass">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="/images/logo.jpeg" alt="Logo" width={56} height={56} className="lux-logo" />
        <span className="lux-nav-brand">MoreThanJustMusic</span>
      </div>
      <ul className="lux-nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
