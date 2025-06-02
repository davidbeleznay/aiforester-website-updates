import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Learning.module.css'

export default function Learning() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const learningResources = [
    {
      id: 1,
      title: "AI Forest Inventory Fundamentals",
      category: "tutorials",
      type: "Tutorial Series",
      duration: "45 min",
      level: "Beginner",
      description: "Complete guide to implementing AI-powered forest inventory systems, from data collection to model deployment.",
      tags: ["forest inventory", "computer vision", "machine learning"],
      url: "/learning/tutorials/ai-forest-inventory"
    },
    {
      id: 2,
      title: "British Columbia Government AI Implementation",
      category: "case-studies",
      type: "Case Study",
      duration: "15 min read",
      level: "Intermediate",
      description: "How BC achieved 40% accuracy improvement and $850K annual savings with AI forest inventory automation.",
      tags: ["government", "ROI", "implementation"],
      url: "/learning/case-studies/bc-government"
    },
    {
      id: 3,
      title: "Climate Risk Assessment with AI",
      category: "research",
      type: "Research Article",
      duration: "20 min read",
      level: "Advanced",
      description: "Latest research on using AI for forest climate risk assessment and adaptive management strategies.",
      tags: ["climate", "risk assessment", "research"],
      url: "/learning/research/climate-risk-ai"
    },
    {
      id: 4,
      title: "Drone-Based Forest Monitoring Setup",
      category: "tutorials",
      type: "Step-by-Step Guide",
      duration: "60 min",
      level: "Intermediate",
      description: "Practical guide to setting up automated drone monitoring systems for forest health assessment.",
      tags: ["drones", "monitoring", "automation"],
      url: "/learning/tutorials/drone-monitoring"
    },
    {
      id: 5,
      title: "Private Forest Company Carbon Tracking",
      category: "case-studies",
      type: "Case Study",
      duration: "12 min read",
      level: "Intermediate",
      description: "$1.8M additional revenue through AI-powered precision carbon tracking and verification systems.",
      tags: ["carbon", "private sector", "revenue"],
      url: "/learning/case-studies/carbon-tracking"
    },
    {
      id: 6,
      title: "Species Classification Model Training",
      category: "tutorials",
      type: "Technical Tutorial",
      duration: "90 min",
      level: "Advanced",
      description: "Deep dive into training custom computer vision models for forest species identification.",
      tags: ["machine learning", "species classification", "training"],
      url: "/learning/tutorials/species-classification"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚', count: learningResources.length },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓', count: learningResources.filter(r => r.category === 'tutorials').length },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', count: learningResources.filter(r => r.category === 'case-studies').length },
    { id: 'research', name: 'Research Articles', icon: '🔬', count: learningResources.filter(r => r.category === 'research').length }
  ]

  const filteredResources = learningResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Head>
        <title>AI Forestry Learning Hub | Tutorials, Case Studies & Research | AI Forester</title>
        <meta name="description" content="Comprehensive learning resources for AI in forestry. Access tutorials, real-world case studies, and cutting-edge research to advance your forest technology knowledge." />
        <meta name="keywords" content="AI forestry education, forest technology tutorials, forestry case studies, AI forest management, forest tech learning, forestry AI research" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Forestry Learning Hub | Educational Resources" />
        <meta property="og:description" content="Access comprehensive tutorials, case studies, and research on AI applications in forestry. Learn from real-world implementations and expert insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiforester.com/learning" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Forestry Learning Hub" />
        <meta name="twitter:description" content="Comprehensive educational resources for AI in forestry - tutorials, case studies, and research." />
      </Head>

      <div className={styles.main}>
        {/* Header Section */}
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>AI Forestry Learning Hub</h1>
            <p className={styles.subtitle}>
              Master AI applications in forestry through hands-on tutorials, real-world case studies, and cutting-edge research
            </p>

            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search tutorials, case studies, research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </header>

          {/* Category Filter */}
          <div className={styles.categoryFilter}>
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
                >
                  <span className={styles.icon}>{category.icon}</span>
                  {category.name}
                  <span className={styles.count}>{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Resources Grid */}
          <section className={styles.section}>
            {filteredResources.length > 0 ? (
              <div className={styles.resourceGrid}>
                {filteredResources.map((resource) => (
                  <article key={resource.id} className={styles.resourceCard}>
                    <div className={styles.cardHeader}>
                      <span className={`${styles.levelBadge} ${styles[resource.level.toLowerCase()]}`}>
                        {resource.level}
                      </span>
                      <div className={styles.duration}>
                        <span>⏱️</span>
                        {resource.duration}
                      </div>
                    </div>
                    
                    <h3 className={styles.cardTitle}>{resource.title}</h3>
                    <p className={styles.cardDescription}>{resource.description}</p>
                    
                    <div className={styles.tagContainer}>
                      {resource.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={resource.url}>
                      <a className={styles.ctaButton}>
                        Start Learning
                        <span>→</span>
                      </a>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <div className={styles.icon}>🔍</div>
                <h3>No resources found</h3>
                <p>Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className={styles.clearButton}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Ready to Apply AI in Your Forest Operations?</h2>
            <p>
              Get personalized guidance on implementing AI solutions for your specific forestry challenges
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/services">
                <a className={styles.primary}>Explore Consulting Services</a>
              </Link>
              <Link href="/#contact">
                <a className={styles.secondary}>Schedule a Consultation</a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}