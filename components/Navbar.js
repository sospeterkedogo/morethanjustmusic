
import Image from 'next/image';
import logo from '../public/images/logo.jpeg';

  return (
    <nav className="lux-nav lux-glass">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Image src={logo} alt="Logo" width={56} height={56} className="lux-logo" priority />
        <span className="lux-nav-brand">MoreThanJustMusic</span>
      </div>
      <ul className="lux-nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
