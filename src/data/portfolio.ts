import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaShieldAlt, FaSearchPlus, FaCogs, FaUsers } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiDatabricks, SiGooglecloud } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Cloud Analytics & Data Governance",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Charlotte, NC, USA",
  summary: "Experienced Senior Data Analyst specializing in analyzing structured and unstructured data from multiple sources to generate actionable insights and support informed business decisions. Proven ability to collaborate with stakeholders and translate complex datasets into clear, business-focused insights with a focus on SQL optimization, Python ETL, and data governance.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
  {
    category: "Data Analytics & Engineering",
    items: [
      { name: "SQL Optimization", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Python (Pandas, NumPy)", icon: FaPython, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "ETL Pipelines", icon: FaCogs, link: "https://github.com/saivineethreddysuravi" },
      { name: "Cloud Warehouses", icon: SiSnowflake, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
    ]
  },
  {
    category: "Data Governance & Risk",
    items: [
      { name: "Risk Frameworks", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Quality Controls", icon: FaSearchPlus, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Lineage Validation", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi" },
      { name: "Audit & Compliance", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Reporting & BI",
    items: [
      { name: "Power BI Semantic Models", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis" },
      { name: "KPI Standardization", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Reconciliation", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Executive Dashboards", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis" },
    ]
  },
  {
    category: "Financial & Operational Analytics",
    items: [
      { name: "Forecasting", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi" },
      { name: "Workforce Reporting", icon: FaUsers, link: "https://github.com/saivineethreddysuravi" },
      { name: "Process Standardization", icon: FaCogs, link: "https://github.com/saivineethreddysuravi" },
      { name: "Anomaly Detection", icon: FaSearchPlus, link: "https://github.com/saivineethreddysuravi" },
    ]
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Senior Data Analyst",
    location: "Memphis, TN, USA",
    period: "Aug 2025 - Present",
    description: [
      "**Risk Framework:** Developed an enterprise-wide, report-level data risk framework that enables all reporting teams to consistently assess data completeness, transformation accuracy, refresh timeliness, dependency risks, and business impact.",
      "**Scoring Model:** Designed and implemented an exposure-based scoring model leveraging control maturity, lineage depth, and dependency indicators to accurately classify reporting assets by risk tier, enabling more effective risk management and strategic decision-making.",
      "**Data Controls:** Implemented validation, reconciliation, and checkpoint controls within Snowflake and Redshift, reducing reporting defects and increasing trust in downstream analytics.",
      "**Agile Leadership:** Led control testing sprints using Agile methods and JIRA, validating logic effectiveness and refining scoring thresholds, which improved model accuracy and reduced false-positive alerts by 15%, leading to faster issue resolution.",
      "**Warehouse Engineering:** Engineered a centralized cloud warehouse replacing fragmented spreadsheets, enabling consistent governed reporting across business units.",
      "**Governance:** Redesigned KPI governance logic within Power BI semantic models, reducing executive metric disputes by 40%.",
      "**Documentation:** Authored audit-aligned documentation, validation protocols, lineage maps, and remediation workflows that improved audit readiness and reduced issue resolution time."
    ]
  },
  {
    company: "Qualcomm (via Sodexo)",
    role: "Data Analyst, Finance & Analytics",
    location: "Hyderabad, India",
    period: "Jul 2018 - Nov 2023",
    description: [
      "**Analytics:** Delivered financial and workforce analytics that increased forecasting and budgeting accuracy and supported better decision-making.",
      "**Reconciliation:** Built reconciliation frameworks and financial reporting controls that improved audit readiness and compliance, resulting in faster and more accurate financial statements.",
      "**Anomaly Detection:** Defined anomaly detection thresholds to spot variances before month-end close, which improved financial accuracy, enabled faster issue resolution, and reduced last-minute adjustments.",
      "**Automation:** Automated reporting workflows using Python and SQL, reducing processing time by 50%.",
      "**Issue Tracking:** Worked with finance and audit leaders to create clear issue-tracking and remediation documentation in SharePoint, leading to faster resolution times and easier audit reviews.",
      "**Root Cause Analysis:** Performed root cause analysis on transformation logic to find control failures and lineage gaps, leading to fixes that improved data quality and process reliability.",
      "**Standardization:** Standardized KPIs and governance documentation, reducing reporting discrepancies by 20%.",
      "**Mentorship:** Mentored analysts on governance-aligned analytics and control-oriented data engineering, resulting in improved data quality and a 20% increase in reporting consistency across the team."
    ]
  }
];

export const achievements = [
  "Reduced executive metric disputes by **40%** through redesigned KPI governance logic.",
  "Improved model accuracy and reduced false-positive alerts by **15%** via optimized scoring thresholds.",
  "Automated financial reporting workflows using Python and SQL, reducing processing time by **50%**.",
  "Built a high-scale risk detection engine processing **3M+ Snowflake transactions**, identifying **$1.2M at-risk revenue**.",
  "Maintained a **3.88 GPA** during Master of Science in Computer Information Systems."
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "Master of Science, Computer Information Systems (GPA: 3.88)",
    period: "Jan 2024 - Dec 2025"
  },
  {
    institution: "Narasimha Reddy Engineering College",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology, Computer Science Engineering",
    period: "Apr 2014 - May 2018"
  }
];

export const projects = [
  {
    title: "Enterprise Credit Risk & Portfolio Health Analytics",
    description: "Built a high-scale risk detection engine processing 3M+ Snowflake transactions, identifying $1.2M at-risk revenue while reducing false positives by 20%.",
    technologies: ["Snowflake", "SQL", "Python", "Power BI", "Data Modeling"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions needed a unified view of credit risk and customer spending behavior to optimize credit limits and minimize defaults across a 3M+ transaction dataset.",
      solution: "Designed a centralized data warehouse in Snowflake and a Power BI analytics layer. Implemented automated ETL pipelines using Python to clean and aggregate daily transaction data.",
      features: [
        "Automated daily data quality pipelines with 99.9% reporting accuracy",
        "Dynamic customer segmentation by risk profile and spending behavior",
        "Real-time delinquency tracking and revenue impact analysis",
        "Exposure-based scoring model for risk classification"
      ],
      impact: "Identified $1.2M in at-risk revenue and reduced false positive risk alerts by 20% through improved data quality.",
      future: [
        "Predictive Modeling: Add ML layer for default probability.",
        "Real-time Alerting: Slack/Teams integration for high-risk transactions."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine",
    description: "Deployed a churn prediction microservice (Docker + Scikit-Learn) with 89% accuracy, contributing to $2M+ in retained tuition revenue.",
    technologies: ["Python", "Scikit-Learn", "Docker", "Explainable AI (XAI)", "PostgreSQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities face high dropout rates but lack early warning systems to identify at-risk students before they leave.",
      solution: "Built a containerized Machine Learning microservice that ingests academic and socio-economic data to predict dropout probability. The system uses Explainable AI (XAI) to surface specific attrition drivers.",
      features: [
        "Random Forest Classifier with 89% accuracy",
        "Explainable AI integration to identify key attrition drivers",
        "Dockerized API for consistent deployment",
        "Strategic intervention support for academic advisors"
      ],
      impact: "Achieved 89% accuracy, enabling targeted interventions that contributed to over $2M in retained tuition revenue.",
      future: [
        "Cloud Deployment: Deploy to AWS ECS for auto-scaling.",
        "Real-time Integration: Connect to SIS for live data feed."
      ]
    }
  },
  {
    title: "Market Opportunity & Consumer Behavior Analysis",
    description: "Strategic market analysis using SQL and Power BI to identify high-value expansion zones and optimize pricing strategies.",
    technologies: ["SQL", "Power BI", "Python", "Data Modeling", "Azure"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "A retail chain needed to identify high-potential locations for expansion but lacked data on consumer preferences and competitor saturation.",
      solution: "Ingested and analyzed market data using SQL and Python. Created a Power BI dashboard to map competitor density and consumer rating trends.",
      features: [
        "Geospatial analysis of competitor locations",
        "Price elasticity modeling vs. customer satisfaction",
        "Automated data refresh pipelines on Azure",
        "Interactive executive dashboard for site selection"
      ],
      impact: "Identified 3 under-served high-demand zones for expansion. Recommended a pricing strategy aligned with local consumer purchasing power.",
      future: [
        "Competitor Scraping: Automate data collection from review sites.",
        "Sentiment Analysis: NLP on customer reviews."
      ]
    }
  }
];
