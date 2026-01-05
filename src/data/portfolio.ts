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
    title: "Credit Card Financial Dashboard",
    description: "Strategic USA market analysis of credit card trends, risk factors, and revenue streams using advanced Power BI visualizations.",
    technologies: ["Power BI", "SQL", "Excel", "DAX"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions needed a way to monitor credit risk, revenue streams, and customer spending behavior to optimize credit limit offers and minimize default rates.",
      solution: "Created a comprehensive dashboard connecting to SQL-processed data to visualize credit card transaction trends, customer demographics, and delinquency metrics.",
      features: [
        "Real-time transaction monitoring by card category (Blue, Silver, Gold)",
        "Customer segmentation by income, age group, and credit score",
        "Delinquency risk analysis highlighting late payment trends",
        "Week-over-week revenue and transaction volume comparison"
      ],
      impact: "Provided actionable insights into customer spending patterns, helping to tailor marketing strategies and adjust credit risk policies to reduce potential losses.",
      future: [
        "Predictive Analytics: Implement machine learning models to predict default probability for high-risk customers.",
        "Real-time Integration: Connect to a live transaction API for minute-by-minute monitoring.",
        "Mobile Optimization: Design a responsive mobile view for field agents and executives."
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
    title: "Student Dropout Prediction",
    description: "Machine learning project using Django and Scikit-Learn to predict student dropout rates based on educational data.",
    technologies: ["Python", "Scikit-Learn", "Django", "Machine Learning", "PostgreSQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities face high dropout rates (25-30%) but lack early warning systems to identify at-risk students before they leave, impacting institutional reputation and revenue.",
      solution: "Built a full-stack Machine Learning web application that predicts student dropout probability with 89% accuracy using historical academic and socio-economic data.",
      features: [
        "Random Forest Classifier (200 trees) for high-accuracy predictions",
        "Secure Django Web Interface for real-time student assessment",
        "Analysis of 36 distinct features including academic performance and economic factors",
        "Admin dashboard for system management and prediction history tracking"
      ],
      impact: "Achieved 89% prediction accuracy on test data. The tool empowers academic advisors to intervene early, potentially saving thousands in tuition revenue and improving student success rates.",
      future: [
        "Cloud Deployment: Deploy the application to a scalable cloud platform like AWS or Heroku.",
        "Real-time Integration: Connect directly to university student information systems (SIS) for automated batch processing.",
        "Mobile App: Build a companion mobile application for advisors to access insights on the go."
      ]
    }
  },
  {
    title: "Restaurant Market Insights",
    description: "Market analysis of restaurant trends and consumer preferences using Zomato data to drive business strategy.",
    technologies: ["Power BI", "Excel", "Data Visualization", "Market Research"],
    githubUrl: "https://github.com/saivineethreddysuravi/restaurant-market-insights",
    details: {
      problem: "A restaurant chain needed to identify high-potential locations for expansion but lacked data on consumer preferences, competitor pricing, and cuisine popularity in target zones.",
      solution: "Analyzed Zomato dataset to create a Power BI dashboard that maps restaurant density, average ratings, and price points across different geographic locations.",
      features: [
        "Geographic heatmaps showing clusters of high-rated restaurants",
        "Correlation analysis between 'Average Cost for Two' and customer ratings",
        "Cuisine popularity trends to identify market gaps",
        "Impact analysis of online delivery availability on restaurant success"
      ],
      impact: "Identified under-served high-demand zones for expansion. Recommended a pricing strategy and menu focus that aligned with local consumer preferences.",
      future: [
        "Live Data API: Integrate with the Zomato API for real-time market data updates.",
        "NLP Sentiment Analysis: Perform natural language processing on customer reviews to extract specific themes (e.g., 'service', 'ambiance').",
        "Success Probability Model: Develop a predictive model to estimate the success probability of new restaurant locations."
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