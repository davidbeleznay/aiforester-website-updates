import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

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

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-blue-100 text-blue-800'  
      case 'Advanced': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Forestry Learning Hub
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Master AI applications in forestry through hands-on tutorials, real-world case studies, and cutting-edge research
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tutorials, case studies, research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl text-gray-800 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 py-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <article
                    key={resource.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          {resource.type}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(resource.level)}`}>
                          {resource.level}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {resource.duration}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resource.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link href={resource.url}>
                        <a className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                          Start Learning
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Learning Path CTA */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply AI in Your Forest Operations?</h2>
            <p className="text-xl text-green-100 mb-8">
              Get personalized guidance on implementing AI solutions for your specific forestry challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <a className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Consulting Services
                </a>
              </Link>
              <Link href="/#contact">
                <a className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}