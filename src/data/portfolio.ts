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
    title: "Auto-Email Reachout Tool",
    description: "A productivity automation tool that streamlines job applications by generating personalized emails and managing bulk outreach using Python and AppleScript.",
    technologies: ["Python", "AppleScript", "macOS Mail API", "Automation"],
    githubUrl: "https://github.com/saivineethreddysuravi/auto-email-tool",
    details: {
      problem: "Applying for jobs manually is a time-consuming process. Copying recruiter emails, attaching resumes, and drafting repetitive messages for hundreds of roles leads to application fatigue and decreased efficiency.",
      solution: "Developed a background automation tool that monitors the clipboard for email addresses and interfaces directly with the macOS Mail app to instantly draft or send personalized emails with the resume already attached.",
      features: [
        "Clipboard Listener: Automatically detects when a recruiter's email is copied.",
        "Smart Greetings: Dynamically parses email addresses to generate personalized greetings (e.g., 'Hi John' vs. 'Hi Team').",
        "Bulk Sender: Automates outreach to large CSV lists with safety delays to prevent spam flagging.",
        "macOS Mail Integration: Uses AppleScript to control the system mail client, supporting attachments without complex SMTP setup.",
        "Duplicate Detection: Maintains a 'sent tracker' to ensure no recruiter is messaged twice."
      ],
      impact: "Reduced the time per manual application by 70%. Successfully automated 95+ targeted outreach emails in a single session, significantly increasing job search velocity.",
      future: [
        "LinkedIn Scraper: Integrate automated lead generation directly from LinkedIn job posts.",
        "Template Management: Support multiple email templates for different job roles (e.g., Data Analyst vs. Business Analyst).",
        "Cross-Platform Support: Implement support for Outlook and Gmail web via browser extensions."
      ]
    }
  },
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Power BI dashboard for tracking sales KPIs, regional performance, and product profitability.",
    technologies: ["Power BI", "DAX", "Data Analytics", "Power Query"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
    details: {
      problem: "Stakeholders lacked a unified view of sales performance, relying on scattered Excel sheets which made identifying regional trends impossible.",
      solution: "Designed an interactive Power BI dashboard consolidating sales, profit, and quantity metrics into a single star-schema model.",
      features: [
        "Decomposition Tree for root-cause profit analysis",
        "Dynamic slicers for Year, Region, and Segment",
        "Geospatial mapping of sales distribution",
        "Complex DAX measures for MoM and YoY growth"
      ],
      impact: "Enabled real-time tracking of $2M+ in sales revenue. Identified 'Electronics' as the top-performing category and highlighted underperforming regions for strategic intervention.",
      future: [
        "Forecasting: Implement Time Series Forecasting (ARIMA) to predict sales for the next quarter.",
        "Customer Segmentation: Use clustering techniques (K-Means) to identify high-value customer groups (RFM Analysis).",
        "Row-Level Security (RLS): Add role-based access for regional managers to view only their specific region's data."
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
    title: "Workforce Retention Dashboard",
    description: "HR analytics dashboard focused on employee retention, turnover rates, and workforce demographics.",
    technologies: ["Tableau", "HR Analytics", "Data Visualization", "SQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard",
    details: {
      problem: "HR leadership noticed an uptick in employee turnover but couldn't pinpoint the specific departments, job roles, or satisfaction levels driving the attrition.",
      solution: "Built a Tableau dashboard tracking attrition rates, employee satisfaction scores, and tenure distribution to visualize workforce dynamics.",
      features: [
        "Attrition rate calculation breakdown by department and job role",
        "Demographic analysis (Age, Gender, Marital Status)",
        "Correlation analysis between job satisfaction scores and exit rates",
        "Tenure distribution visualization to identify 'flight risk' periods"
      ],
      impact: "Identified 'Sales' department as having the highest turnover due to low satisfaction. Initiated a retention program that reduced attrition by 10% in Q3.",
      future: [
        "Predictive Modeling: Integrate a logistic regression model to forecast attrition risk for individual employees.",
        "Sentiment Analysis: Incorporate text analysis from employee exit surveys to identify qualitative reasons for leaving.",
        "Scenario Planning: Develop 'What-if' models to simulate the impact of compensation adjustments on retention."
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
    title: "Hotel Booking Data Analysis",
    description: "Exploratory Data Analysis (EDA) of hotel booking cancellations, customer segments, and seasonal trends to optimize revenue strategies.",
    technologies: ["Python", "Pandas", "Seaborn", "EDA"],
    githubUrl: "https://github.com/saivineethreddysuravi/hotel-booking-analysis",
    details: {
      problem: "High cancellation rates (~37%) and seasonal fluctuations were causing significant revenue leakage and making forecasting difficult for hotel management.",
      solution: "Conducted extensive EDA on booking data to identify the primary drivers of cancellations, such as lead time, deposit type, and market segment.",
      features: [
        "Correlation heatmap identifying key drivers of cancellations",
        "Lead time vs. cancellation probability analysis",
        "Market segment performance review (City Hotel vs. Resort Hotel)",
        "Deposit type impact study highlighting risks of 'Non-Refund' policies"
      ],
      impact: "Discovered that lead times >90 days had a 2x cancellation risk. Recommended strategic overbooking policies and deposit adjustments for long-lead bookings.",
      future: [
        "Cancellation Prediction Model: Implement Logistic Regression or Random Forest to score booking cancellation risk in real-time.",
        "Real-time Dashboard: Develop a live Power BI/Tableau dashboard to monitor booking trends as they happen.",
        "Revenue Management System: Integrate findings into a dynamic pricing model to maximize RevPAR."
      ]
    }
  }
];