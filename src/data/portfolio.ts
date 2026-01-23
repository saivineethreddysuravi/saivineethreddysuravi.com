import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaBrain, FaRobot, FaDocker } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiScikitlearn, SiPytorch, SiTensorflow } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Enterprise Analytics Architect",
  email: "saivineethreddysuravi@gmail.com",
  phone: "901-930-8006",
  location: "Charlotte, NC (Open to Relocation)",
  summary: "Senior Data Analyst skilled in enterprise analytics and reporting. Built KPI frameworks and automated data pipelines, reducing metric disputes by 40% and saving costs. Designed Snowflake warehouses and Power BI dashboards for real-time insights. Ready to deliver impactful data solutions for business growth.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
    website: "https://vineeeth.com/"
  }
};

export const skills = [
  {
    category: "SQL & Data Engineering",
    items: [
      { name: "Advanced SQL", icon: FaDatabase, link: "#" },
      { name: "Snowflake", icon: SiSnowflake, link: "#" },
      { name: "Star Schema Design", icon: FaDatabase, link: "#" },
      { name: "ETL/ELT Pipelines", icon: FaDatabase, link: "#" },
      { name: "SQL Optimization", icon: FaDatabase, link: "#" },
      { name: "Data Governance", icon: FaDatabase, link: "#" },
    ]
  },
  {
    category: "Analytics & Experimentation",
    items: [
      { name: "A/B Testing", icon: FaChartLine, link: "#" },
      { name: "Experiment Design", icon: FaChartLine, link: "#" },
      { name: "Lift Analysis", icon: FaChartLine, link: "#" },
      { name: "KPI Frameworks", icon: FaChartBar, link: "#" },
      { name: "Cohort Analysis", icon: FaChartLine, link: "#" },
      { name: "Funnel Analysis", icon: FaChartLine, link: "#" },
      { name: "Hypothesis Testing", icon: FaBrain, link: "#" },
    ]
  },
  {
    category: "Tools & Programming",
    items: [
      { name: "Python (Pandas, NumPy)", icon: FaPython, link: "#" },
      { name: "Power BI (DAX, Power Query)", icon: FaChartBar, link: "#" },
      { name: "Tableau", icon: SiTableau, link: "#" },
      { name: "Excel (Power Query)", icon: FaFileExcel, link: "#" },
      { name: "Git/GitHub", icon: FaGithub, link: "#" },
      { name: "Jupyter Notebooks", icon: FaBrain, link: "#" },
    ]
  },
  {
    category: "Automation & AI Support",
    items: [
      { name: "Automation with Python", icon: FaPython, link: "#" },
      { name: "Data cleaning automation", icon: FaRobot, link: "#" },
      { name: "Data validation automation", icon: FaRobot, link: "#" },
      { name: "Analytics automation (reporting workflows)", icon: FaRobot, link: "#" },
    ]
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Senior Data Analyst",
    location: "Memphis, TN",
    period: "Aug 2025 – Present",
    description: [
      "Reduced metric disputes by 40% and improved leadership decision confidence by building a KPI governance framework across Finance, Operations, and HR.",
      "Designed and deployed a Snowflake warehouse supporting 3M+ monthly transactions; optimized SQL to reduce dashboard latency by 35% and enable near real-time monitoring.",
      "Improved reporting consistency by 40% by centralizing analytics in Power BI and implementing star-schema models for 50+ stakeholders.",
      "Built AI-assisted automation workflows to generate data-quality checks and reporting templates, reducing manual validation by 20% monthly and saving $50K+ annually.",
      "Owned analytics end-to-end - from data ingestion and modeling to dashboard delivery - enabling faster, data-driven decisions across product and operations.",
      "**Cloud Cost Optimization:** Conducted a rigorous audit of cloud compute usage, identifying and refactoring inefficient queries that reduced monthly Snowflake credits by 25%.",
      "**Strategic Stakeholder Management:** Acted as the primary bridge between technical teams and non-technical VPs, translating complex data limitations into clear strategic options.",
      "**Team Mentorship:** Led bi-weekly 'Code & Coffee' sessions to upskill 4 junior analysts in Python and Advanced SQL, fostering a culture of engineering excellence."
    ]
  },
  {
    company: "Qualcomm (Contract via Sodexo)",
    role: "Data Analyst – Finance & Analytics",
    location: "Hyderabad, IND",
    period: "Jul 2018 – Nov 2023",
    description: [
      "Automated global finance workflows using Python, reducing processing time by 2 analyst days/month and improving accuracy by 20%.",
      "Built executive Tableau dashboards consolidating global KPIs, reducing time-to-insight by 40% and accelerating leadership decision cycles.",
      "Developed SQL-based validation and reconciliation frameworks ensuring zero discrepancies across quarterly audits.",
      "Built a scalable compensation reporting engine (Python + SQL) supporting 5000+ employees annually with zero compliance incidents for 3 years.",
      "Reduced metric disputes by 30% by implementing data governance practices and mentoring junior analysts.",
      "Analyzed KPIs and ran experiments that drove a 10% increase in key product metrics and helped leadership prioritize successful initiatives."
    ]
  }
];

