import Head from 'next/head';
import styles from '../styles/Prompts.module.css';

export default function Prompts() {
  const promptCategories = [
    {
      title: "Forestry & Land Management",
      prompts: [
        {
          name: "Forest Inventory Analysis",
          description: "Generate comprehensive forest stand analysis from field data",
          prompt: "Analyze this forest inventory data and provide: 1) Stand composition breakdown, 2) Volume estimates by species, 3) Recommended management actions, 4) Biodiversity assessment. Data: [INSERT DATA]"
        },
        {
          name: "Silvicultural Prescription",
          description: "Create detailed silvicultural prescriptions for forest management",
          prompt: "Based on this stand data: [SITE CONDITIONS, SPECIES MIX, AGE], create a 20-year silvicultural prescription including: timing of treatments, expected outcomes, ecological considerations, and economic projections."
        }
      ]
    },
    {
      title: "AI & Data Science",
      prompts: [
        {
          name: "Model Performance Review",
          description: "Comprehensive analysis of ML model performance",
          prompt: "Review this model's performance metrics and provide: 1) Strengths and weaknesses, 2) Potential bias issues, 3) Improvement recommendations, 4) Real-world deployment considerations. Metrics: [INSERT METRICS]"
        },
        {
          name: "Dataset Quality Assessment",
          description: "Evaluate data quality for machine learning projects",
          prompt: "Assess this dataset for ML readiness: 1) Data completeness and quality, 2) Feature relevance and engineering needs, 3) Potential bias sources, 4) Recommended preprocessing steps. Dataset info: [INSERT INFO]"
        }
      ]
    },
    {
      title: "Engineering Solutions",
      prompts: [
        {
          name: "Technical Documentation",
          description: "Create clear technical documentation for complex systems",
          prompt: "Document this technical system for both technical and non-technical stakeholders: 1) System overview, 2) Key components and interactions, 3) User workflows, 4) Troubleshooting guide. System: [DESCRIBE SYSTEM]"
        },
        {
          name: "Problem-Solution Framework",
          description: "Structure complex problem-solving approaches",
          prompt: "Break down this complex problem using: 1) Problem definition and scope, 2) Root cause analysis, 3) Solution alternatives with pros/cons, 4) Implementation roadmap. Problem: [DESCRIBE PROBLEM]"
        }
      ]
    }
  ];

  return (
    <div>
      <Head>
        <title>AI Prompt Library - AI Forester</title>
        <meta name="description" content="Professional-grade AI prompts for forestry, engineering, and data science workflows. Tested templates for real-world applications." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>AI Prompt Library</h1>
            <p className={styles.subtitle}>
              Battle-tested prompts for forestry, engineering, and data science workflows. 
              Copy, customize, and deploy these templates in your own projects.
            </p>
          </div>

          {promptCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.promptGrid}>
                {category.prompts.map((prompt, promptIndex) => (
                  <div key={promptIndex} className={styles.promptCard}>
                    <div className={styles.cardHeader}>
                      <h3>{prompt.name}</h3>
                      <button 
                        className={styles.copyButton}
                        onClick={() => navigator.clipboard.writeText(prompt.prompt)}
                        title="Copy prompt to clipboard"
                      >
                        📋
                      </button>
                    </div>
                    <p className={styles.description}>{prompt.description}</p>
                    <div className={styles.promptPreview}>
                      <code>{prompt.prompt}</code>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className={styles.footer}>
            <p>
              <strong>How to use:</strong> Copy any prompt, replace bracketed placeholders with your specific data, 
              and paste into your preferred AI tool (ChatGPT, Claude, etc.). 
            </p>
            <p>
              Need custom prompts for your specific use case? <a href="mailto:contact@aiforester.com">Let's talk</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}