import styles from '../styles/Gallery.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        <div>
          <strong>Contact Us</strong>
          <p>Email: info@morethanjustmusic.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
        <div>
          <strong>Follow Us</strong>
          <p>Instagram | Twitter | Facebook</p>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} MoreThanJustMusic. All rights reserved.
      </div>
    </footer>
  );
}
