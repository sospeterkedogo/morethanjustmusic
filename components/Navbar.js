import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import logo from '../public/images/logo.jpeg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" width={48} height={48} className={styles.logo} priority />
        <span className={styles.brand}>MoreThanJustMusic</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
