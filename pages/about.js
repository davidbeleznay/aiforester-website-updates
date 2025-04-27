import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>About David Beleznay | AI Forester</title>
        <meta name="description" content="David Beleznay is a forester and technologist specializing in AI applications for sustainable forestry and environmental management." />
        <meta property="og:title" content="About David Beleznay | AI Forester" />
        <meta property="og:description" content="Learn about David Beleznay's background, expertise, and work at the intersection of forestry and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aiforester.com/about" />
        <meta property="og:image" content="https://www.aiforester.com/images/david-beleznay-profile.jpg" />
      </Head>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>About Me</h1>
            <p className={styles.tagline}>Forester. Technologist. Environmental Innovator.</p>
          </div>
        </section>

        <section className={styles.bioSection}>
          <div className={styles.container}>
            <div className={styles.bioLayout}>
              <div className={styles.imageWrapper}>
                <div className={styles.profileImage}>
                  {/* Image set via CSS background */}
                </div>
              </div>
              
              <div className={styles.bioContent}>
                <h2>Hi, I'm David Beleznay</h2>
                <p className={styles.intro}>
                  I bridge the gap between traditional forestry practices and cutting-edge technology.
                </p>
                
                <p>
                  With over 10 years of experience in forest management and a deep passion for technological innovation,
                  I help organizations leverage AI and data science to address complex environmental challenges.
                </p>
                
                <p>
                  My approach combines hands-on field experience with technical expertise to develop solutions that are
                  not only innovative but practical and accessible for forestry professionals.
                </p>
                
                <div className={styles.ctaContainer}>
                  <a href="/projects" className={styles.primaryButton}>View My Projects</a>
                  <a href="/contact" className={styles.secondaryButton}>Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.expertiseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
            
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>AI for Forest Health Monitoring</h3>
                <p>
                  Developing machine learning models to detect early signs of disease, pest infestation, and
                  environmental stress using satellite and drone imagery.
                </p>
              </div>
              
              <div className={styles.expertiseCard}>
                <h3>Sustainable Resource Management</h3>
                <p>
                  Creating data-driven systems for optimizing timber harvest planning while preserving 
                  biodiversity and ecosystem health.
                </p>
              </div>
              
              <div className={styles.expertiseCard}>
                <h3>Climate Change Adaptation</h3>
                <p>
                  Building predictive models to help forest managers prepare for and mitigate the impacts 
                  of climate change on forest ecosystems.
                </p>
              </div>
              
              <div className={styles.expertiseCard}>
                <h3>Wildfire Risk Assessment</h3>
                <p>
                  Implementing advanced analytics to assess wildfire risk and optimize prevention and 
                  response strategies in vulnerable areas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>My Approach</h2>
            
            <div className={styles.approachSteps}>
              <div className={styles.approachStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Listen & Understand</h3>
                <p>
                  I begin by deeply understanding the specific challenges and context of each forestry organization.
                </p>
              </div>
              
              <div className={styles.approachStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Collaborate & Innovate</h3>
                <p>
                  Working closely with stakeholders, I develop tailored technological solutions that address real needs.
                </p>
              </div>
              
              <div className={styles.approachStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Implement & Train</h3>
                <p>
                  Beyond building tools, I ensure forestry professionals have the knowledge and skills to use them effectively.
                </p>
              </div>
              
              <div className={styles.approachStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Measure & Adapt</h3>
                <p>
                  I continuously evaluate and refine solutions based on real-world performance and evolving needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <h2>Ready to bring technology to your forestry projects?</h2>
            <p>Let's discuss how AI and data science can help you achieve your environmental goals.</p>
            <a href="/contact" className={styles.ctaButton}>Start a Conversation</a>
          </div>
        </section>
      </main>
    </div>
  );
}