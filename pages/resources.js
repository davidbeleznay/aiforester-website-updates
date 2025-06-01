import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const resourceCategories = [
    {
      id: 'tools',
      name: 'Tools & Software',
      icon: '🛠️',
      description: 'Essential software, platforms, and tools for AI forestry applications',
      color: 'blue'
    },
    {
      id: 'datasets',
      name: 'Datasets',
      icon: '📊',
      description: 'High-quality datasets for training forestry AI models',
      color: 'green'
    },
    {
      id: 'apis',
      name: 'APIs & Services',
      icon: '🔗',
      description: 'APIs and cloud services for forestry data and AI capabilities',
      color: 'purple'
    },
    {
      id: 'guides',
      name: 'Quick Start Guides',
      icon: '🚀',
      description: 'Step-by-step setup guides for popular forestry AI tools',
      color: 'orange'
    },
    {
      id: 'research',
      name: 'Research Papers',
      icon: '📚',
      description: 'Latest academic research in AI forestry applications',
      color: 'red'
    },
    {
      id: 'communities',
      name: 'Communities',
      icon: '👥',
      description: 'Forums, groups, and communities for forestry AI practitioners',
      color: 'teal'
    }
  ]

  const resources = [
    // Tools & Software
    {
      id: 1,
      title: "QGIS with Forest Analysis Plugins",
      category: "tools",
      type: "Open Source GIS",
      description: "Free, powerful GIS software with specialized plugins for forest inventory, analysis, and visualization.",
      website: "https://qgis.org",
      tags: ["GIS", "Open Source", "Forest Analysis", "Mapping"],
      rating: 4.8,
      cost: "Free",
      featured: true
    },
    {
      id: 2,
      title: "Google Earth Engine",
      category: "tools",
      type: "Cloud Platform",
      description: "Planetary-scale platform for Earth science data analysis, perfect for forest monitoring and change detection.",
      website: "https://earthengine.google.com",
      tags: ["Satellite Data", "Cloud Computing", "Remote Sensing", "Time Series"],
      rating: 4.7,
      cost: "Free for research",
      featured: true
    },
    {
      id: 3,
      title: "R Forest Packages",
      category: "tools",
      type: "Statistical Software",
      description: "Comprehensive R packages for forest inventory, growth modeling, and statistical analysis.",
      website: "https://cran.r-project.org",
      tags: ["Statistics", "Modeling", "Open Source", "Forest Metrics"],
      rating: 4.6,
      cost: "Free"
    },
    {
      id: 4,
      title: "TensorFlow Forest Models",
      category: "tools",
      type: "Machine Learning",
      description: "Pre-trained models and frameworks for forest species classification and health assessment.",
      website: "https://tensorflow.org",
      tags: ["Machine Learning", "Computer Vision", "Deep Learning", "Models"],
      rating: 4.5,
      cost: "Free"
    },

    // Datasets
    {
      id: 5,
      title: "Global Forest Change Dataset",
      category: "datasets",
      type: "Satellite Imagery",
      description: "Annual global forest change maps from 2000-present at 30m resolution from University of Maryland.",
      website: "https://earthenginepartners.appspot.com/science-2013-global-forest",
      tags: ["Global", "Time Series", "Forest Change", "Hansen"],
      rating: 4.9,
      cost: "Free",
      featured: true
    },
    {
      id: 6,
      title: "ForestNet Species Dataset",
      category: "datasets",
      type: "Species Classification",
      description: "Large-scale dataset of forest species images for training computer vision models.",
      website: "https://github.com/forestnet/species-dataset",
      tags: ["Species", "Computer Vision", "Training Data", "Labeled"],
      rating: 4.4,
      cost: "Free"
    },
    {
      id: 7,
      title: "MODIS Forest Products",
      category: "datasets",
      type: "Satellite Data",
      description: "NASA MODIS forest cover, fire, and vegetation products with global coverage.",
      website: "https://modis.gsfc.nasa.gov",
      tags: ["NASA", "MODIS", "Global", "Vegetation"],
      rating: 4.6,
      cost: "Free"
    },

    // APIs & Services
    {
      id: 8,
      title: "Planet Forest Monitoring API",
      category: "apis",
      type: "Satellite API",
      description: "High-resolution satellite imagery API with forest monitoring capabilities and change detection.",
      website: "https://developers.planet.com",
      tags: ["High Resolution", "API", "Commercial", "Real-time"],
      rating: 4.5,
      cost: "Paid plans from $20/month",
      featured: true
    },
    {
      id: 9,
      title: "AWS Forest Analysis Services",
      category: "apis",
      type: "Cloud Services",
      description: "Managed AWS services for forest data processing, including SageMaker for ML and S3 for storage.",
      website: "https://aws.amazon.com",
      tags: ["Cloud", "Machine Learning", "Storage", "Processing"],
      rating: 4.3,
      cost: "Pay-as-you-go"
    },
    {
      id: 10,
      title: "OpenWeatherMap Forest API",
      category: "apis",
      type: "Weather API",
      description: "Weather data API with forest-specific parameters for fire risk and growth modeling.",
      website: "https://openweathermap.org",
      tags: ["Weather", "Fire Risk", "Climate", "API"],
      rating: 4.2,
      cost: "Free tier available"
    },

    // Quick Start Guides
    {
      id: 11,
      title: "Forest Inventory with Python",
      category: "guides",
      type: "Tutorial Guide",
      description: "Complete setup guide for automating forest inventory using Python, GDAL, and machine learning.",
      website: "/learning/guides/forest-inventory-python",
      tags: ["Python", "Automation", "Setup", "Beginner"],
      rating: 4.7,
      cost: "Free",
      featured: true
    },
    {
      id: 12,
      title: "Drone Forest Mapping Setup",
      category: "guides",
      type: "Hardware Guide",
      description: "Step-by-step guide to setting up drone systems for forest mapping and monitoring.",
      website: "/learning/guides/drone-forest-mapping",
      tags: ["Drones", "Hardware", "Mapping", "Setup"],
      rating: 4.6,
      cost: "Free"
    },

    // Research Papers
    {
      id: 13,
      title: "Deep Learning for Forest Species Classification",
      category: "research",
      type: "Academic Paper",
      description: "Recent advances in using convolutional neural networks for automated forest species identification.",
      website: "https://doi.org/example-forest-species-paper",
      tags: ["Deep Learning", "Species", "CNNs", "2024"],
      rating: 4.5,
      cost: "Open Access"
    },
    {
      id: 14,
      title: "AI Applications in Forest Management",
      category: "research",
      type: "Review Paper",
      description: "Comprehensive review of current AI applications in sustainable forest management practices.",
      website: "https://doi.org/example-ai-forest-management",
      tags: ["AI Applications", "Management", "Sustainability", "Review"],
      rating: 4.4,
      cost: "Open Access"
    },

    // Communities
    {
      id: 15,
      title: "Forest Tech Community",
      category: "communities",
      type: "Online Forum",
      description: "Active community of forestry professionals discussing AI and technology implementations.",
      website: "https://foresttech.community",
      tags: ["Forum", "Professionals", "Discussion", "Networking"],
      rating: 4.6,
      cost: "Free",
      featured: true
    },
    {
      id: 16,
      title: "Reddit Forestry AI",
      category: "communities",
      type: "Reddit Community",
      description: "Subreddit dedicated to AI applications in forestry with regular discussions and resource sharing.",
      website: "https://reddit.com/r/forestryai",
      tags: ["Reddit", "Discussion", "Resources", "Community"],
      rating: 4.1,
      cost: "Free"
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredResources = resources.filter(r => r.featured)

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      red: 'bg-red-50 border-red-200 text-red-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800'
    }
    return colors[color] || 'bg-gray-50 border-gray-200 text-gray-800'
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>)
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="text-gray-300">★</span>)
    }
    return stars
  }

  return (
    <>
      <Head>
        <title>AI Forestry Resources | Tools, Datasets, APIs & Guides | AI Forester</title>
        <meta name="description" content="Comprehensive collection of AI forestry resources including tools, datasets, APIs, guides, research papers, and communities for forest technology professionals." />
        <meta name="keywords" content="AI forestry tools, forest datasets, forestry APIs, forest analysis software, GIS forestry, remote sensing tools, forest research resources" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Forestry Resources | Complete Resource Library" />
        <meta property="og:description" content="Essential tools, datasets, APIs, and guides for AI applications in forestry. Everything you need to get started with forest technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiforester.com/resources" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Forestry Resources",
          "description": "Comprehensive collection of tools, datasets, and resources for AI in forestry",
          "numberOfItems": resources.length,
          "itemListElement": resources.map((resource, index) => ({
            "@type": "SoftwareApplication",
            "position": index + 1,
            "name": resource.title,
            "description": resource.description,
            "applicationCategory": resource.category,
            "operatingSystem": "Web-based"
          }))
        })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-800 via-green-700 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Forestry Resource Library
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
                Essential tools, datasets, APIs, and guides to accelerate your forest technology projects
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources by name, category, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl text-gray-800 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-300"
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

        {/* Category Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 py-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">📚</span>
                All Resources
                <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {resources.length}
                </span>
              </button>
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                    {resources.filter(r => r.category === category.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <article key={resource.id} className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {resource.type}
                    </span>
                    <div className="flex items-center">
                      {renderStars(resource.rating)}
                      <span className="ml-2 text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-white bg-opacity-60 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600">{resource.cost}</span>
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Access Resource
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedCategory !== 'all' && (
              <div className="mb-12">
                {resourceCategories.filter(cat => cat.id === selectedCategory).map(category => (
                  <div key={category.id} className="text-center">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {filteredResources.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredResources.map((resource) => {
                  const category = resourceCategories.find(cat => cat.id === resource.category)
                  return (
                    <article key={resource.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(category?.color)}`}>
                            {category?.icon} {resource.type}
                          </span>
                          <div className="flex items-center">
                            {renderStars(resource.rating)}
                            <span className="ml-2 text-sm text-gray-600">{resource.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {resource.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Cost: </span>
                            <span className="text-sm font-medium text-green-600">{resource.cost}</span>
                          </div>
                          <a
                            href={resource.website}
                            target={resource.website.startsWith('http') ? "_blank" : "_self"}
                            rel={resource.website.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center px-6 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                          >
                            {resource.website.startsWith('http') ? 'Visit Site' : 'View Guide'}
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.website.startsWith('http') ? "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" : "M9 5l7 7-7 7"} />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  )
                })}
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
                  className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Submit Resource CTA */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Know a Great Resource?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Help the forestry AI community by suggesting tools, datasets, or resources that should be included
            </p>
            <Link href="/#contact">
              <a className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                Suggest a Resource
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated on New Resources</h2>
            <p className="text-xl text-teal-100 mb-8">
              Get notified when we add new tools, datasets, and resources to the library
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}