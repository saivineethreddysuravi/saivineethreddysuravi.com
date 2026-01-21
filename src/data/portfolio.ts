import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaBrain, FaRobot, FaDocker } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiScikitlearn, SiPytorch, SiTensorflow } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Enterprise Analytics Architect",
  email: "saivineethreddysuravi@gmail.com",
  phone: "901-930-8006",
  location: "Charlotte, NC (Open to Relocation)",
  summary: "Senior Data Analyst with 6+ years of experience architecting enterprise-grade analytics solutions that bridge the gap between complex data engineering and executive strategy. I specialize in building modern data stacks (Snowflake, dbt, Python) and deploying AI-enhanced BI ecosystems (Power BI, Tableau) that drive measurable financial impact. My background spans high-stakes domains including Financial Risk, Workforce Analytics, and Operations, where I have successfully protected over $2M in revenue and unlocked $50k+ in annualized productivity through intelligent automation. I am a hands-on technical leader who thrives on owning the full data lifecycle—from raw ingestion to boardroom strategy.",
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
      { name: "Generative AI for Process Automation", icon: FaRobot, link: "#" },
      { name: "Explainable AI (XAI / SHAP)", icon: FaBrain, link: "#" },
      { name: "A/B Testing & Experimentation", icon: FaChartLine, link: "#" },
    ]
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "SQL (Advanced Window Functions, CTEs)", icon: FaDatabase, link: "#" },
      { name: "Python (Pandas, NumPy, Scikit-Learn)", icon: FaPython, link: "#" },
      { name: "Power BI (DAX, M Query, RLS)", icon: FaChartBar, link: "#" },
      { name: "Tableau (LOD Expressions)", icon: SiTableau, link: "#" },
      { name: "Excel (Power Query, VBA)", icon: FaFileExcel, link: "#" },
    ]
  },
  {
    category: "Data Engineering",
    items: [
      { name: "Snowflake Architecture", icon: SiSnowflake, link: "#" },
      { name: "ETL/ELT Pipeline Orchestration", icon: FaDatabase, link: "#" },
      { name: "Star Schema & Dimensional Modeling", icon: FaDatabase, link: "#" },
      { name: "SQL Query Optimization", icon: FaDatabase, link: "#" },
      { name: "Docker & Microservices", icon: FaDocker, link: "#" },
      { name: "Git Version Control / CI/CD", icon: FaGithub, link: "#" },
    ]
  },
  {
    category: "Business Domains",
    items: [
      { name: "Financial Risk & Fraud Analytics", icon: FaChartLine, link: "#" },
      { name: "Workforce & Payroll Optimization", icon: FaChartBar, link: "#" },
      { name: "Operational Strategy & Efficiency", icon: FaChartLine, link: "#" },
      { name: "Executive Reporting & Storytelling", icon: FaTable, link: "#" },
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
      "**Analytics Roadmap Ownership:** Defined and owned the quarterly enterprise analytics roadmap, conducting stakeholder interviews with VPs of Operations, Finance, and HR to prioritize high-value data initiatives. Aligned technical deliverables with corporate strategic goals, ensuring every dashboard and model drove specific business outcomes.",
      "**Enterprise Data Architecture:** Architected and deployed a multi-layer Snowflake Data Warehouse (Raw, Staging, Marts) capable of handling 3M+ transaction records. Implemented rigorous data modeling standards and optimized clustering keys, which reduced dashboard query latency by 35% and enabled sub-second performance during live executive board meetings.",
      "**Power BI Digital Transformation:** Spearheaded the organizational migration from decentralized Excel spreadsheets to a unified, governed Power BI ecosystem. Designed complex Star-Schema data models and implemented Row-Level Security (RLS) for 50+ senior stakeholders, reducing cross-departmental reporting discrepancies by 40% and establishing a 'Single Source of Truth.'",
      "**AI-Driven Automation:** Engineered robust Python-based ETL pipelines enhanced with Generative AI logic for automated anomaly detection and data cleansing. This initiative eliminated over 30 hours per month of manual data preparation work, directly unlocking $50K+ in annualized productivity gains for the analytics team.",
      "**Strategic Operational Consulting:** Partnered deeply with Operations leadership to decode ambiguous workforce challenges. Applied advanced pattern recognition algorithms to timestamp data, uncovering hidden scheduling inefficiencies that allowed the company to improve operational capacity by 20% without increasing headcount."
    ]
  },
  {
    company: "TEK Leaders Pvt. Ltd.",
    role: "Senior Data Analyst",
    location: "Hyderabad, IND",
    period: "Jun 2020 – Nov 2023",
    description: [
      "**Predictive Cost Reduction:** Conducted deep-dive Cohort and Survival Analysis using Machine Learning (Random Forest) to model workforce attrition. Identified specific tenure milestones and departmental friction points driving turnover, presenting data-backed retention strategies that reduced annual operational expenses by 15%.",
      "**Automated Compliance Engine:** Built a mission-critical, fully automated compensation reporting engine using Python and SQL. This system reconciled disparate datasets from HR (Workday) and Finance (SAP) systems, flagging discrepancies in real-time and ensuring zero compliance incidents or payroll errors for Fortune 500 clients over a 3-year period.",
      "**Power BI Tenant Administration:** Served as the primary administrator for the enterprise Power BI environment. Managed workspace access, gateway clusters, and refresh schedules for 50+ executive users. Successfully resolved complex Row-Level Security (RLS) conflicts and pipeline failures to maintain 99.9% system uptime.",
      "**Data Governance & Mentorship:** Established a standardized Data Governance framework, including the creation of a comprehensive Data Dictionary for Payroll and Finance metrics. Mentored 3 junior analysts on SQL best practices, dimensional modeling, and DAX, reducing metric definition disputes by 30% and improving the team's overall code quality."
    ]
  },
  {
    company: "Qualcomm India Pvt. Ltd.",
    role: "Data Analyst",
    location: "Hyderabad, IND",
    period: "Jan 2018 – Feb 2020",
    description: [
      "**Financial Workflow Automation:** Transformed the monthly financial close process by replacing manual Excel VLOOKUPs with robust Python automation scripts. This initiative reclaimed 2 full analyst days per month and improved reporting accuracy by 20% by eliminating human data-entry errors.",
      "**Global Executive Dashboards:** Designed and maintained high-impact Tableau dashboards that consolidated fragmented financial data from multiple global regions into a unified executive view. This reduced the leadership team's 'time-to-insight' by 40%, enabling faster reaction to regional market trends.",
      "**Audit & Compliance Security:** Developed a suite of automated SQL validation scripts to audit SEC filings and internal financial reports against source systems. These automated checks ensured 100% data integrity and zero discrepancies during high-pressure quarterly internal and external audits."
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
    degree: "Master of Science, Management Information Systems (GPA: 3.88)",
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
    title: "Enterprise Credit Risk & Portfolio Health Analytics",
    description: "End-to-end FinTech risk platform using advanced SQL window functions and cohort analysis to identify $1.2M in at-risk revenue.",
    technologies: ["PostgreSQL", "Advanced SQL", "Power BI", "Risk Modeling", "Python"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "The institution faced rising delinquency rates and unclear customer profitability metrics across a dataset of 3M+ transactions. Manual risk reviews were reactive and slow, leading to inefficient capital allocation and missed opportunities for proactive retention.",
      solution: "Engineered a scalable ETL pipeline in Snowflake to centralize 3M+ transaction records. Developed a sophisticated risk detection algorithm using Advanced SQL (Window Functions, CTEs) to identify utilization spikes and segment customers by 'Net Profitability' and 'Churn Probability'.",
      features: [
        "**Revenue Protection:** Successfully flagged high-risk accounts representing $1.2M in potential lost revenue.",
        "**Automated Intelligence:** Deployed Python-based ETL pipelines to refresh risk scores daily with 99.9% accuracy.",
        "**Advanced Segmentation:** Used K-Means clustering concepts to group customers by spending behavior and risk profile.",
        "**Cohort Analysis:** Visualized customer retention and spending decay curves to pinpoint exactly when churn occurs."
      ],
      impact: "Identified a critical 15% high-risk segment and proposed a targeted retention strategy for high-CLV cohorts. The automated system replaced manual spreadsheets, saving the Risk Team 20+ hours per week.",
      future: [
        "**Real-time Scoring Engine:** Implement a microservice to flag risky transactions in milliseconds during authorization.",
        "**Graph Network Analysis:** Use Neo4j to detect complex fraud rings and synthetic identities."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine (AI/ML)",
    description: "Containerized ML microservice predicting student churn with 89% accuracy, deployed via Docker and Django Service Layer.",
    technologies: ["Docker", "Django", "Scikit-Learn", "Microservices", "PostgreSQL", "Explainable AI"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities lose 25-30% of revenue annually due to preventable student dropouts. Existing intervention methods were reactive, often identifying at-risk students only after they had already decided to leave.",
      solution: "Built an enterprise-grade Machine Learning web application containerized with Docker. Refactored monolithic research code into a clean, scalable Service-Layer architecture. Implemented 'Explainable AI' (XAI) to not just predict risk, but explain *why* a student is at risk.",
      features: [
        "**High-Accuracy Prediction:** Achieved 89% accuracy using optimized Random Forest and Gradient Boosting models.",
        "**Microservice Architecture:** Decoupled business logic from the API layer using Django and Docker, allowing independent scaling.",
        "**Real-Time Inference:** Optimized model serving to deliver predictions in <100ms.",
        "**Explainable AI:** Integrated SHAP values to show counselors specific risk drivers (e.g., 'Financial Aid Gap', 'Attendance Dip')."
      ],
      impact: "Empowered academic advisors to intervene early, potentially protecting $2M+ in annual tuition revenue. The system supports concurrent users and can be deployed to any cloud environment via Docker.",
      future: [
        "**Kubernetes Orchestration:** Scale the application across a cluster for high availability during enrollment peaks.",
        "**Event-Driven Architecture:** Integrate with Kafka to ingest student behavior data (e.g., LMS logins) in real-time."
      ]
    }
  },
  {
    title: "Predictive Sales & Inventory Forecasting",
    description: "Interactive forecasting engine combining Power BI visualization with Python-based time-series modeling (ARIMA) for supply chain optimization.",
    technologies: ["Power BI", "Python (ARIMA)", "DAX", "Predictive Analytics"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
    details: {
      problem: "Supply chain stakeholders lacked a unified view of sales performance and had no scientific capability to forecast future inventory needs, leading to costly overstocking and stockouts.",
      solution: "Designed a hybrid forecasting engine that embeds Python-based ARIMA time-series models directly into Power BI. This allows users to visualize historical trends and see probabilistic forecasts for the upcoming quarter.",
      features: [
        "**Probabilistic Forecasting:** Python integration predicts Q4 revenue with 85% confidence intervals.",
        "**Root Cause Analysis:** utilized Decomposition Trees to drill down into profit margins by region and product category.",
        "**Scenario Planning:** Dynamic parameters allow users to simulate 'What-If' scenarios (e.g., 'What if price increases 5%?').",
        "**Geospatial Intelligence:** Mapped sales distribution to identify underperforming territories."
      ],
      impact: "Enabled real-time tracking of sales revenue and provided the foresight needed to reduce inventory overstock by 15%, significantly optimizing working capital.",
      future: [
        "**Customer Segmentation:** Use clustering techniques (K-Means) to identify high-value customer groups (RFM Analysis).",
        "**Row-Level Security (RLS):** Implement granular access control for regional sales managers."
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