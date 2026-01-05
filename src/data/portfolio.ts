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
      "Owned end-to-end BI delivery including data extraction from Snowflake, SQL-based ELT workflows, Power BI data modeling, DAX development, and dashboard deployment.",
      "**Impact:** Reduced report generation time by approximately 40% through optimized SQL and Snowflake data warehouse management.",
      "**Action:** Developed standardized DAX measures and Power BI data models to improve reporting consistency and enable deep-dive trend analysis across departments.",
      "**Automation:** Automated recurring Excel and Python (pandas) workflows to reduce manual reporting effort and minimize data quality issues.",
      "Collaborated with operations and management teams to define reporting requirements and deliver scalable BI solutions that improved company performance."
    ]
  },
  {
    company: "TEK Leaders Pvt. Ltd.",
    role: "Data Analyst",
    location: "Hyderabad, India",
    period: "Jun 2020 - Jun 2022",
    description: [
      "Analyzed payroll, HR, and financial datasets using SQL, Snowflake, and Python to support accurate workforce and compensation reporting.",
      "**Action:** Designed and maintained Power BI dashboards for leadership, providing visibility into payroll trends, utilization metrics, and operational KPIs.",
      "**Impact:** Streamlined financial reporting processes through automation and optimized SQL queries, significantly reducing manual turnaround time.",
      "**Strategy:** Conducted trend and cohort-based analysis to identify workforce patterns and cost drivers, directly informing weekly payroll decisions.",
      "Documented data sources and business logic to support audit readiness and long-term maintainability."
    ]
  },
  {
    company: "Qualcomm India Pvt. Ltd.",
    role: "Jr Data Analyst",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "Managed and analyzed large-scale payroll and financial datasets to identify inefficiencies and optimize workforce planning models.",
      "**Impact:** Developed Tableau dashboards that enabled leaders to quickly understand financial performance, leading to more effective decisions.",
      "**Action:** Redesigned payroll reporting workflows by automating error checks, achieving a 20% increase in accuracy and 30% reduction in processing time.",
      "**Compliance:** Ensured 100% accuracy of SEC and internal compliance reporting through meticulous data reconciliation during audits.",
      "Delivered actionable insights that directly increased budgeting accuracy and enabled more effective workforce planning for executives."
    ]
  }
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
      impact: "Enabled real-time tracking of $2M+ in sales revenue. Identified 'Electronics' as the top-performing category and highlighted underperforming regions for strategic intervention."
    }
  },
  {
    title: "Streamflow Data Analysis",
    description: "Automated USGS streamflow monitoring system that fetches real-time hydrological data, performs statistical trend analysis, and generates automated daily visualizations.",
    technologies: ["Python", "Pandas", "Scipy", "GitHub Actions", "USGS API"],
    githubUrl: "https://github.com/saivineethreddysuravi/contribution-streamflow",
    details: {
      problem: "Monitoring streamflow manually across hundreds of USGS sites is time-consuming and prone to human error, making early flood detection difficult.",
      solution: "Developed an automated Python pipeline that fetches real-time data from the USGS Water Services API, calculates statistical trends, and triggers alerts for anomalies.",
      features: [
        "Real-time data ingestion via USGS API",
        "Automated statistical analysis (Mean, Median, Percentiles)",
        "Trend detection using Linear Regression (SciPy)",
        "Daily automated visualizations committed to repo via GitHub Actions"
      ],
      impact: "Reduced data collection time by 100%. Provides daily automated health checks for river systems, enabling faster response to flood risks."
    }
  },
  {
    title: "Credit Card Financial Dashboard",
    description: "Strategic USA market analysis of credit card trends, risk factors, and revenue streams using advanced Power BI visualizations.",
    technologies: ["Power BI", "PostgreSQL", "SQL ETL", "DAX"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
    details: {
      problem: "Financial institutions needed a way to monitor credit risk and customer spending behavior to optimize credit limit offers.",
      solution: "Created a comprehensive dashboard connecting to a PostgreSQL database to visualize credit card transaction trends and customer demographics.",
      features: [
        "Real-time transaction monitoring",
        "Customer segmentation by income and credit score",
        "Risk analysis visualizations",
        "Revenue breakdown by card category (Blue, Silver, Gold)"
      ],
      impact: "Provided actionable insights into customer spending patterns, helping to tailor marketing strategies and adjust credit risk policies."
    }
  },
  {
    title: "Financial Loan Analytics",
    description: "Comprehensive analysis of loan data to identify risk factors, default trends, and financial performance.",
    technologies: ["SQL", "Excel", "Data Analysis", "Tableau"],
    githubUrl: "https://github.com/saivineethreddysuravi/financial-loan-analytics",
    details: {
      problem: "High default rates on personal loans were affecting the bank's profitability, with no clear understanding of the contributing factors.",
      solution: "Performed a deep-dive analysis using SQL and Tableau to identify correlations between loan grade, interest rates, and default probability.",
      features: [
        "Loan grade risk assessment",
        "Default trend analysis over time",
        "Borrower demographic profiling",
        "Interest rate vs. default correlation study"
      ],
      impact: "Revealed that Grade D and E loans had a 3x higher default rate. Recommendations led to stricter lending criteria for high-risk profiles."
    }
  },
  {
    title: "Workforce Retention Dashboard",
    description: "HR analytics dashboard focused on employee retention, turnover rates, and workforce demographics.",
    technologies: ["Tableau", "HR Analytics", "Data Visualization", "SQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard",
    details: {
      problem: "HR leadership noticed an uptick in employee turnover but couldn't pinpoint the departments or reasons behind it.",
      solution: "Built a Tableau dashboard tracking attrition rates, employee satisfaction scores, and tenure distribution.",
      features: [
        "Attrition rate calculation by department",
        "Demographic breakdown (Age, Gender, Tenure)",
        "Satisfaction score correlation analysis",
        "Exit interview trend visualization"
      ],
      impact: "Identified 'Sales' department as having the highest turnover due to low satisfaction. Initiated a retention program that reduced attrition by 10% in Q3."
    }
  },
  {
    title: "Student Dropout Prediction",
    description: "Machine learning project using Django and Scikit-Learn to predict student dropout rates based on educational data.",
    technologies: ["Python", "Scikit-Learn", "Django", "Machine Learning", "PostgreSQL"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
    details: {
      problem: "Universities face high dropout rates (25-30%) but lack early warning systems to identify at-risk students before they leave.",
      solution: "Built a full-stack Machine Learning web application that predicts student dropout probability with 89% accuracy using historical academic data.",
      features: [
        "Random Forest Classifier (200 trees)",
        "Django Web Interface for real-time predictions",
        "Analysis of 36 distinct socio-economic and academic features",
        "Secure user authentication and history tracking"
      ],
      impact: "Achieved 89% prediction accuracy on test data. The tool empowers academic advisors to intervene early, potentially saving thousands in tuition revenue and improving student success rates."
    }
  },
  {
    title: "Restaurant Market Insights",
    description: "Market analysis of restaurant trends and consumer preferences to drive business strategy.",
    technologies: ["Python", "Pandas", "Market Research", "Seaborn"],
    githubUrl: "https://github.com/saivineethreddysuravi/restaurant-market-insights",
    details: {
      problem: "A restaurant chain wanted to expand but needed data-driven insights on location selection and menu pricing.",
      solution: "Analyzed customer review data and competitor pricing using Python and Pandas to identify market gaps.",
      features: [
        "Sentiment analysis of customer reviews",
        "Competitor pricing analysis",
        "Location-based demand heatmaps",
        "Menu item popularity trends"
      ],
      impact: "Recommended 3 optimal locations for expansion and a menu pricing strategy that maximized profit margins while remaining competitive."
    }
  },
  {
    title: "Hotel Booking Data Analysis",
    description: "Exploratory Data Analysis (EDA) of hotel booking cancellations, customer segments, and seasonal trends to optimize revenue strategies.",
    technologies: ["Python", "Pandas", "Seaborn", "EDA"],
    githubUrl: "https://github.com/saivineethreddysuravi/hotel-booking-analysis",
    details: {
      problem: "High cancellation rates were causing revenue leakage and forecasting difficulties for hotel management.",
      solution: "Conducted extensive EDA on booking data to identify the primary drivers of cancellations.",
      features: [
        "Correlation heatmap of cancellation factors",
        "Lead time vs. cancellation analysis",
        "Market segment performance review",
        "Deposit type impact study"
      ],
      impact: "Discovered that lead times >90 days had a 2x cancellation risk. Recommended non-refundable deposit policies for long-lead bookings."
    }
  }
];