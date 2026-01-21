import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaBrain, FaRobot, FaDocker, FaGlobe } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiScikitlearn, SiPytorch, SiTensorflow } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Enterprise Analytics Architect",
  email: "saivineethreddysuravi@gmail.com",
  phone: "901-930-8006",
  location: "Charlotte, NC (Open to Relocation)",
  summary: "Senior Data Analyst with 6+ years of delivering enterprise analytics solutions that have protected $2M+ in revenue, reduced operational costs, and accelerated executive decision-making. Specialized in Snowflake data warehousing, SQL optimization, Python automation, and Power BI architecture. Proven track record of owning analytics roadmaps, mentoring teams, and bridging technical execution with executive strategy to drive measurable business outcomes.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
    website: "https://vineeeth.com/"
  }
};

export const skills = [
  {
    category: "Analytics & AI",
    items: [
      { name: "Predictive Modeling (ARIMA, Random Forest)", icon: FaBrain, link: "#" },
      { name: "Generative AI for Automation", icon: FaRobot, link: "#" },
      { name: "Explainable AI (XAI / SHAP)", icon: FaBrain, link: "#" },
      { name: "A/B Testing", icon: FaChartLine, link: "#" },
    ]
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "SQL (Advanced Window Functions, CTEs)", icon: FaDatabase, link: "#" },
      { name: "Python (Pandas, NumPy, Scikit-Learn)", icon: FaPython, link: "#" },
      { name: "Power BI (DAX, M Query, RLS)", icon: FaChartBar, link: "#" },
      { name: "Tableau", icon: SiTableau, link: "#" },
      { name: "Excel (Power Query)", icon: FaFileExcel, link: "#" },
    ]
  },
  {
    category: "Data Engineering",
    items: [
      { name: "Snowflake Architecture", icon: SiSnowflake, link: "#" },
      { name: "ETL/ELT Pipeline Orchestration", icon: FaDatabase, link: "#" },
      { name: "Star Schema & Dimensional Modeling", icon: FaDatabase, link: "#" },
      { name: "SQL Query Optimization", icon: FaDatabase, link: "#" },
      { name: "Docker", icon: FaDocker, link: "#" },
      { name: "Git/GitHub", icon: FaGithub, link: "#" },
    ]
  },
  {
    category: "Business Domains",
    items: [
      { name: "Financial Risk Analytics", icon: FaChartLine, link: "#" },
      { name: "Workforce & Payroll Analytics", icon: FaChartBar, link: "#" },
      { name: "Operational Strategy", icon: FaChartLine, link: "#" },
      { name: "Executive Reporting", icon: FaTable, link: "#" },
    ]
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Senior Data Analyst – Enterprise Analytics",
    location: "Memphis, TN",
    period: "Aug 2025 – Present",
    description: [
      "**Analytics Roadmap Ownership:** Owned the Enterprise Analytics Roadmap, prioritizing data initiatives across Operations, Finance, and HR to align technical deliverables with strategic business goals.",
      "**Enterprise Data Architecture:** Designed and deployed a scalable Snowflake data warehouse supporting 3M+ transaction records, leveraging advanced SQL to reduce dashboard latency by 35%, enabling near real-time executive reporting.",
      "**Power BI Transformation:** Led migration to a centralized Power BI analytics platform for 50+ senior stakeholders, implementing star-schema models that reduced cross-departmental reporting discrepancies by 40%.",
      "**AI-Driven Automation:** Built Python-based ETL pipelines with AI-driven anomaly detection, unlocking $50K+ in annualized productivity gains by eliminating 30+ hours/month of manual data preparation.",
      "**Operational Consulting:** Partnered with cross-functional teams (Ops, IT, Finance) to analyze workforce utilization, uncovering inefficiencies that improved operational capacity by 20%."
    ]
  },
  {
    company: "TEK Leaders Pvt. Ltd.",
    role: "Senior Data Analyst",
    location: "Hyderabad, IND",
    period: "Jun 2020 – Nov 2023",
    description: [
      "**Predictive Cost Reduction:** Conducted advanced cohort analysis using machine learning (Random Forest), identifying key cost drivers and enabling leadership to reduce annual operational expenses by 15%.",
      "**Compliance Engine:** Built a fully automated compensation reporting engine using Python/SQL, supporting Fortune 500 clients with zero compliance incidents over a 3-year period.",
      "**BI Administration:** Owned enterprise Power BI tenant administration, resolving RLS and access issues to maintain 99.9% uptime for critical dashboards used by 50+ executives.",
      "**Mentorship & Governance:** Mentored 3 junior analysts on SQL best practices and data governance, establishing a 'Single Source of Truth' that reduced metric disputes by 30%."
    ]
  },
  {
    company: "Qualcomm India Pvt. Ltd.",
    role: "Data Analyst",
    location: "Hyderabad, IND",
    period: "Jan 2018 – Feb 2020",
    description: [
      "**Automation:** Automated monthly financial audit workflows using Python, reclaiming 2 analyst days per month and improving reporting accuracy by 20%.",
      "**Visualization:** Designed executive-level Tableau dashboards consolidating global finance data, reducing time-to-insight by 40% and enabling faster regional decision-making.",
      "**Integrity:** Collaborated with global finance teams to develop automated SQL validation scripts, ensuring zero data discrepancies during quarterly audits."
    ]
  }
];

