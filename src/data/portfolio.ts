import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Cloud Analytics & Data Warehousing",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Memphis, TN, USA",
  summary: "I’m a Senior Data Analyst with experience designing cloud-based data platforms and analytics solutions that support executive decision-making. My work focuses on data warehousing, KPI governance, and financial analytics—helping organizations move from fragmented reporting to trusted, auditable insights.",
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
    title: "Student Retention Intelligence Engine",
    description: "Deployed a churn prediction microservice with 89% accuracy, contributing to $2M+ in retained tuition revenue.",
    technologies: ["Python", "Docker", "Scikit-Learn", "PostgreSQL", "FastAPI"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities face high dropout rates (25-30%) but lack early warning systems to identify at-risk students before they leave, impacting institutional reputation and revenue.",
      solution: "Built a containerized Machine Learning microservice that ingests academic and socio-economic data to predict dropout probability. The system uses Explainable AI (SHAP values) to surface specific attrition drivers for each student.",
      features: [
        "Random Forest Classifier (200 trees) with 89% accuracy",
        "Explainable AI integration to guide specific interventions",
        "Dockerized API for consistent deployment",
        "Real-time inference capability for academic advisors"
      ],
      impact: "Achieved 89% accuracy, enabling targeted interventions that contributed to over $2M in retained tuition revenue.",
      future: [
        "Cloud Deployment: Deploy to AWS ECS for auto-scaling.",
        "Real-time Integration: Connect to SIS for live data feed.",
        "Mobile App: Build an advisor companion app."
      ]
    }
  },
  {
    title: "Enterprise Credit Risk & Portfolio Analytics",
    description: "Built a risk detection model on 3M+ transactions, identifying $1.2M at-risk revenue.",
    technologies: ["Snowflake", "SQL", "Power BI", "Python", "DAX"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions needed a unified view of credit risk and customer spending behavior to optimize credit limits and minimize defaults across a 3M+ transaction dataset.",
      solution: "Designed a centralized data warehouse in Snowflake and a Power BI analytics layer. Implemented automated ETL pipelines using Python to clean and aggregate daily transaction data.",
      features: [
        "Automated daily risk pipelines with 99.9% data accuracy",
        "Dynamic customer segmentation by risk profile and spending behavior",
        "Real-time delinquency tracking and revenue impact analysis",
        "Role-Level Security (RLS) for regional managers"
      ],
      impact: "Identified $1.2M in at-risk revenue and reduced false positive risk alerts by 20% through improved data quality.",
      future: [
        "Predictive Modeling: Add ML layer for default probability.",
        "Real-time Alerting: Slack/Teams integration for high-risk transactions."
      ]
    }
  },
  {
    title: "Market Opportunity & Consumer Behavior Analysis",
    description: "Strategic market analysis using SQL and Power BI to identify high-value expansion zones.",
    technologies: ["SQL", "Power BI", "Python", "Azure", "Data Modeling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "A retail chain needed to identify high-potential locations for expansion but lacked data on consumer preferences, competitor saturation, and pricing elasticity in target zones.",
      solution: "Ingested and analyzed market data using SQL and Python. Created a Power BI dashboard to map competitor density and consumer rating trends to identify 'blue ocean' opportunities.",
      features: [
        "Geospatial analysis of competitor locations",
        "Price elasticity modeling vs. customer satisfaction",
        "Automated data refresh pipelines on Azure",
        "Interactive executive dashboard for site selection"
      ],
      impact: "Identified 3 under-served high-demand zones for expansion. Recommended a pricing strategy aligned with local consumer purchasing power.",
      future: [
        "Competitor Scraping: Automate data collection from review sites.",
        "Sentiment Analysis: NLP on customer reviews for qualitative insights."
      ]
    }
  },
  {
    title: "Auto-Email Reachout Automation",
    description: "Python automation tool that streamlines job applications, increasing outreach velocity by 70%.",
    technologies: ["Python", "Automation", "macOS API", "AppleScript"],
    githubUrl: "https://github.com/saivineethreddysuravi/auto-email-tool",
    details: {
      problem: "Applying for jobs manually is time-consuming. Copying emails, attaching resumes, and drafting repetitive messages leads to fatigue and fewer applications.",
      solution: "Developed a background automation tool that monitors the clipboard for email addresses and interfaces with macOS Mail to instantly draft personalized emails with attachments.",
      features: [
        "Clipboard Listener for instant email detection",
        "Smart Greeting generation based on recipient name",
        "Bulk sending capability with anti-spam delays",
        "Duplicate detection to prevent double-messaging"
      ],
      impact: "Reduced time per application by 70%. Successfully automated 95+ targeted outreach emails in a single session.",
      future: [
        "LinkedIn Integration: Direct scraping from job posts.",
        "Multi-template Support: Dynamic template switching."
      ]
    }
  }
];