export const achievements = [
  "Reduced metric disputes by **40%** at StarTech Networks through KPI governance.",
  "Identified **$1.2M** in at-risk revenue via Enterprise Credit Risk Analytics.",
  "Contributed to **$2M+** in retained tuition revenue via Student Retention Intelligence Engine.",
  "Automated daily risk pipelines achieving **99.9%** accuracy and eliminating manual intervention.",
  "Reduced dashboard latency by **35%** by optimizing Snowflake warehouse SQL."
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "MS, Computer Information Systems (GPA: 3.88)",
    period: "Jan 2024 - Dec 2025"
  },
  {
    institution: "Narasimha Reddy Engineering College",
    location: "Hyderabad, IND",
    degree: "B.Tech, Computer Science",
    period: "Apr 2014 - May 2018"
  }
];

export const projects = [
  {
    title: "Enterprise Credit Risk Analytics",
    description: "Built a risk monitoring pipeline for 3M+ transactions, identifying $1.2M at-risk revenue.",
    technologies: ["PostgreSQL", "Advanced SQL", "Power BI", "Risk Modeling", "Python"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions face 'revenue leakage' from undetected delinquencies and manual reporting delays in high-volume credit portfolios.",
      solution: "Engineered an automated data pipeline and dashboarding system that monitors 3M+ transactions, providing real-time visibility into portfolio risk and customer behavior.",
      features: [
        "**Risk Detection:** Built a risk monitoring pipeline for 3M+ transactions, identifying $1.2M at-risk revenue.",
        "**Automated Pipelines:** Automated daily ingestion, validation, and reporting workflows using Python ETL, achieving 99.9% accuracy.",
        "**Executive Dashboards:** Created executive-ready dashboards to track risk trends, KPIs, and exception reporting.",
        "**False Positive Reduction:** Reduced false positive risk alerts by 20% through automated validation logic."
      ],
      impact: "Identified $1.2M in at-risk revenue and eliminated 15+ hours of manual weekly reconciliation.",
      future: [
        "**Real-time Scoring Engine:** Implement a microservice to flag risky transactions in milliseconds during authorization.",
        "**Graph Network Analysis:** Use Neo4j to detect complex fraud rings."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine",
    description: "Developed a retention analytics solution to identify at-risk students, contributing to $2M+ retained tuition revenue.",
    technologies: ["Docker", "Django", "Scikit-Learn", "Microservices", "PostgreSQL", "Explainable AI"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities lose 25-30% of revenue annually due to preventable student dropouts, often identifying at-risk students too late.",
      solution: "Developed a churn prediction pipeline and dashboard to support intervention strategies. Utilized Explainable AI to identify key drivers and guide targeted actions.",
      features: [
        "**Revenue Retention:** Developed a retention analytics solution to identify at-risk students, contributing to $2M+ retained tuition revenue.",
        "**Explainable AI:** Implemented driver analysis using explainable models (SHAP) to surface key factors influencing churn.",
        "**Targeted Intervention:** Guided targeted interventions by isolating key risk drivers.",
        "**Automated Reporting:** Built automated reporting to monitor retention KPIs and track improvement impact."
      ],
      impact: "Enabled early identification of at-risk students, potentially saving institutions $2M+ in annual lost tuition revenue.",
      future: [
        "**Kubernetes Orchestration:** Scale the application across a cluster for high availability.",
        "**Event-Driven Architecture:** Integrate with Kafka to ingest student behavior data in real-time."
      ]
    }
  },
  {
    title: "Predictive Sales & Inventory Forecasting",
    description: "Interactive forecasting engine combining Power BI visualization with Python-based time-series modeling (ARIMA) for supply chain optimization.",
    technologies: ["Power BI", "Python (ARIMA)", "DAX", "Predictive Analytics"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
    details: {
      problem: "Supply chain stakeholders lacked a unified view of sales performance and had no scientific capability to forecast future inventory needs.",
      solution: "Designed a hybrid forecasting engine that embeds Python-based ARIMA time-series models directly into Power BI.",
      features: [
        "**Probabilistic Forecasting:** Python integration predicts Q4 revenue with 85% confidence intervals.",
        "**Root Cause Analysis:** utilized Decomposition Trees to drill down into profit margins by region and product category.",
        "**Scenario Planning:** Dynamic parameters allow users to simulate 'What-If' scenarios.",
        "**Geospatial Intelligence:** Mapped sales distribution to identify underperforming territories."
      ],
      impact: "Enabled real-time tracking of sales revenue and provided the foresight needed to reduce inventory overstock by 15%.",
      future: [
        "**Customer Segmentation:** Use clustering techniques to identify high-value customer groups.",
        "**Row-Level Security (RLS):** Implement granular access control."
      ]
    }
  },
  {
    title: "Workforce Attrition Risk Analytics",
    description: "HR analytics platform utilizing survival analysis to predict employee turnover and identify flight risks.",
    technologies: ["Tableau", "Python", "Survival Analysis", "SQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard",
    details: {
      problem: "HR leadership noticed an uptick in employee turnover but couldn't pinpoint the specific departments or tenure milestones driving the attrition.",
      solution: "Built a Tableau dashboard tracking attrition rates. Augmented with a Python 'Survival Analysis' (Lifelines) model to determine the 'Danger Zone'.",
      features: [
        "Survival Analysis: Kaplan-Meier curves to visualize retention probability over time",
        "Attrition Rate Breakdown: By department and job role",
        "Demographic Profiling: Analysis of age, gender, and marital status on retention",
        "Sentiment Correlation: Mapping exit survey scores to tenure length"
      ],
      impact: "Identified 'Sales' department as having the highest turnover due to low satisfaction. Initiated a retention program that reduced attrition by 10% in Q3.",
      future: [
        "Predictive Modeling: Integrate a logistic regression model to forecast attrition risk.",
        "Sentiment Analysis: Incorporate text analysis from employee exit surveys."
      ]
    }
  },
  {
    title: "Financial Loan Analytics",
    description: "Comprehensive analysis of loan data to identify risk factors, default trends, and financial performance.",
    technologies: ["SQL", "Excel", "Data Analysis", "Power BI"],
    githubUrl: "https://github.com/saivineethreddysuravi/financial-loan-analytics",
    details: {
      problem: "High default rates on personal loans were affecting the bank's profitability, with no clear understanding of the contributing factors.",
      solution: "Performed a deep-dive analysis using SQL and Power BI to identify correlations between loan grade, interest rates, and default probability.",
      features: [
        "Loan grade risk assessment (Good vs. Bad Loans)",
        "Default trend analysis over time (Month-over-Month)",
        "Borrower demographic profiling by employment length and home ownership",
        "Geographic heatmaps showing loan distribution across states"
      ],
      impact: "Revealed that lower-grade loans had significantly higher default rates. Recommendations led to stricter lending criteria.",
      future: [
        "Credit Scoring Model: Develop a custom credit scoring algorithm.",
        "Automated Reporting: Set up SQL stored procedures to automate the monthly data refresh pipeline."
      ]
    }
  },
  {
    title: "Market Opportunity & Consumer Behavior Analysis",
    description: "Strategic market consulting analysis identifying 'Blue Ocean' dining opportunities using statistical segmentation and Power BI.",
    technologies: ["Power BI", "Statistical Analysis", "Market Strategy", "Data Storytelling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "New market entrants faced high failure rates due to a lack of understanding of local consumer demographics.",
      solution: "Conducted a rigorous statistical analysis of 10,000+ consumer data points. Built an interactive Power BI dashboard ecosystem to visualize supply-demand gaps.",
      features: [
        "Market Gap Analysis: Identified 'Premium Non-Alcoholic' dining as a massive underserved market",
        "Price Sensitivity Modeling: Discovered 100% correlation between high pricing and parking availability",
        "Geospatial Intelligence: Mapped 'Blue Ocean' zones like Jiutepec for low-competition entry",
        "Consumer Persona Segmentation: Detailed analysis of 'Social Drinker' spending vs. satisfaction"
      ],
      impact: "Revealed a strategic opportunity for high-margin 'Dry' premium restaurants. Findings suggest a 100% non-smoking, wellness-focused brand would capture the Jiutepec market instantly.",
      future: [
        "Predictive Site Selection: Build a regression model to score potential real estate locations.",
        "Competitor Scraping: Automate competitor menu pricing analysis using Python."
      ]
    }
  },
  {
    title: "Biometric Identity Verification Service",
    description: "Enterprise-grade face recognition API (FastAPI + OpenCV) deployed as a Docker microservice.",
    technologies: ["FastAPI", "Docker", "OpenCV", "Python", "Rest API"],
    githubUrl: "https://github.com/saivineethreddysuravi/smart-attendance-system",
    details: {
      problem: "Legacy manual attendance systems were prone to 'buddy punching' fraud and high administrative overhead.",
      solution: "Engineered a contactless, secure Biometric API using FastAPI and Computer Vision. Replaced fragile local scripts with a robust microservice architecture.",
      features: [
        "Microservice Architecture: Decoupled API layer from matching engine",
        "High-Speed Matching: Optimized LBPH algorithm for <200ms verification",
        "Containerization: Fully Dockerized for easy deployment to AWS/Azure",
        "Security: Input validation and confidence thresholding to prevent spoofing"
      ],
      impact: "Eliminated identity fraud potential and reduced check-in times by 90%. Architecture is ready for scale.",
      future: [
        "Liveness Detection: Implement blink/smile detection.",
        "Vector Database: Migrate to Pinecone/Milvus for million-scale user indexing."
      ]
    }
  },
  {
    title: "Growth Outreach Automation Platform",
    description: "Cross-platform Python automation engine for high-volume, personalized cold email outreach.",
    technologies: ["Python", "SMTP", "Pandas", "Automation"],
    githubUrl: "https://github.com/saivineethreddysuravi/growth-outreach-platform",
    details: {
      problem: "Manual cold emailing is unscalable, and existing tools were platform-dependent or expensive.",
      solution: "Developed a pure Python automation suite that handles bulk personalization, SMTP connection pooling, and smart rate-limiting.",
      features: [
        "Cross-Platform: Runs on Windows, macOS, and Linux",
        "Dynamic Personalization: Jinja2-style templating for unique message generation",
        "Rate Limiting: Intelligent jitter algorithms to mimic human behavior",
        "A/B Testing: Support for testing multiple subject lines"
      ],
      impact: "Increased outreach capacity by 20x (to 400/day) while maintaining high deliverability. Directly contributed to a 3x increase in interview response rates.",
      future: [
        "Dashboard UI: Build a React frontend to visualize open rates and reply rates.",
        "AI Writing: Integrate OpenAI API to auto-generate personalized opening lines."
      ]
    }
  },
  {
    title: "Hotel Revenue Intelligence & Cancellation Prediction",
    description: "ML-driven revenue management system identifying high-risk cancellations to mitigate revenue leakage.",
    technologies: ["Python", "Scikit-Learn", "EDA", "Revenue Management"],
    githubUrl: "https://github.com/saivineethreddysuravi/hotel-booking-analysis",
    details: {
      problem: "The hotel experienced a 37% cancellation rate, leading to unpredictable occupancy and significant lost revenue.",
      solution: "Developed a Logistic Regression model to score booking risk in real-time. Conducted deep EDA to identify lead-time thresholds and deposit-type correlations.",
      features: [
        "Risk Scoring: Probability estimation for every incoming booking",
        "Lead Time Analysis: Discovered 2x risk multiplier for bookings >90 days out",
        "Policy Optimization: Data-backed recommendations for non-refundable deposit segments",
        "Feature Importance: Identifying 'Special Requests' as a key retention indicator"
      ],
      impact: "Proposed a targeted deposit policy for high-risk segments, protecting an estimated $150k in annual at-risk revenue.",
      future: [
        "Real-time Dashboard: Build a live monitoring view for front-desk staff.",
        "Dynamic Pricing: Integrate cancellation risk into a RevPAR optimization algorithm."
      ]
    }
  },
  {
    title: "Snake AI: Reinforcement Learning Research Environment",
    description: "Deep Reinforcement Learning simulation environment for training DQN agents in competitive spatial navigation.",
    technologies: ["Python", "Reinforcement Learning", "Deep Q-Learning", "Pygame"],
    githubUrl: "https://github.com/saivineethreddysuravi/snake-game",
    details: {
      problem: "Classic games often lack the state-space complexity required to demonstrate advanced AI concepts like reward engineering.",
      solution: "Transformed a standard Snake game into an RL research environment. Engineered an 11-dimensional state vector and implemented a Deep Q-Network (DQN).",
      features: [
        "Reward Engineering: Multi-tier feedback loops for survival and objective completion",
        "Experience Replay: Training on non-sequential memory buffers",
        "Epsilon-Greedy Strategy: Balancing model exploration with learned exploitation",
        "Vectorized State Representation: Mapping environmental danger to neural network inputs"
      ],
      impact: "Demonstrates proficiency in advanced AI concepts beyond standard supervised learning.",
      future: [
        "Multi-Agent Training: Introduce a second snake to study competitive RL dynamics.",
        "Policy Gradients: Implement PPO or A3C algorithms."
      ]
    }
  }
];
