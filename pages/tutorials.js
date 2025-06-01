import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')

  const tutorials = [
    {
      id: 1,
      title: "AI Forest Inventory: Complete Implementation Guide",
      slug: "ai-forest-inventory-complete-guide",
      level: "Beginner",
      duration: "45 min",
      topic: "Forest Inventory",
      description: "Step-by-step guide to implementing AI-powered forest inventory systems, from data collection to model deployment.",
      modules: 6,
      prerequisites: ["Basic forestry knowledge", "Basic understanding of AI concepts"],
      tools: ["Python", "TensorFlow", "QGIS", "Drone imagery"],
      learningGoals: [
        "Understand AI applications in forest inventory",
        "Set up data collection workflows", 
        "Train species classification models",
        "Deploy inventory automation systems"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Drone-Based Forest Health Monitoring",
      slug: "drone-forest-health-monitoring",
      level: "Intermediate",
      duration: "60 min",
      topic: "Remote Monitoring",
      description: "Build automated drone monitoring systems for early detection of forest health issues and pest outbreaks.",
      modules: 8,
      prerequisites: ["Drone operation experience", "Basic image analysis"],
      tools: ["DJI drones", "Pix4D", "OpenCV", "Machine Learning models"],
      learningGoals: [
        "Plan effective drone survey missions",
        "Process multispectral imagery",
        "Detect forest health anomalies",
        "Implement automated monitoring workflows"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Species Classification with Computer Vision",
      slug: "species-classification-computer-vision",
      level: "Advanced",
      duration: "90 min",
      topic: "Computer Vision",
      description: "Deep dive into training custom computer vision models for accurate forest species identification.",
      modules: 10,
      prerequisites: ["Python programming", "Machine learning fundamentals", "Deep learning basics"],
      tools: ["PyTorch", "OpenCV", "Jupyter Notebooks", "GPU computing"],
      learningGoals: [
        "Prepare training datasets effectively",
        "Design CNN architectures for forestry",
        "Implement transfer learning techniques",
        "Optimize model performance and deployment"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Climate Risk Assessment for Forests",
      slug: "climate-risk-assessment",
      level: "Intermediate",
      duration: "50 min",
      topic: "Climate Analysis",
      description: "Use AI to assess climate risks and develop adaptive forest management strategies.",
      modules: 7,
      prerequisites: ["Forest ecology knowledge", "Basic statistics"],
      tools: ["R/Python", "Climate data sources", "GIS software", "Risk modeling tools"],
      learningGoals: [
        "Access and process climate projection data",
        "Model species-climate relationships",
        "Assess vulnerability and risk factors",
        "Develop adaptation strategies"
      ],
      featured: true
    },
    {
      id: 5,
      title: "Carbon Stock Estimation with Satellite Data",
      slug: "carbon-stock-satellite-estimation",
      level: "Advanced",
      duration: "75 min", 
      topic: "Carbon Analytics",
      description: "Leverage satellite imagery and AI to accurately estimate and monitor forest carbon stocks.",
      modules: 9,
      prerequisites: ["Remote sensing knowledge", "Statistical modeling"],
      tools: ["Google Earth Engine", "Sentinel data", "Machine learning algorithms"],
      learningGoals: [
        "Process satellite imagery for forestry",
        "Build carbon estimation models",
        "Validate results with ground truth",
        "Create monitoring systems"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Forest Fire Risk Prediction",
      slug: "forest-fire-risk-prediction", 
      level: "Intermediate",
      duration: "55 min",
      topic: "Fire Management",
      description: "Develop AI models to predict forest fire risk and optimize prevention strategies.",
      modules: 8,
      prerequisites: ["Fire ecology basics", "Data analysis skills"],
      tools: ["Python", "Weather APIs", "Fire danger indices", "Predictive models"],
      learningGoals: [
        "Understand fire risk factors",
        "Process weather and fuel data",
        "Build predictive risk models",
        "Create early warning systems"
      ],
      featured: false
    }
  ]

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced']
  const topics = ['all', 'Forest Inventory', 'Remote Monitoring', 'Computer Vision', 'Climate Analysis', 'Carbon Analytics', 'Fire Management']

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tools.some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel
    const matchesTopic = selectedTopic === 'all' || tutorial.topic === selectedTopic
    return matchesSearch && matchesLevel && matchesTopic
  })

  const featuredTutorials = tutorials.filter(t => t.featured)

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200'  
      case 'Advanced': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <>
      <Head>
        <title>AI Forestry Tutorials | Step-by-Step Implementation Guides | AI Forester</title>
        <meta name="description" content="Master AI applications in forestry with comprehensive tutorials. Learn forest inventory automation, drone monitoring, species classification, and climate analysis." />
        <meta name="keywords" content="AI forestry tutorials, forest inventory guide, drone monitoring tutorial, species classification, climate analysis, forest AI implementation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Forestry Tutorials | Implementation Guides" />
        <meta property="og:description" content="Comprehensive step-by-step tutorials for implementing AI in forestry operations. From beginner to advanced levels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiforester.com/learning/tutorials" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AI Forestry Tutorials",
          "description": "Comprehensive tutorials for implementing AI in forestry operations",
          "provider": {
            "@type": "Person",
            "name": "David Beleznay"
          },
          "courseMode": "online",
          "educationalLevel": "beginner to advanced"
        })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Forestry Tutorials
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Master AI implementation in forestry through hands-on, step-by-step tutorials designed for real-world application
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search tutorials by title, technology, or concept..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">Skill Level</label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      {levels.map(level => (
                        <option key={level} value={level}>
                          {level === 'all' ? 'All Levels' : level}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">Topic</label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      {topics.map(topic => (
                        <option key={topic} value={topic}>
                          {topic === 'all' ? 'All Topics' : topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial) => (
                <article key={tutorial.id} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-6">{tutorial.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Modules:</span>
                      <span className="ml-2 text-gray-600">{tutorial.modules}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Topic:</span>
                      <span className="ml-2 text-gray-600">{tutorial.topic}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">You'll Learn:</h4>
                    <ul className="space-y-1">
                      {tutorial.learningGoals.slice(0, 3).map((goal, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/learning/tutorials/${tutorial.slug}`}>
                    <a className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Start Tutorial
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">All Tutorials</h2>
            
            {filteredTutorials.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredTutorials.map((tutorial) => (
                  <article key={tutorial.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(tutorial.level)}`}>
                          {tutorial.level}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tutorial.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{tutorial.title}</h3>
                      <p className="text-gray-600 mb-6">{tutorial.description}</p>
                      
                      <div className="space-y-3 mb-6 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Prerequisites:</span>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {tutorial.prerequisites.map((prereq, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {prereq}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700">Tools Used:</span>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {tutorial.tools.map((tool, index) => (
                              <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Link href={`/learning/tutorials/${tutorial.slug}`}>
                        <a className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-700 transition-all">
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
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No tutorials found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedLevel('all')
                    setSelectedTopic('all')
                  }}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
            <p className="text-xl text-green-100 mb-8">
              Get expert consultation on implementing these AI solutions in your specific forest operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <a className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Consulting Services
                </a>
              </Link>
              <Link href="/#contact">
                <a className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                  Book a Call
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}