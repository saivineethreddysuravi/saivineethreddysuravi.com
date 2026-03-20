import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaShieldAlt, FaSearchPlus, FaCogs, FaUsers, FaCloud, FaCheckCircle } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiDatabricks, SiGooglecloud, SiMicrosoftazure, SiApachespark, SiJupyter } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | ETL Engineering & Data Governance",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Charlotte, NC, USA",
  summary: "Senior Data Analyst with 6+ years of experience delivering end-to-end data analytics, ETL pipelines, and data governance solutions across healthcare, telecom, and insurance domains. Expert in SQL optimization, Snowflake, and Azure Data Services (ADF, Databricks), with a proven track record of building scalable data validation frameworks and high-impact KPI dashboards that drive executive decision-making.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
  {
    category: "Data Engineering & ETL",
    items: [
      { name: "Azure Data Factory", icon: SiMicrosoftazure, link: "https://github.com/saivineethreddysuravi" },
      { name: "Databricks & PySpark", icon: SiDatabricks, link: "https://github.com/saivineethreddysuravi" },
      { name: "Snowflake & SQL Server", icon: SiSnowflake, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "ETL Pipeline Automation", icon: FaCogs, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Data Governance & Quality",
    items: [
      { name: "Collibra & Lineage", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Validation (SQL/SAS)", icon: FaCheckCircle, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Metadata Management", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi" },
      { name: "Audit & Compliance", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "BI & Data Visualization",
    items: [
      { name: "Power BI (DAX/PL-300)", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis" },
      { name: "Tableau & SSRS", icon: SiTableau, link: "https://github.com/saivineethreddysuravi" },
      { name: "Executive Reporting", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi" },
      { name: "KQL & Real-time Dashboards", icon: FaSearchPlus, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Analytics & Big Data",
    items: [
      { name: "Python (Pandas/NumPy)", icon: FaPython, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "Apache Spark", icon: SiApachespark, link: "https://github.com/saivineethreddysuravi" },
      { name: "Predictive Modeling", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "AWS (S3/EC2)", icon: FaCloud, link: "https://github.com/saivineethreddysuravi" },
    ]
  }
];

export const experience = [
  {
    company: "Startech Networks",
    role: "Senior Data Analyst & BI Specialist",
    location: "Memphis, TN, USA",
    period: "Jul 2025 - Feb 2026",
    description: [
      "**BI Strategy:** Designed and delivered enterprise KPI dashboards (Power BI, Tableau), consolidating multi-source data into centralized reporting, improving decision-making efficiency by 35%.",
      "**ETL Engineering:** Built and optimized ETL pipelines using Azure Data Factory and Databricks, reducing manual data processing efforts by 40%.",
      "**SQL Performance:** Developed complex SQL queries, stored procedures, and views, reducing dashboard refresh times by 30% through query tuning and Snowflake warehouse scaling.",
      "**Big Data:** Engineered large-scale data transformations using PySpark, enabling efficient processing of high-volume datasets for downstream analytics.",
      "**Data Quality:** Implemented validation frameworks (SQL, SAS) and performed source-to-target reconciliation across Oracle, SQL Server, and Snowflake, ensuring 99.9% accuracy.",
      "**Governance:** Established data governance processes using Collibra, documenting data lineage, metadata, and business rules to support compliance and audit readiness.",
      "**Real-time Analytics:** Developed monitoring dashboards in Azure Data Explorer (KQL) that enabled teams to resolve performance issues 30% faster."
    ]
  },
  {
    company: "Tek Leaders",
    role: "Data Analyst",
    location: "Hyderabad, India",
    period: "Feb 2020 - Sep 2023",
    description: [
      "**Modernization:** Migrated legacy reporting systems (Oracle Discoverer) to Tableau, modernizing analytics infrastructure and improving accessibility.",
      "**Predictive Analytics:** Developed and deployed predictive models (regression, clustering, time-series) that improved quarterly forecasting accuracy by 20%.",
      "**EDA & Python:** Performed exploratory data analysis using Python (Pandas, NumPy), uncovering trends that improved pricing and operational strategies.",
      "**Automation:** Automated data cleansing and preprocessing pipelines (Python, SQL), reducing manual effort by 35% and improving data preparation speed.",
      "**Governance:** Implemented Collibra-based metadata and governance workflows, ensuring data transparency and source-to-target mapping consistency.",
      "**Fraud Detection:** Analyzed large insurance and telecom datasets using SQL, identifying fraud patterns and operational inefficiencies."
    ]
  },
  {
    company: "Qualcomm",
    role: "SQL Developer",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "**Database Engineering:** Designed and developed tables, indexes, views, and stored procedures that reduced report generation time by 30%.",
      "**Query Optimization:** Built and optimized complex SQL queries and indexing strategies, improving database performance by 40%.",
      "**OLAP Modeling:** Developed OLAP cubes using SSAS for multidimensional analysis, reducing finance team report generation time by 60%.",
      "**Cloud Migration:** Supported data migration and system upgrades on AWS EC2 by validating and reconciling data across environments with zero data loss.",
      "**Automation:** Automated ETL and reporting workflows using SQL and UNIX scripts, improving consistency and reducing manual intervention."
    ]
  }
];

export const achievements = [
  "Reduced report generation time by **60%** for finance teams using SSAS OLAP modeling.",
  "Improved decision-making efficiency by **35%** through centralized enterprise KPI dashboards.",
  "Automated ETL pipelines via Azure Data Factory and Databricks, reducing manual effort by **40%**.",
  "Identified **$1.2M at-risk revenue** by processing **3M+ Snowflake transactions** with 99.9% accuracy.",
  "Certified: **Power BI Data Analyst Associate (PL-300)** & **Azure Data Fundamentals (DP-900)**."
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "Master of Science, Computer Information Systems (GPA: 3.88)",
    period: "Jan 2024 - Dec 2025"
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology, Computer Science (GPA: 3.60)",
    period: "Apr 2014 - May 2018"
  }
];

export const projects = [
  {
    title: "Enterprise Credit Risk & Portfolio Health Analytics",
    description: "Built a high-scale risk detection engine processing 3M+ Snowflake transactions, identifying $1.2M at-risk revenue while reducing false positives by 20%.",
    technologies: ["Snowflake", "SQL", "Python", "Power BI", "Data Governance"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions needed a unified view of credit risk and customer spending behavior to optimize credit limits and minimize defaults across a 3M+ transaction dataset.",
      solution: "Designed a centralized data warehouse in Snowflake and a Power BI analytics layer. Implemented automated ETL pipelines using Python to clean and aggregate daily transaction data.",
      features: [
        "Automated daily data quality pipelines with 99.9% reporting accuracy",
        "Dynamic customer segmentation by risk profile and spending behavior",
        "PII Masking and Row-Level Security for sensitive financial data",
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
