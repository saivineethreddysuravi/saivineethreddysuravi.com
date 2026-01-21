import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Data Analyst | Business Intelligence Specialist",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Memphis, TN, USA",
  summary: "Data Analyst with 4+ years of experience bridging the gap between technical data engineering and business decision-making. I specialize in turning messy operational data into clear, actionable reporting using SQL, Python, and Power BI. My background spans finance, payroll, and workforce analytics in both India and the U.S., where I have consistently automated manual workflows and delivered dashboards that drive strategic cost management and operational efficiency.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
  {
    category: "Data Analysis & Engineering",
    items: [
      { name: "SQL (Joins, CTEs)", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "Python (Pandas, NumPy)", icon: FaPython, link: "https://github.com/saivineethreddysuravi/restaurant-market-insights" },
      { name: "Snowflake", icon: SiSnowflake, link: "https://github.com/saivineethreddysuravi" },
      { name: "ETL Pipelines", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/streamflow-analysis" },
    ]
  },
  {
    category: "Business Intelligence",
    items: [
      { name: "Power BI (DAX, RLS)", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/sales-performance-dashboard" },
      { name: "Tableau", icon: SiTableau, link: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard" },
      { name: "Data Storytelling", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "KPI Reporting", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/sales-performance-dashboard" },
    ]
  },
  {
    category: "Business Domains",
    items: [
      { name: "Financial Reporting", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "Workforce Analytics", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard" },
      { name: "Payroll Operations", icon: FaFileExcel, link: "https://github.com/saivineethreddysuravi" },
      { name: "Risk Analysis", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Excel (Power Query)", icon: FaFileExcel, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "Git / GitHub", icon: FaGithub, link: "https://github.com/saivineethreddysuravi" },
      { name: "Confluence", icon: FaTable, link: "https://github.com/saivineethreddysuravi" },
    ]
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Data Analyst Intern",
    location: "Memphis, TN, USA",
    period: "May 2025 - Dec 2025",
    description: [
      "**Ownership:** Owned end-to-end BI delivery including data extraction from Snowflake, SQL-based ELT workflows, Power BI data modeling, DAX development, dashboard deployment, and stakeholder feedback cycles.",
      "**Visualization:** Designed and delivered interactive Power BI dashboards to track operational, workforce, and productivity KPIs, improving reporting visibility for managers and leadership teams.",
      "**Optimization:** Extracted, transformed, and validated data from Snowflake enterprise data warehouses using advanced SQL (joins, CTEs, window functions), reducing report generation time by approximately 40%.",
      "**Modeling:** Developed DAX measures and Power BI data models to standardize KPIs, enable trend analysis, and improve reporting consistency across departments.",
      "**Automation:** Automated recurring Excel and Python (pandas) workflows to reduce manual reporting effort and minimize data quality issues.",
      "**Strategy:** Collaborated closely with operations and management teams to identify and define reporting requirements, then developed scalable BI solutions that improved data accuracy, reduced reporting time, and empowered leadership to make faster, more informed business decisions that positively impacted overall company performance.",
      "**Cross-functional:** Supported cross-team initiatives by delivering actionable insights that improved scheduling efficiency, workforce visibility, and operational decision-making."
    ]
  },
  {
    company: "TEK Leaders Pvt. Ltd.",
    role: "Data Analyst",
    location: "Hyderabad, India",
    period: "Jun 2020 - Jun 2022",
    description: [
      "**Analysis:** Analyzed payroll, HR, and financial datasets using SQL, Snowflake, Python, and Excel to support accurate workforce and compensation reporting.",
      "**Reporting:** Designed and maintained Power BI dashboards for leadership, providing visibility into payroll trends, utilization metrics, and operational KPIs.",
      "**Consistency:** Built reusable DAX calculations and standardized data models to improve KPI consistency and reporting performance across business units.",
      "**Efficiency:** Led payroll, HR, and financial analytics initiatives through automation and optimized SQL queries, reducing manual effort and turnaround time.",
      "**Insights:** Conducted trend analysis and cohort-based reporting to identify workforce patterns, cost drivers, and operational improvement opportunities.",
      "**Planning:** Collaborated closely with HR and Finance teams to deliver weekly insights that informed payroll decisions, budgeting, and workforce planning.",
      "**Documentation:** Documented data sources, business logic, and reporting definitions to support transparency, audit readiness, and long-term maintainability."
    ]
  },
  {
    company: "Qualcomm India Pvt. Ltd.",
    role: "Jr Data Analyst",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "**Management:** Managed and analyzed large payroll and financial datasets to identify inefficiencies and cost-saving opportunities, optimize workforce planning accuracy, and deliver timely, compliant reports that directly informed high-impact business decisions.",
      "**Dashboards:** Designed Tableau dashboards that enabled leaders to quickly understand financial performance, headcount metrics, and operational trends, leading to more effective decisions and improved business results.",
      "**Compliance:** Ensured the accuracy and completeness of SEC and internal compliance reports by carefully reconciling financial data and maintaining thorough documentation, which strengthened financial controls, reduced the risk of reporting errors, and supported consistent success during audits.",
      "**Process Improvement:** Partnered with Finance, HR, and Operations teams to redesign payroll reporting by streamlining data workflows, automating error checks, and introducing best practices, achieving a 20% increase in accuracy and a 30% reduction in processing time.",
      "**Strategy:** Delivered actionable insights that directly increased budgeting accuracy, lowered operational costs, and enabled more effective workforce planning for executives."
    ]
  }
];

export const achievements = [
  "Reduced report generation time by approximately **40%** at StarTech Networks through optimized SQL and Snowflake data management.",
  "Achieved a **20% increase in accuracy** and **30% reduction in processing time** for payroll reporting at Qualcomm.",
  "Achieved **89% prediction accuracy** in student dropout prediction using Random Forest models.",
  "Identified 'Sales' department turnover issues leading to a **10% reduction in attrition** via a retention program.",
  "Maintained a **3.88 GPA** during Master of Science in Management Information Systems."
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "Master of Science, Management Information Systems (GPA: 3.88)",
    period: "Jan 2024 - Dec 2025"
  },
  {
    institution: "Narasimha Reddy Engineering College",
    location: "Hyderabad, IND",
    degree: "Bachelor of Technology, Computer Science Engineering",
    period: "Apr 2014 - Jun 2017"
  }
];

export const projects = [
  {
    title: "Predictive Sales Intelligence Dashboard",
    description: "Interactive forecasting engine combining Power BI visualization with Python-based time-series modeling (ARIMA).",
    technologies: ["Power BI", "Python", "DAX", "Predictive Analytics"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
    details: {
      problem: "Stakeholders lacked a unified view of sales performance and had no capability to forecast future inventory needs.",
      solution: "Designed an interactive Power BI dashboard consolidating sales metrics. Integrated a Python script running an ARIMA model to forecast sales trends for the upcoming quarter with 85% confidence.",
      features: [
        "Time-Series Forecasting: Python integration to predict Q4 revenue",
        "Decomposition Tree: Root-cause profit analysis",
        "Dynamic Slicers: Year, Region, and Segment filtering",
        "Geospatial Mapping: Sales distribution visualization"
      ],
      impact: "Enabled real-time tracking of $2M+ in sales revenue. Forecast accuracy helped reduce inventory overstock by 15% in Q3.",
      future: [
        "Customer Segmentation: Use clustering techniques (K-Means) to identify high-value customer groups (RFM Analysis).",
        "Row-Level Security (RLS): Add role-based access for regional managers."
      ]
    }
  },
  {
    title: "Enterprise Credit Risk & Portfolio Health Analytics",
    description: "End-to-end FinTech risk platform using advanced SQL window functions and cohort analysis to identify $1.2M in at-risk revenue.",
    technologies: ["PostgreSQL", "Advanced SQL", "Power BI", "Risk Modeling"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "The institution faced rising delinquency rates and unclear customer profitability metrics, leading to inefficient capital allocation and a lack of targeted retention strategies.",
      solution: "Engineered a scalable ETL pipeline and normalized data warehouse to centralize 100k+ transaction records. Developed advanced SQL algorithms (Window Functions, CTEs) to detect utilization spikes and segment customers by 'Net Profitability'.",
      features: [
        "Risk Segmentation: Identified high-risk clusters using 30-day moving average utilization spikes",
        "Cohort Analysis: Tracked customer spending retention month-over-month to identify churn drivers",
        "Revenue Intelligence: Calculated 'Share of Wallet' and acquisition efficiency to optimize marketing spend",
        "Rolling Metrics: Implemented 30-Day volatility tracking for proactive credit limit adjustments"
      ],
      impact: "Identified a 15% high-risk segment and proposed a targeted retention strategy for high-CLV cohorts, potentially recovering $1.2M in annual revenue. Optimized marketing spend by shifting focus to high-ROI 'Silver' cardholders.",
      future: [
        "Real-time Scoring: Implement a real-time scoring engine to flag transactions in milliseconds.",
        "Graph Database: Use Neo4j to detect fraud rings and complex relationship networks.",
        "API Integration: Expose risk scores via a REST API for integration with the core banking system."
      ]
    }
  },
  {
    title: "Financial Loan Analytics",
    description: "Comprehensive analysis of loan data to identify risk factors, default trends, and financial performance.",
    technologies: ["SQL", "Excel", "Data Analysis", "Power BI"],
    githubUrl: "https://github.com/saivineethreddysuravi/financial-loan-analytics",
    details: {
      problem: "High default rates on personal loans were affecting the bank's profitability, with no clear understanding of the contributing factors like loan grade or borrower employment length.",
      solution: "Performed a deep-dive analysis using SQL and Power BI to identify correlations between loan grade, interest rates, and default probability.",
      features: [
        "Loan grade risk assessment (Good vs. Bad Loans)",
        "Default trend analysis over time (Month-over-Month)",
        "Borrower demographic profiling by employment length and home ownership",
        "Geographic heatmaps showing loan distribution across states"
      ],
      impact: "Revealed that lower-grade loans had significantly higher default rates. Recommendations led to stricter lending criteria for high-risk profiles and better portfolio health monitoring.",
      future: [
        "Credit Scoring Model: Develop a custom credit scoring algorithm using historical repayment data.",
        "Automated Reporting: Set up SQL stored procedures to automate the monthly data refresh pipeline.",
        "Borrower Portal: Create a customer-facing portal for loan status tracking and repayment scheduling."
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
      solution: "Built a Tableau dashboard tracking attrition rates. Augmented with a Python 'Survival Analysis' (Lifelines) model to determine the 'Danger Zone' tenure period (e.g., months 12-18) where flight risk peaks.",
      features: [
        "Survival Analysis: Kaplan-Meier curves to visualize retention probability over time",
        "Attrition Rate Breakdown: By department and job role",
        "Demographic Profiling: Analysis of age, gender, and marital status on retention",
        "Sentiment Correlation: Mapping exit survey scores to tenure length"
      ],
      impact: "Identified 'Sales' department as having the highest turnover due to low satisfaction. Initiated a retention program that reduced attrition by 10% in Q3.",
      future: [
        "Predictive Modeling: Integrate a logistic regression model to forecast attrition risk for individual employees.",
        "Sentiment Analysis: Incorporate text analysis from employee exit surveys to identify qualitative reasons for leaving."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine",
    description: "Containerized ML microservice predicting student churn with 89% accuracy, deployed via Docker and Django Service Layer.",
    technologies: ["Docker", "Django", "Scikit-Learn", "Microservices", "PostgreSQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities lose 25-30% of revenue annually due to preventable student dropouts, often identifying at-risk students too late for effective intervention.",
      solution: "Built an enterprise-grade ML web application containerized with Docker. Refactored monolithic code into a clean Service-Layer architecture to ensure scalability and maintainability. Implemented 'Explainable AI' to provide risk drivers alongside predictions.",
      features: [
        "Docker Containerization: 'Build Once, Run Anywhere' architecture for rapid deployment",
        "Service Pattern: Decoupled business logic from view layers for enterprise-grade code quality",
        "Explainable Predictions: Identifies specific risk factors (e.g., 'Unpaid Tuition') for each student",
        "Role-Based Access: Secure dashboard for counselors to view sensitive risk data"
      ],
      impact: "Enables early identification of 85% of at-risk students before the second semester, potentially saving institutions $2M+ in annual lost tuition revenue. Reduced inference time to <100ms for real-time usage.",
      future: [
        "Kubernetes Orchestration: Scale the application across a cluster for high-availability.",
        "Real-time SIS Integration: Event-driven architecture (Kafka) to ingest student data updates instantly.",
        "Mobile App: Build a companion React Native app for advisors to receive push notifications on risk alerts."
      ]
    }
  },
  {
    title: "Market Opportunity & Consumer Behavior Analysis",
    description: "Strategic market consulting analysis identifying 'Blue Ocean' dining opportunities using statistical segmentation and Power BI.",
    technologies: ["Power BI", "Statistical Analysis", "Market Strategy", "Data Storytelling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "New market entrants faced high failure rates due to a lack of understanding of local consumer demographics, failing to align service models with actual demand.",
      solution: "Conducted a rigorous statistical analysis of 10,000+ consumer data points. Built an interactive Power BI dashboard ecosystem to visualize supply-demand gaps and identifying underserved segments.",
      features: [
        "Market Gap Analysis: Identified 'Premium Non-Alcoholic' dining as a massive underserved market",
        "Price Sensitivity Modeling: Discovered 100% correlation between high pricing and parking availability",
        "Geospatial Intelligence: Mapped 'Blue Ocean' zones like Jiutepec for low-competition entry",
        "Consumer Persona Segmentation: Detailed analysis of 'Social Drinker' spending vs. satisfaction"
      ],
      impact: "Revealed a strategic opportunity for high-margin 'Dry' premium restaurants. Findings suggest a 100% non-smoking, wellness-focused brand would capture the Jiutepec market instantly.",
      future: [
        "Predictive Site Selection: Build a regression model to score potential real estate locations.",
        "Competitor Scraping: Automate competitor menu pricing analysis using Python (BeautifulSoup).",
        "Sentiment NLP: Analyze social media sentiment to track shifting consumer preferences in real-time."
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
      solution: "Engineered a contactless, secure Biometric API using FastAPI and Computer Vision. Replaced fragile local scripts with a robust microservice architecture capable of handling concurrent requests.",
      features: [
        "Microservice Architecture: Decoupled API layer from matching engine",
        "High-Speed Matching: Optimized LBPH algorithm for <200ms verification",
        "Containerization: Fully Dockerized for easy deployment to AWS/Azure",
        "Security: Input validation and confidence thresholding to prevent spoofing"
      ],
      impact: "Eliminated identity fraud potential and reduced check-in times by 90%. Architecture is ready for scale to thousands of users.",
      future: [
        "Liveness Detection: Implement blink/smile detection to prevent photo-spoofing.",
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
      problem: "Manual cold emailing is unscalable, and existing tools were platform-dependent (macOS only) or expensive.",
      solution: "Developed a pure Python automation suite that handles bulk personalization, SMTP connection pooling, and smart rate-limiting to avoid spam filters.",
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
      solution: "Developed a Logistic Regression model to score booking risk in real-time. Conducted deep EDA to identify lead-time thresholds and deposit-type correlations that drive churn.",
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
      problem: "Classic games often lack the state-space complexity required to demonstrate advanced AI concepts like reward engineering and exploration-exploitation tradeoffs.",
      solution: "Transformed a standard Snake game into an RL research environment. Engineered an 11-dimensional state vector and implemented a Deep Q-Network (DQN) to optimize survival rewards.",
      features: [
        "Reward Engineering: Multi-tier feedback loops for survival and objective completion",
        "Experience Replay: Training on non-sequential memory buffers to break temporal correlation",
        "Epsilon-Greedy Strategy: Balancing model exploration with learned exploitation",
        "Vectorized State Representation: Mapping environmental danger to neural network inputs"
      ],
      impact: "Demonstrates proficiency in advanced AI concepts beyond standard supervised learning, showcasing systems-level thinking for autonomous agents.",
      future: [
        "Multi-Agent Training: Introduce a second snake to study competitive RL dynamics.",
        "Policy Gradients: Implement PPO or A3C algorithms for continuous control optimization."
      ]
    }
  }
];
