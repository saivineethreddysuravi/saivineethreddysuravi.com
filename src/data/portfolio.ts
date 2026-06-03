import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable, FaShieldAlt, FaSearchPlus, FaCogs, FaUsers, FaCloud, FaCheckCircle, FaMicrosoft, FaLock, FaFileAlt, FaProjectDiagram } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiDatabricks, SiGooglecloud, SiApachespark, SiJupyter, SiFastapi, SiPostgresql, SiOracle, SiDotnet } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Senior Data Analyst | Data Governance & Financial Reporting",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Charlotte, NC, USA",
  summary: "Senior Data Analyst with 6+ years of experience transforming complex data architectures into **$4.4M+ in identified revenue & risk mitigation**. I specialize in building governed BI ecosystems (Power BI, Snowflake) that survive rigorous SOX audits and automating high-scale ETL pipelines using Python and SQL. Microsoft Certified in Power BI (PL-300) and Azure (DP-900).",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
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
    category: "BI & Visualization",
    items: [
      { name: "Power BI (DAX, RLS, Paginated)", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis" },
      { name: "SSAS (Tabular/MDX) & SSRS", icon: FaMicrosoft, link: "https://github.com/saivineethreddysuravi" },
      { name: "Tableau (LOD Calcs, Dashboards)", icon: SiTableau, link: "https://github.com/saivineethreddysuravi" },
      { name: "Executive KPI Reporting", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Programming & APIs",
    items: [
      { name: "Python (Pandas, NumPy, Requests)", icon: FaPython, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "FastAPI & REST APIs", icon: SiFastapi, link: "https://github.com/saivineethreddysuravi" },
      { name: "SAS (Base, PROC SQL, Macros)", icon: FaTable, link: "https://github.com/saivineethreddysuravi" },
      { name: "JSON & Pydantic Schemas", icon: FaCogs, link: "https://github.com/saivineethreddysuravi" },
    ]
  },
  {
    category: "Governance & Quality",
    items: [
      { name: "Collibra (Catalog, Lineage)", icon: FaShieldAlt, link: "https://github.com/saivineethreddysuravi" },
      { name: "Data Quality Rule Authoring", icon: FaCheckCircle, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
      { name: "SOX 404 Controls & Compliance", icon: FaLock, link: "https://github.com/saivineethreddysuravi" },
      { name: "Star Schema & Data Modeling", icon: FaProjectDiagram, link: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard" },
    ]
  }
];

export const experience = [
  {
    company: "Startech Networks (Verizon engagement)",
    role: "Senior Data Analyst, Data Governance and Financial Reporting",
    location: "Charlotte, NC",
    period: "Jul 2025 - Feb 2026",
    description: [
      "**BI Modernization:** Rebuilt a manual Excel reporting practice for a 150-user finance group into three **Power BI dashboards** (revenue, budget vs. actuals) on a star-schema mart, reducing executive dependence on manual exports.",
      "**Governance:** Built a data catalog in **Collibra for 300+ regulated elements**, establishing end-to-end lineage and quality rules that enabled a **clean SOX audit** with zero findings.",
      "**API Engineering:** Developed a **Python FastAPI service** to provide certified financial KPI data as JSON, eliminating manual extract requests and enabling self-service for downstream teams.",
      "**Reconciliation:** Resolved monthly data reconciliation failures between **Snowflake and SQL Server** by creating automated SQL CTEs and Python scripts, preventing major discrepancies from reaching executive reports.",
      "**Quality Automation:** Implemented data quality rules and automated checks in SQL, Python, and SAS, reducing resolution time and improving compliance through direct owner routing via SLAs."
    ]
  },
  {
    company: "Tek Leaders (Deloitte US engagement)",
    role: "Data Analyst, Finance and Risk Reporting",
    location: "Remote to U.S. Client",
    period: "Feb 2020 - Dec 2023",
    description: [
      "**ETL Correction:** Discovered and fixed an ETL misclassification impacting executive P&L data across **2.4 million records** by reconciling Oracle, SQL Server, and DB2 systems.",
      "**Efficiency:** Built 12 Tableau and Power BI dashboards that compressed the monthly reporting cycle from three days to **same-day delivery**, reducing report prep time from one day to two hours.",
      "**Lineage Mapping:** Documented lineage for **280+ financial data elements**, mapping source-to-target transformations. Successfully closed three regulatory data requests using these mappings with zero analyst involvement.",
      "**Risk Analysis:** Corrected product-level charge-off categorization in the SQL layer during Python/SAS exploratory analysis, leading leadership to revise **credit-risk decisioning**.",
      "**Self-Service:** Wrote 50+ optimized SQL queries (CTEs, window functions) that replaced analyst-driven manual extracts, removing analytical bottlenecks for routine data pulls."
    ]
  },
  {
    company: "Qualcomm",
    role: "Reporting Analyst, Financial Data and Systems",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "**Enterprise Reporting:** Owned on-demand financial reporting for **500+ employees**, maintaining 40+ SSRS reports. Reduced generation time by **30%** through indexing and execution-plan tuning.",
      "**Data Migration:** Certified an end-to-end financial system data migration, proving **zero record loss** and 100% data fidelity across every migrated table using SQL validation.",
      "**Data Integrity:** Established a strict cross-checking protocol ensuring zero unvalidated numbers reached executive leadership over a two-year period.",
      "**Financial Modeling:** Built Excel budget vs. actuals variance models (Power Pivot) and SAS statistical summaries for monthly leadership reviews and spending decisions."
    ]
  }
];

export const achievements = [
  "Identified **$4.4M+ in at-risk revenue** and cost savings through advanced analytics and risk mitigation.",
  "Closed an external **SOX audit clean** with zero findings by establishing Collibra governance for 300+ elements.",
  "Compressed monthly reporting cycles by **300%** (from 3 days to same-day) via BI automation.",
  "Fixed data integrity issues across **2.4M records** in a multi-system (Oracle/DB2/SQL Server) reconciliation.",
  "Automated **40+ SSRS reports** for 500+ employees, reducing processing time by 30%.",
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
    description: "Architected a risk detection engine processing 3M+ Snowflake transactions and 2.4M+ legacy records, identifying $1.2M in at-risk revenue and correcting P&L misclassifications.",
    technologies: ["Snowflake", "SQL", "Python", "Power BI", "Data Governance"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "A major financial organization faced $1.2M in revenue leakage due to unoptimized credit limits and ETL misclassifications across 2.4M records in Oracle and DB2 systems.",
      solution: "Designed a centralized 'Source of Truth' in Snowflake and a Power BI analytics layer. Implemented automated ETL reconciliation scripts in Python and SQL to detect ingestion errors in real-time.",
      features: [
        "Automated daily data quality pipelines with 99.9% reporting accuracy",
        "Source-to-target reconciliation across Snowflake, SQL Server, and DB2",
        "Dynamic customer segmentation by risk profile and spending behavior",
        "PII Masking and Row-Level Security for sensitive financial data"
      ],
      impact: "Identified $1.2M in at-risk revenue and reduced false positive risk alerts by 20%, while correcting a P&L misclassification impacting 2.4M records.",
      future: [
        "Predictive Modeling: Add ML layer for default probability.",
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
      solution: "Built a containerized Machine Learning microservice that ingests academic and socio-economic data to predict dropout probability. Used SHAP values (XAI) to surface specific attrition drivers for advisors.",
      features: [
        "Random Forest Classifier with 89% accuracy",
        "Explainable AI (XAI) integration for driver identification",
        "Dockerized API for seamless service-layer deployment",
        "Automated data ingestion from PostgreSQL SIS"
      ],
      impact: "Enabled targeted interventions that contributed to over $2M in retained tuition revenue with an 89% model accuracy rate.",
      future: [
        "Cloud Deployment: Deploy to AWS ECS for auto-scaling.",
        "Real-time Integration: Connect to SIS for live data feed."
      ]
    }
  },
  {
    title: "Market Opportunity & Marketing Funnel Optimization",
    description: "Engineered an ROI engine tracking customers from Impression to Repeat Visit, identifying a 12% ROI lift and $400K annual revenue opportunity through budget reallocation.",
    technologies: ["SQL", "Power BI", "Python (Pandas)", "Marketing Analytics", "ROI Modeling"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "Marketing spend was misallocated across five regions due to a 3-day latency in reporting and a lack of visibility into Customer Acquisition Cost (CAC) vs. LTV.",
      solution: "Developed an end-to-end Marketing Funnel & ROI engine in Python and SQL. Compressed the reporting cycle to same-day delivery using star-schema modeling in Power BI.",
      features: [
        "Regional CAC vs. LTV analysis for budget optimization",
        "Funnel conversion tracking (Impression → Visit → Order → Repeat)",
        "Automated ROI modeling to project revenue lift from retention",
        "Interactive executive dashboard for regional performance monitoring"
      ],
      impact: "Recommended a 30% budget reallocation toward high-performing locations, projecting a 12% lift in regional ROI and a $400K annual revenue lift.",
      future: [
        "A/B Testing: Implement automated tracking for retention experiments.",
        "Predictive LTV: Integrate ML to forecast individual customer value."
      ]
    }
  }
];
