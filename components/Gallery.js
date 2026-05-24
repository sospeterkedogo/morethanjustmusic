import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const features = [
  {
    src: '/images/tom.jpg',
    alt: 'News',
    title: 'News',
    desc: 'Stay updated with the latest headlines and breaking news from around the world.',
  },
  {
    src: '/images/messi.jpg',
    alt: 'Sports',
    title: 'Sports',
    desc: 'Catch up on live scores, highlights, and stories from your favorite sports.',
  },
  {
    src: '/images/basketball.jpg',
    alt: 'Basketball',
    title: 'Basketball',
    desc: 'All things basketball: news, games, and player highlights.',
  },
  {
    src: '/images/instagram.jpg',
    alt: 'Music',
    title: 'Music',
    desc: 'Discover trending tracks, curated playlists, and exclusive artist content.',
  },
  {
    src: '/images/motivation.jpg',
    alt: 'Motivation',
    title: 'Motivation',
    desc: 'Get inspired with motivational stories and quotes.',
  },
  {
    src: '/images/domore.jpg',
    alt: 'Do More',
    title: 'Do More',
    desc: 'Unlock your potential with productivity tips and tools.',
  },
  {
    src: '/images/work.jpg',
    alt: 'Work',
    title: 'Work',
    desc: 'Explore the future of work and remote opportunities.',
  },
  {
    src: '/images/porsche.jpg',
    alt: 'Porsche',
    title: 'Porsche',
    desc: 'Luxury cars, speed, and automotive excellence.',
  },
  {
    src: '/images/porschecool.jpg',
    alt: 'Porsche Cool',
    title: 'Porsche Cool',
    desc: 'Coolest Porsche moments and car culture.',
  },
  {
    src: '/images/lambo.jpg',
    alt: 'Lamborghini',
    title: 'Lamborghini',
    desc: 'Supercars, style, and the thrill of Lamborghini.',
  },
  {
    src: '/images/lambo2.jpg',
    alt: 'Lamborghini 2',
    title: 'Lamborghini 2',
    desc: 'More Lamborghini action and automotive passion.',
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallerySection} aria-label="Feature Gallery">
      <div className={styles.galleryGrid}>
        {features.map((feature, idx) => (
          <figure key={feature.src} className={styles.galleryItem} tabIndex={0} aria-label={feature.title}>
            <Image
              src={feature.src}
              alt={feature.title}
              width={400}
              height={400}
              className={styles.galleryImage}
              priority={idx === 0}
              sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 400px"
            />
            <figcaption className={styles.caption}>
              <span style={{display: 'block', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.3rem'}}>{feature.title}</span>
              <span style={{fontSize: '1rem', fontWeight: 400, color: '#f8fafc', opacity: 0.85}}>{feature.desc}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
