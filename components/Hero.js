import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroImage}>
        {/* The background image is set in CSS */}
      </div>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>Forestry Meets Technology</h1>
          <p className={styles.heroSubtitle}>
            Integrating AI and data science to solve forestry challenges
          </p>
          <div className={styles.ctaContainer}>
            <button className={styles.primaryCta}>Explore Projects</button>
            <button className={styles.secondaryCta}>Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}