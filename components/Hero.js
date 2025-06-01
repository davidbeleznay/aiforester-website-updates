import React from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroImage}>
        {/* The background image is set in CSS */}
      </div>
      {/* This divides the screen into top and bottom halves explicitly */}
      <div className={styles.heroSplit}>
        <div className={styles.topHalf}>
          {/* Top half reserved for image only - no content here */}
        </div>
        <div className={styles.bottomHalf}>
          <div className={styles.textContainer}>
            <h1 className={styles.heroTitle}>Engineer. Forester. AI Explorer.</h1>
            <p className={styles.heroSubtitle}>
              Helping busy builders unlock real-world potential with AI + tech solutions built on 20+ years in the field
            </p>
            <div className={styles.ctaContainer}>
              <Link href="/prompts" className={styles.primaryCta}>
                Browse AI Prompts
              </Link>
              <a 
                href="mailto:contact@aiforester.com?subject=Let's Connect&body=Hi! I'd like to discuss a potential collaboration or project."
                className={styles.secondaryCta}
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}