import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState('all')
  const [expandedCase, setExpandedCase] = useState(null)

  const caseStudies = [
    {
      id: 1,
      title: "AI-Enhanced Forest Inventory in British Columbia",
      slug: "bc-government-forest-inventory",
      industry: "Government",
      application: "Forest Inventory",
      organization: "BC Ministry of Forests",
      duration: "6 months",
      roi: "285%",
      featured: true,
      summary: "Provincial government agency revolutionizes forest inventory processes using AI-powered image analysis and automated data processing.",
      challenge: "Traditional ground-based surveys were expensive, time-consuming, and often inconsistent across different field teams. The BC Ministry needed to improve accuracy while reducing costs.",
      solution: "Implementation of an AI-powered system combining drone imagery, satellite data, and machine learning algorithms to automate species identification, volume estimation, and health assessment.",
      results: [
        { metric: "Accuracy Improvement", value: "40%", description: "Species identification accuracy increased from 75% to 90%" },
        { metric: "Time Reduction", value: "30%", description: "Field time required per inventory plot reduced by one-third" },
        { metric: "Annual Cost Savings", value: "$850K", description: "Reduced field crew requirements and improved efficiency" },
        { metric: "ROI", value: "285%", description: "Return on investment within first year of full implementation" }
      ],
      technologies: ["Computer Vision", "Machine Learning", "Drone Integration", "Satellite Imagery"],
      keyLearnings: [
        "Training data quality is crucial - cleaning historical data improved model performance by 15%",
        "Human expertise remains essential for validation and edge case handling",
        "Gradual rollout reduced staff resistance and improved adoption rates",
        "Integration with existing systems required more time than anticipated"
      ]
    },
    {
      id: 2,
      title: "Climate Risk Assessment & Adaptation Tool",
      slug: "private-climate-risk-assessment",
      industry: "Private Forest",
      application: "Climate Analysis",
      organization: "Major Private Forest Company",
      duration: "4 months",
      roi: "$2.1M Cost Avoidance",
      featured: true,
      summary: "A major private forest company developed an AI system to assess climate risks and optimize long-term management strategies across 500,000 hectares.",
      challenge: "Increasing climate variability was making traditional 20-year forest management plans obsolete. The company needed a way to assess climate risks and adapt management strategies dynamically.",
      solution: "Development of an AI system that analyzes climate projections, species vulnerability data, and management options to recommend adaptive strategies for different forest stands.",
      results: [
        { metric: "Risk Reduction", value: "25%", description: "Reduced climate-related losses through proactive management" },
        { metric: "Cost Avoidance", value: "$2.1M", description: "Prevented losses through early risk identification" },
        { metric: "Yield Improvement", value: "15%", description: "Optimized species selection based on climate projections" },
        { metric: "Planning Efficiency", value: "60%", description: "Faster adaptation strategy development" }
      ],
      technologies: ["Climate Modeling", "Predictive Analytics", "Risk Assessment AI", "GIS Integration"],
      keyLearnings: [
        "Climate projections require careful uncertainty quantification",
        "Local adaptation strategies are more effective than broad approaches",
        "Early stakeholder engagement is crucial for implementation success",
        "Continuous monitoring and model updating improves accuracy over time"
      ]
    },
    {
      id: 3,
      title: "Automated Forest Pest Detection System",
      slug: "university-pest-detection",
      industry: "Research",
      application: "Remote Monitoring",
      organization: "University Research Team",
      duration: "8 months",
      roi: "75% Cost Reduction",
      featured: false,
      summary: "University research team created an AI system for early detection of invasive forest pests using drone imagery and computer vision.",
      challenge: "Traditional pest monitoring was too slow to prevent significant forest damage. Manual surveys could only cover limited areas and often detected infestations after they had already spread.",
      solution: "AI-powered system using drone imagery and computer vision to automatically detect early signs of pest infestation across large forest areas.",
      results: [
        { metric: "Detection Accuracy", value: "92%", description: "Accurate identification of pest infestations" },
        { metric: "Early Detection", value: "2 weeks", description: "Earlier detection compared to traditional methods" },
        { metric: "Cost Reduction", value: "75%", description: "Reduced monitoring costs through automation" },
        { metric: "Coverage Increase", value: "400%", description: "Expanded monitoring area capabilities" }
      ],
      technologies: ["Computer Vision", "Deep Learning", "Drone Technology", "Multi-spectral Imaging"],
      keyLearnings: [
        "Multi-spectral analysis detects stress before visible symptoms appear",
        "Real-time processing during drone flights enables immediate response",
        "Integration with existing monitoring programs enhances effectiveness",
        "Training data from multiple seasons improves model robustness"
      ]
    },
    {
      id: 4,
      title: "AI-Optimized Forest Management Planning",
      slug: "state-management-planning",
      industry: "Government",
      application: "Management Planning",
      organization: "State Forestry Agency",
      duration: "12 months",
      roi: "$3.2M Annual Savings",
      featured: true,
      summary: "State forestry agency uses AI to optimize harvest scheduling, resource allocation, and long-term forest management across 2.3 million acres.",
      challenge: "Complex forest management decisions involving multiple objectives, constraints, and stakeholders were taking months to develop and often resulted in suboptimal outcomes.",
      solution: "AI-powered optimization system that considers ecological, economic, and social factors to generate optimal management plans in days rather than months.",
      results: [
        { metric: "Planning Efficiency", value: "45%", description: "Reduced planning time from 6 months to 3 weeks" },
        { metric: "Annual Savings", value: "$3.2M", description: "Improved resource allocation and optimization" },
        { metric: "Objective Achievement", value: "20%", description: "Better achievement of management goals" },
        { metric: "Stakeholder Satisfaction", value: "85%", description: "Improved transparency and communication" }
      ],
      technologies: ["Optimization AI", "Predictive Modeling", "Resource Planning", "Visualization Tools"],
      keyLearnings: [
        "Multi-objective optimization requires careful weighting of priorities",
        "Visualization tools greatly improve stakeholder communication",
        "Continuous stakeholder feedback enhances plan acceptance",
        "Regular model updates maintain planning accuracy"
      ]
    }
  ]

  const industries = ['all', 'Government', 'Private Forest', 'Research', 'Conservation']
  const applications = ['all', 'Forest Inventory', 'Climate Analysis', 'Remote Monitoring', 'Management Planning', 'Carbon Analytics', 'Conservation Monitoring']

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesIndustry = selectedIndustry === 'all' || caseStudy.industry === selectedIndustry
    const matchesApplication = selectedApplication === 'all' || caseStudy.application === selectedApplication
    return matchesSearch && matchesIndustry && matchesApplication
  })

  const featuredCaseStudies = caseStudies.filter(c => c.featured)

  const getIndustryColor = (industry) => {
    switch(industry) {
      case 'Government': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Private Forest': return 'bg-green-100 text-green-800 border-green-200'
      case 'Research': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Conservation': return 'bg-orange-100 text-orange-800 border-orange-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const toggleExpanded = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId)
  }

  return (
    <>
      <Head>
        <title>AI Forestry Case Studies | Real-World Implementation Success Stories | AI Forester</title>
        <meta name="description" content="Explore real-world AI forestry implementations with measurable results, ROI data, and lessons learned from government, private sector, and research organizations." />
        <meta name="keywords" content="AI forestry case studies, forest technology ROI, forestry AI success stories, forest management implementation, AI forest inventory results, climate forestry applications" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Forestry Case Studies | Real-World Success Stories" />
        <meta property="og:description" content="Real-world AI forestry implementations with measurable results, ROI data, and implementation strategies from various organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiforester.com/learning/case-studies" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Forestry Case Studies",
          "description": "Collection of real-world AI implementations in forestry with measurable results",
          "numberOfItems": caseStudies.length,
          "itemListElement": caseStudies.map((study, index) => ({
            "@type": "Article",
            "position": index + 1,
            "headline": study.title,
            "description": study.summary,
            "author": {
              "@type": "Person",
              "name": "David Beleznay"
            }
          }))
        })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-800 via-green-700 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Forestry Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Real-world implementations with measurable results, proven ROI, and actionable insights from industry leaders
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search case studies by industry, technology, or outcome..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-2">Industry</label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      {industries.map(industry => (
                        <option key={industry} value={industry}>
                          {industry === 'all' ? 'All Industries' : industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-2">Application</label>
                    <select
                      value={selectedApplication}
                      onChange={(e) => setSelectedApplication(e.target.value)}
                      className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      {applications.map(application => (
                        <option key={application} value={application}>
                          {application === 'all' ? 'All Applications' : application}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Success Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCaseStudies.slice(0, 2).map((caseStudy) => (
                <article key={caseStudy.id} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getIndustryColor(caseStudy.industry)}`}>
                      {caseStudy.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{caseStudy.roi.split(' ')[0]}</div>
                      <div className="text-sm text-gray-600">{caseStudy.roi.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-6">{caseStudy.summary}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {caseStudy.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-green-600">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="bg-white bg-opacity-60 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/learning/case-studies/${caseStudy.slug}`}>
                    <a className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all">
                      Read Full Case Study
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

        {/* All Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">All Case Studies</h2>
            
            {filteredCaseStudies.length > 0 ? (
              <div className="space-y-8">
                {filteredCaseStudies.map((caseStudy) => (
                  <article key={caseStudy.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getIndustryColor(caseStudy.industry)}`}>
                              {caseStudy.industry}
                            </span>
                            <span className="text-sm text-gray-500">{caseStudy.duration}</span>
                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {caseStudy.application}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">{caseStudy.title}</h3>
                          <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-xl font-bold text-green-600">{caseStudy.roi.split(' ')[0]}</div>
                          <div className="text-sm text-gray-600">{caseStudy.roi.split(' ').slice(1).join(' ')}</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-4 mb-6">
                        {caseStudy.results.slice(0, 4).map((result, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">{result.value}</div>
                            <div className="text-sm text-gray-600 font-medium">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <button
                            onClick={() => toggleExpanded(caseStudy.id)}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {expandedCase === caseStudy.id ? 'Show Less' : 'Show Details'}
                          </button>
                          <Link href={`/learning/case-studies/${caseStudy.slug}`}>
                            <a className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                              Full Case Study
                            </a>
                          </Link>
                        </div>
                      </div>
                      
                      {expandedCase === caseStudy.id && (
                        <div className="mt-8 pt-8 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-bold text-gray-800 mb-3">Challenge</h4>
                              <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>
                              
                              <h4 className="font-bold text-gray-800 mb-3">Solution</h4>
                              <p className="text-gray-600">{caseStudy.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-3">Key Learnings</h4>
                              <ul className="space-y-2">
                                {caseStudy.keyLearnings.map((learning, index) => (
                                  <li key={index} className="flex items-start text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    {learning}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No case studies found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedIndustry('all')
                    setSelectedApplication('all')
                  }}
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Industry Stats Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Implementation by Industry</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Government</h3>
                <p className="text-gray-600">Federal, state, and provincial forestry agencies implementing AI at scale</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Forest</h3>
                <p className="text-gray-600">Forest industry leaders driving ROI through AI innovation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Research</h3>
                <p className="text-gray-600">Academic institutions pioneering cutting-edge AI applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Conservation</h3>
                <p className="text-gray-600">Non-profits protecting forests through innovative AI monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl text-green-100 mb-8">
              Learn from these implementations and get expert guidance for your AI forestry project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <a className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Consulting Services
                </a>
              </Link>
              <Link href="/#contact">
                <a className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}