export const achievements = [
  "Reduced report generation time by **35%** at StarTech Networks through optimized Snowflake architecture.",
  "Protected **$2M+ in revenue** through advanced risk analytics and churn prediction models.",
  "Unlocked **$50K+ in productivity** via AI-driven Python automation.",
  "Maintained **99.9% uptime** for enterprise Power BI dashboards serving 50+ executives.",
  "Mentored **3 junior analysts**, improving team code quality and reducing metric disputes by 30%."
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "Master of Science, Management Information Systems",
    period: "Dec 2025"
  },
  {
    institution: "Narasimha Reddy Engineering College",
    location: "Hyderabad, IND",
    degree: "Bachelor of Technology, Computer Science Engineering",
    period: "Jun 2017"
  }
];

export const projects = [
  {
    title: "Enterprise Credit Risk Analytics",
    description: "Built a scalable risk detection model on 3M+ financial transactions, identifying $1.2M in at-risk revenue using advanced SQL analytics.",
    technologies: ["SQL", "Snowflake", "Python", "Power BI"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "The institution faced rising delinquency rates and unclear customer profitability metrics on a massive dataset.",
      solution: "Engineered a scalable ETL pipeline in Snowflake to centralize 3M+ transaction records. Developed advanced SQL algorithms (Window Functions) to detect utilization spikes.",
      features: [
        "Revenue Protection: Identified $1.2M in at-risk revenue",
        "Automated Pipelines: Python ETL workflows for 99.9% accurate reporting",
        "Risk Segmentation: 30-day moving average utilization spikes",
        "Cohort Analysis: Tracked customer spending retention month-over-month"
      ],
      impact: "Identified a 15% high-risk segment and proposed a targeted retention strategy. Optimized marketing spend by shifting focus to high-ROI cardholders.",
      future: [
        "Real-time Scoring Engine: Implement a microservice to flag risky transactions in milliseconds.",
        "Graph Database: Use Neo4j to detect fraud rings."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine",
    description: "Deployed a machine learning churn prediction microservice (Docker, Scikit-Learn) achieving 89% accuracy in identifying at-risk students.",
    technologies: ["Python", "ML", "Docker", "Explainable AI"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities lose revenue due to preventable student dropouts, often identifying at-risk students too late.",
      solution: "Built an enterprise-grade ML microservice containerized with Docker. Refactored code into a Service-Layer architecture for <100ms inference.",
      features: [
        "AI Microservice: Churn prediction with 89% accuracy",
        "Explainable AI (XAI): Surface actionable drivers of attrition",
        "Scalable Architecture: Service-based design for real-time use",
        "Docker Containerization: 'Build Once, Run Anywhere'"
      ],
      impact: "Enables early identification of at-risk students, potentially saving $2M+ in annual lost tuition revenue.",
      future: [
        "Kubernetes Orchestration: Scale across a cluster.",
        "Real-time SIS Integration: Event-driven architecture."
      ]
    }
  },
  {
    title: "Predictive Sales & Inventory Forecasting",
    description: "Built a hybrid forecasting solution combining ARIMA models with interactive Power BI dashboards, achieving 85% forecast confidence.",
    technologies: ["Python (ARIMA)", "Power BI", "Predictive Analytics"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
    details: {
      problem: "Stakeholders lacked a unified view of sales performance and capability to forecast inventory needs.",
      solution: "Engineered a hybrid forecasting engine combining Power BI for visualization and Python (ARIMA) for prediction.",
      features: [
        "Forecast Confidence: 85% confidence for quarterly revenue",
        "Inventory Optimization: Enabled 15% reduction in overstock",
        "Decomposition Tree: Root-cause profit analysis",
        "Dynamic Slicers: Year, Region, and Segment filtering"
      ],
      impact: "Enabled real-time tracking of sales revenue and significantly reduced inventory costs through better planning.",
      future: [
        "Customer Segmentation: Use clustering techniques (K-Means).",
        "Row-Level Security (RLS): Add role-based access."
      ]
    }
  },
  {
    title: "Workforce Attrition Risk Analytics",
    description: "HR analytics platform utilizing survival analysis to predict employee turnover and identify flight risks.",
    technologies: ["Tableau", "Python", "Survival Analysis", "SQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard",
    details: {
      problem: "HR leadership noticed an uptick in employee turnover but couldn't pinpoint the specific departments or tenure milestones.",
      solution: "Built a Tableau dashboard tracking attrition rates. Augmented with a Python 'Survival Analysis' (Lifelines) model.",
      features: [
        "Survival Analysis: Kaplan-Meier curves for retention probability",
        "Attrition Rate Breakdown: By department and job role",
        "Demographic Profiling: Analysis of age, gender, and marital status",
        "Sentiment Correlation: Mapping exit survey scores to tenure length"
      ],
      impact: "Identified 'Sales' department as having the highest turnover due to low satisfaction. Initiated a retention program that reduced attrition by 10%.",
      future: [
        "Predictive Modeling: Logistic regression model for attrition risk.",
        "Sentiment Analysis: NLP on exit surveys."
      ]
    }
  },
  {
    title: "Financial Loan Analytics",
    description: "Comprehensive analysis of loan data to identify risk factors, default trends, and financial performance.",
    technologies: ["SQL", "Excel", "Data Analysis", "Power BI"],
    githubUrl: "https://github.com/saivineethreddysuravi/financial-loan-analytics",
    details: {
      problem: "High default rates on personal loans were affecting the bank's profitability.",
      solution: "Performed a deep-dive analysis using SQL and Power BI to identify correlations between loan grade, interest rates, and default probability.",
      features: [
        "Loan grade risk assessment (Good vs. Bad Loans)",
        "Default trend analysis over time",
        "Borrower demographic profiling",
        "Geographic heatmaps"
      ],
      impact: "Revealed that lower-grade loans had significantly higher default rates. Recommendations led to stricter lending criteria.",
      future: [
        "Credit Scoring Model: Custom credit scoring algorithm.",
        "Automated Reporting: SQL stored procedures."
      ]
    }
  },
  {
    title: "Market Opportunity & Consumer Behavior Analysis",
    description: "Strategic market consulting analysis identifying 'Blue Ocean' dining opportunities using statistical segmentation.",
    technologies: ["Power BI", "Statistical Analysis", "Market Strategy", "Data Storytelling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "New market entrants faced high failure rates due to a lack of understanding of local consumer demographics.",
      solution: "Conducted a rigorous statistical analysis of 10,000+ consumer data points. Built an interactive Power BI dashboard.",
      features: [
        "Market Gap Analysis: Identified 'Premium Non-Alcoholic' dining gap",
        "Price Sensitivity Modeling: Correlation between pricing and parking",
        "Geospatial Intelligence: Mapped 'Blue Ocean' zones",
        "Consumer Persona Segmentation: 'Social Drinker' spending vs. satisfaction"
      ],
      impact: "Revealed a strategic opportunity for high-margin 'Dry' premium restaurants.",
      future: [
        "Predictive Site Selection: Regression model.",
        "Competitor Scraping: Python (BeautifulSoup)."
      ]
    }
  },
  {
    title: "Biometric Identity Verification Service",
    description: "Enterprise-grade face recognition API (FastAPI + OpenCV) deployed as a Docker microservice.",
    technologies: ["FastAPI", "Docker", "OpenCV", "Python", "Rest API"],
    githubUrl: "https://github.com/saivineethreddysuravi/smart-attendance-system",
    details: {
      problem: "Legacy manual attendance systems were prone to 'buddy punching' fraud.",
      solution: "Engineered a contactless, secure Biometric API using FastAPI and Computer Vision.",
      features: [
        "Microservice Architecture: Decoupled API layer",
        "High-Speed Matching: Optimized LBPH algorithm",
        "Containerization: Fully Dockerized",
        "Security: Input validation"
      ],
      impact: "Eliminated identity fraud potential and reduced check-in times by 90%.",
      future: [
        "Liveness Detection: Prevent photo-spoofing.",
        "Vector Database: Migrate to Pinecone/Milvus."
      ]
    }
  },
  {
    title: "Growth Outreach Automation Platform",
    description: "Cross-platform Python automation engine for high-volume, personalized cold email outreach.",
    technologies: ["Python", "SMTP", "Pandas", "Automation"],
    githubUrl: "https://github.com/saivineethreddysuravi/growth-outreach-platform",
    details: {
      problem: "Manual cold emailing is unscalable and existing tools were platform-dependent.",
      solution: "Developed a pure Python automation suite that handles bulk personalization, SMTP connection pooling, and smart rate-limiting to avoid spam filters.",
      features: [
        "Cross-Platform: Windows, macOS, Linux",
        "Dynamic Personalization: Jinja2-style templating",
        "Rate Limiting: Intelligent jitter algorithms",
        "A/B Testing: Support for multiple subject lines"
      ],
      impact: "Increased outreach capacity by 20x (to 400/day). Contributed to a 3x increase in interview response rates.",
      future: [
        "Dashboard UI: React frontend.",
        "AI Writing: Integrate OpenAI API."
      ]
    }
  },
  {
    title: "Hotel Revenue Intelligence & Cancellation Prediction",
    description: "ML-driven revenue management system identifying high-risk cancellations to mitigate revenue leakage.",
    technologies: ["Python", "Scikit-Learn", "EDA", "Revenue Management"],
    githubUrl: "https://github.com/saivineethreddysuravi/hotel-booking-analysis",
    details: {
      problem: "The hotel experienced a 37% cancellation rate, leading to unpredictable occupancy.",
      solution: "Developed a Logistic Regression model to score booking risk in real-time.",
      features: [
        "Risk Scoring: Probability estimation",
        "Lead Time Analysis: Risk multiplier for bookings >90 days",
        "Policy Optimization: Recommendations for non-refundable deposits",
        "Feature Importance: 'Special Requests' as key indicator"
      ],
      impact: "Proposed a targeted deposit policy for high-risk segments, protecting $150k in annual at-risk revenue.",
      future: [
        "Real-time Dashboard: Live monitoring.",
        "Dynamic Pricing: RevPAR optimization."
      ]
    }
  },
  {
    title: "Snake AI: Reinforcement Learning Research Environment",
    description: "Deep Reinforcement Learning simulation environment for training DQN agents in competitive spatial navigation.",
    technologies: ["Python", "Reinforcement Learning", "Deep Q-Learning", "Pygame"],
    githubUrl: "https://github.com/saivineethreddysuravi/snake-game",
    details: {
      problem: "Classic games often lack the state-space complexity required to demonstrate advanced AI concepts.",
      solution: "Transformed a standard Snake game into an RL research environment. Implemented a Deep Q-Network (DQN).",
      features: [
        "Reward Engineering: Multi-tier feedback loops",
        "Experience Replay: Training on non-sequential memory",
        "Epsilon-Greedy Strategy: Exploration vs. exploitation",
        "Vectorized State Representation: Neural network inputs"
      ],
      impact: "Demonstrates proficiency in advanced AI concepts beyond standard supervised learning.",
      future: [
        "Multi-Agent Training: Competitive RL dynamics.",
        "Policy Gradients: PPO or A3C algorithms."
      ]
    }
  }
];