import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaChartLine, FaTable, FaShieldAlt, FaSearchPlus, FaCogs, FaCloud, FaCheckCircle, FaMicrosoft, FaLock, FaFileAlt, FaProjectDiagram } from 'react-icons/fa';
import { SiTableau, SiMysql, SiSnowflake, SiDatabricks, SiApachespark, SiFastapi, SiOracle } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Governance & Data Quality Analyst",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Charlotte, NC, USA",
  summary: "Data Governance and Data Quality professional with 6+ years designing enterprise Collibra frameworks, SOX-compliant data ecosystems, and cross-system reconciliation pipelines across financial services, telecom, and insurance. Deep expertise in Collibra DG, CDQ, Data Catalog, Business Glossary, Data Lineage, and star schema modeling. Microsoft Certified (PL-300, DP-900).",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
  {
    category: "Data Governance & Quality",
    items: [
      { name: "Collibra DG & CDQ", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Catalog & Business Glossary", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Lineage & Stewardship", icon: FaProjectDiagram, link: "https://github.com/saivineethreddysuravi" },
      { name: "SOX 404 Controls & Compliance", icon: FaLock, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "SQL & Databases",
    items: [
      { name: "Advanced SQL (CTEs, Window Functions)", icon: SiMysql, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Snowflake & Azure SQL", icon: SiSnowflake, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "SQL Server, Oracle & DB2", icon: SiOracle, link: "https://github.com/saivineethreddysuravi" },
      { name: "Query Tuning & Execution Plans", icon: FaSearchPlus, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Azure Data Platform",
    items: [
      { name: "Azure Data Factory", icon: FaMicrosoft, link: "https://github.com/saivineethreddysuravi" },
      { name: "Azure Databricks", icon: SiDatabricks, link: "https://github.com/saivineethreddysuravi" },
      { name: "Azure Data Lake Gen2", icon: FaCloud, link: "https://github.com/saivineethreddysuravi" },
      { name: "AWS EC2 & S3", icon: FaCloud, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "BI & Reporting",
    items: [
      { name: "Power BI (DAX, RLS, Paginated)", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis" },
      { name: "SSAS (Tabular/MDX) & SSRS", icon: FaMicrosoft, link: "https://github.com/saivineethreddysuravi" },
      { name: "Tableau (LOD Calcs, Dashboards)", icon: SiTableau, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Quality KPI Dashboards", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Programming & Automation",
    items: [
      { name: "Python (pandas, PySpark basic)", icon: FaPython, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "FastAPI & REST APIs", icon: SiFastapi, link: "https://github.com/saivineethreddysuravi" },
      { name: "Shell Scripting", icon: FaCogs, link: "https://github.com/saivineethreddysuravi" },
      { name: "Git, JIRA, Azure DevOps", icon: FaFileAlt, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Data Modeling & Tools",
    items: [
      { name: "Hackolade (Schema Design)", icon: FaTable, link: "https://github.com/saivineethreddysuravi" },
      { name: "Star & Snowflake Schema", icon: FaProjectDiagram, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "Source-to-Target Mapping (STTM)", icon: FaCheckCircle, link: "https://github.com/saivineethreddysuravi" },
      { name: "Conceptual / Logical / Physical Design", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi" },
    ]
  }
];

export const experience = [
  {
    company: "Startech Networks (Verizon Engagement)",
    role: "Senior Data Governance / Data Quality Analyst",
    location: "Memphis, TN",
    period: "Jul 2025 - Feb 2026",
    description: [
      "**Collibra Implementation:** Implemented Collibra Data Governance, Data Catalog, and CDQ framework across **300+ regulated data elements** — business glossary, lineage mapping, data ownership, and stewardship workflows.",
      "**Data Quality Rules:** Defined and enforced DQ rules (completeness, accuracy, timeliness, consistency) integrated into **Azure Data Factory and Databricks** ingestion pipelines.",
      "**Data Modeling:** Designed **star schema data models** for Snowflake-based reporting marts using conceptual, logical, and physical design; applied Hackolade-aligned schema documentation for governance consistency.",
      "**Reconciliation:** Built SQL validation and reconciliation frameworks across **Snowflake, SQL Server, Oracle, and DB2** to ensure cross-system data consistency.",
      "**SOX Compliance:** Delivered full Collibra rollout enabling a **clean SOX audit with zero findings**; created Power BI dashboards tracking DQ KPIs and governance metrics for data stewards and leadership."
    ]
  },
  {
    company: "Tek Leaders (Deloitte Engagement)",
    role: "Data Governance & Data Analyst",
    location: "Hyderabad, India (Remote to U.S. Client)",
    period: "Feb 2020 - Sep 2023",
    description: [
      "**Collibra Governance:** Implemented Collibra-based metadata governance — business glossary, lineage, and stewardship workflows — for **280+ financial data elements**.",
      "**ETL Reconciliation:** Investigated large-scale data mismatches across **2.4M+ records** by reconciling Oracle, SQL Server, and DB2, identifying ETL transformation defects impacting financial P&L reporting.",
      "**STTM & Lineage:** Built SQL and Python-based validation frameworks; documented **source-to-target mappings (STTM)** for regulatory use cases — closed 3 regulatory requests with zero analyst involvement.",
      "**BI Delivery:** Built 12 Tableau and Power BI dashboards compressing the monthly reporting cycle from three days to **same-day delivery**; led Oracle Discoverer to Tableau migration.",
    ]
  },
  {
    company: "Qualcomm",
    role: "SQL Developer / Data Analyst",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "**SQL Optimization:** Designed database objects (tables, views, indexes, stored procedures) and optimized SQL queries using execution plans and indexing strategies, improving report performance by **up to 40%**.",
      "**SSRS Reporting:** Developed SSRS reports and supported SSAS-based analytical reporting for finance and operations teams serving **500+ employees**.",
      "**Data Migration:** Conducted data validation and reconciliation during system migration to **AWS EC2**, proving zero data loss using before-and-after SQL validation queries across every migrated table.",
    ]
  }
];

export const achievements = [
  "Delivered **SOX audit with zero findings** by implementing Collibra DG/CDQ governance across 300+ regulated data elements.",
  "Reconciled **2.4M+ records** across Oracle, DB2, and SQL Server, identifying critical ETL defects impacting financial P&L.",
  "Compressed monthly reporting cycles by **300%** (3 days to same-day) via Tableau and Power BI automation.",
  "Improved SQL query performance by **40%** through execution plan analysis and indexing at Qualcomm.",
  "Proved **zero data loss** across every table in a full financial system migration to AWS EC2.",
  "Microsoft Certified: **Power BI Data Analyst Associate (PL-300)** & **Azure Data Fundamentals (DP-900)**."
];

export const certifications = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "2025",
    icon: FaMicrosoft
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "2025",
    icon: FaCloud
  },
  {
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM",
    date: "2024",
    icon: FaDatabase
  }
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
    degree: "Bachelor of Technology, Computer Science and Engineering (GPA: 3.60)",
    period: "2014 - 2018"
  }
];

export const projects = [
  {
    title: "Enterprise Credit Risk & Portfolio Health Intelligence",
    description: "Architected a risk detection engine processing 3M+ Snowflake transactions and 2.4M+ legacy records, correcting P&L misclassifications and surfacing hidden at-risk financial exposure.",
    technologies: ["Snowflake", "SQL", "Python", "Power BI", "Data Governance"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "A financial organization faced revenue leakage due to ETL misclassifications across 2.4M+ records in Oracle and DB2 systems with no cross-system reconciliation framework.",
      solution: "Designed a centralized Source of Truth in Snowflake and a Power BI analytics layer. Implemented automated ETL reconciliation scripts in Python and SQL to detect ingestion errors in real-time.",
      features: [
        "Automated daily data quality pipelines with 99.9% reporting accuracy",
        "Source-to-target reconciliation across Snowflake, SQL Server, and DB2",
        "Dynamic customer segmentation by risk profile and spending behavior",
        "PII Masking and Row-Level Security for sensitive financial data"
      ],
      impact: "Identified $1.2M in at-risk revenue and corrected a P&L misclassification impacting 2.4M records.",
      future: [
        "Predictive Modeling: Add ML layer for default probability scoring.",
        "Real-time Alerting: Slack/Teams integration for high-risk transactions."
      ]
    }
  },
  {
    title: "Student Retention Intelligence Engine",
    description: "Deployed a churn prediction microservice (Docker + Scikit-Learn) with 89% accuracy for an educational institution, contributing to $2M+ in retained tuition revenue.",
    technologies: ["Python", "Scikit-Learn", "Docker", "Explainable AI (XAI)", "PostgreSQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities lacked visibility into student attrition drivers, leading to significant tuition revenue loss and late-stage intervention failures.",
      solution: "Built a containerized ML microservice that ingests academic and socio-economic data to predict dropout probability. Used SHAP values (XAI) to surface specific attrition drivers for advisors.",
      features: [
        "Random Forest Classifier with 89% accuracy",
        "Explainable AI (XAI) integration for driver identification",
        "Dockerized API for seamless service-layer deployment",
        "Automated data ingestion from PostgreSQL SIS"
      ],
      impact: "Enabled targeted interventions contributing to over $2M in retained tuition revenue.",
      future: [
        "Cloud Deployment: Deploy to AWS ECS for auto-scaling.",
        "Real-time Integration: Connect to SIS for live data feed."
      ]
    }
  },
  {
    title: "Marketing Funnel & ROI Optimization Engine",
    description: "Engineered an ROI engine tracking customers from Impression to Repeat Visit, identifying a 12% ROI lift and $400K annual revenue opportunity through data-driven budget reallocation.",
    technologies: ["SQL", "Power BI", "Python (Pandas)", "Marketing Analytics", "ROI Modeling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "Marketing spend was misallocated across five regions due to a 3-day reporting latency and no visibility into Customer Acquisition Cost vs. Lifetime Value.",
      solution: "Developed an end-to-end Marketing Funnel & ROI engine in Python and SQL. Compressed the reporting cycle to same-day delivery using star-schema modeling in Power BI.",
      features: [
        "Regional CAC vs. LTV analysis for budget optimization",
        "Funnel conversion tracking (Impression → Visit → Order → Repeat)",
        "Automated ROI modeling to project revenue lift from retention",
        "Interactive executive dashboard for regional performance monitoring"
      ],
      impact: "Recommended 30% budget reallocation toward high-performing locations, projecting 12% ROI lift and $400K annual revenue opportunity.",
      future: [
        "A/B Testing: Implement automated tracking for retention experiments.",
        "Predictive LTV: Integrate ML to forecast individual customer value."
      ]
    }
  }
];
