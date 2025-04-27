import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Forester | Forestry & Technology Innovation</title>
        <meta name="description" content="Pioneering solutions at the intersection of forestry and AI technology. Expert consulting, project development, and innovative approaches to forest management." />
        <meta name="keywords" content="forestry technology, AI forestry, forest management systems, environmental technology, sustainable forestry" />
        <meta property="og:title" content="AI Forester | Forestry & Technology Innovation" />
        <meta property="og:description" content="Pioneering solutions at the intersection of forestry and AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aiforester.com" />
        <meta property="og:image" content="https://www.aiforester.com/images/aiforester-social-card.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        
        <section className={styles.featuresSection}>
          {/* Features section placeholder */}
        </section>

        <section className={styles.blogTeaser}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest Insights</h2>
            <p className={styles.sectionDescription}>
              Explore the cutting edge of forestry technology through practical insights and real-world applications.
            </p>
            
            <div className={styles.blogCard}>
              <div className={styles.blogCardContent}>
                <h3>Welcome to AI Forester</h3>
                <p>Exploring the intersection of forestry, technology, and AI innovation</p>
                <a href="/blog/welcome-to-aiforester" className={styles.readMoreLink}>
                  Read More <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
            
            <div className={styles.blogCta}>
              <a href="/blog" className={styles.secondaryButton}>
                View All Articles
              </a>
              <a href="#newsletter" className={styles.primaryButton}>
                Subscribe to Updates
              </a>
            </div>
          </div>
        </section>
        
        <section id="newsletter" className={styles.newsletterSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Stay Updated</h2>
            <p className={styles.sectionDescription}>
              Join my newsletter for the latest in forestry technology and AI applications.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" required className={styles.emailInput} />
              <button type="submit" className={styles.submitButton}>Subscribe</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}