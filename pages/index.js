import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Forester - Forestry Meets Technology</title>
        <meta name="description" content="Integrating AI and data science to solve forestry challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        {/* Other homepage sections go here */}
      </main>
    </div>
  );
}