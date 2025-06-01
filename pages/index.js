import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Forester - Where Forestry Meets AI Technology | David Beleznay</title>
        <meta name="description" content="Professional forester and AI engineer helping businesses solve real-world challenges with 20+ years of field experience. Get battle-tested AI prompts and forestry insights." />
        <meta name="keywords" content="AI forester, forestry technology, machine learning forestry, AI prompts, forest management, silviculture, environmental engineering" />
        <meta name="author" content="David Beleznay" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="AI Forester - Where Forestry Meets AI Technology" />
        <meta property="og:description" content="Professional forester and AI engineer helping businesses solve real-world challenges with 20+ years of field experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aiforester.com" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Forester - Where Forestry Meets AI Technology" />
        <meta name="twitter:description" content="Professional forester and AI engineer helping businesses solve real-world challenges." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.aiforester.com" />
        
        {/* Viewport for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero />
        {/* Future homepage sections will go here */}
      </main>
    </div>
  );
}