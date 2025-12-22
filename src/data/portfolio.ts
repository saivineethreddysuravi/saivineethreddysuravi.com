import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Data Analyst | Business Intelligence Specialist",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "8331 Curtis Landing Dr, Memphis, TN",
  summary: "Senior Data Analyst with 5+ years delivering financial and payroll reporting solutions. Experienced in SQL, Python, Excel, and Power BI to design and enhance reporting systems and streamline workflows. Strong collaborator with cross-functional teams to ensure data integrity and provide actionable financial insights. Committed to optimizing reporting processes for compliance and decision support.",
  social: {
    github: "https://github.com/saivineethreddysuravi",
    linkedin: "https://www.linkedin.com/in/saivineethreddysuravi",
  }
};

export const skills = [
  {
    category: "Business Intelligence & Visualization",
    items: [
      { name: "Power BI", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi/sales-performance-dashboard" },
      { name: "Tableau", icon: SiTableau, link: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard" },
      { name: "DAX", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/sales-performance-dashboard" },
      { name: "Data Visualization", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/sales-performance-dashboard" },
    ]
  },
  {
    category: "Data Manipulation & Analysis",
    items: [
      { name: "Python", icon: FaPython, link: "https://github.com/saivineethreddysuravi/student-dropout-prediction" },
      { name: "Pandas", icon: SiPandas, link: "https://github.com/saivineethreddysuravi/restaurant-market-insights" },
      { name: "NumPy", icon: SiNumpy, link: "https://github.com/saivineethreddysuravi/restaurant-market-insights" },
      { name: "Excel (PivotTables, Power Query)", icon: FaFileExcel, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
    ]
  },
  {
    category: "Database & Query",
    items: [
      { name: "SQL", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "MySQL", icon: SiMysql, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "SQL Server", icon: FaDatabase, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
    ]
  },
  {
    category: "Professional & Analytical",
    items: [
      { name: "Financial Analysis", icon: FaChartLine, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "Forecasting & Budgeting", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "SEC Reporting", icon: FaFileExcel, link: "https://github.com/saivineethreddysuravi/financial-loan-analytics" },
      { name: "Analytical Skills", icon: FaChartBar, link: "https://github.com/saivineethreddysuravi" },
    ]
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Data Analyst Intern",
    location: "Memphis, TN",
    period: "May 2025 - Present",
    description: [
      "Built Power BI dashboards for operational and workforce KPIs that enhanced reporting efficiency and facilitated timely business decisions.",
      "Developed and optimized SQL queries for data extraction and reporting, reducing report generation time by 40% and enabling teams to make quicker, data-driven decisions.",
      "Automated Excel and Python workflows using pandas to reduce manual work.",
      "Collaborated with teams to provide actionable insights using strong analytical skills, fostering improved business strategies and informed decision-making.",
      "Led analysis initiatives for cross-team projects improving workflow visibility and scheduling efficiency."
    ]
  },
  {
    company: "TEK Leaders Pvt Ltd",
    role: "Senior Data Analyst",
    location: "Hyderabad, India",
    period: "Jun 2020 - [Month] 2023",
    description: [
      "Analyzed payroll and HR data for 500+ employees using SQL and Excel to perform forecasting and deliver actionable insights.",
      "Created Power BI dashboards for team and management.",
      "Streamlined financial reporting processes and automated workflows.",
      "Worked closely with HR and Finance teams to improve processes, partnered with managers to deliver weekly insights that informed operational and payroll decisions."
    ]
  },
  {
    company: "Qualcomm India Pvt Ltd",
    role: "Finance Data Analyst",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "Managed payroll and financial data for 1000+ employees, performing budget analysis and financial forecasting.",
      "Developed Tableau dashboards for data visualization, tracking workforce and operational metrics.",
      "Collaborated with cross-functional teams to support business decisions and contributed to SEC reporting deliverables.",
      "Streamlined payroll reporting processes, improving accuracy and efficiency across departments.",
      "Provided actionable insights to leadership for workforce planning and cost management."
    ]
  }
];

export const education = [
  {
    institution: "Christian Brothers University",
    location: "Memphis, TN",
    degree: "M.S., Management Information Systems",
    period: "Jan 2024 - Dec 2025"
  },
  {
    institution: "Narasimha Reddy Engineering College",
    location: "Hyderabad, India",
    degree: "B.Tech, Computer Science Engineering",
    period: "2014 - 2018"
  }
];

export const projects = [
  {
    title: "Streamflow Data Analysis",
    description: "Automated USGS streamflow monitoring system that fetches real-time hydrological data, performs statistical trend analysis, and generates automated daily visualizations.",
    technologies: ["Python", "Pandas", "Scipy", "GitHub Actions", "USGS API"],
    githubUrl: "https://github.com/saivineethreddysuravi/USGS_Streamflow-analysis",
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
    title: "Cycling Equipment Market Analysis",
    description: "Special strategic project analyzing global cycling market trends for 2023, featuring inventory optimization and regional performance KPIs.",
    technologies: ["Power BI", "Python", "Predictive Analytics", "Excel"],
    githubUrl: "https://github.com/saivineethreddysuravi/cycling-equipment-dashboard",
    details: {
      problem: "A global cycling retailer struggled with inventory mismanagement and unclear regional sales performance.",
      solution: "Delivered a strategic market analysis report combining Python for predictive modeling and Power BI for visual reporting.",
      features: [
        "Inventory turnover analysis",
        "Regional sales performance heatmaps",
        "Product demand forecasting",
        "Profit margin analysis by SKU"
      ],
      impact: "Identified key growth regions in Europe and optimized inventory levels, reducing carrying costs by 15%."
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
    title: "Mexican Restaurant Analysis",
    description: "Deep dive data analysis into Mexican restaurant performance, location trends, and customer reviews.",
    technologies: ["Python", "Data Analysis", "Sentiment Analysis", "NLP"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
    details: {
      problem: "Understanding the specific factors driving positive vs. negative reviews for Mexican cuisine in a competitive market.",
      solution: "Utilized Natural Language Processing (NLP) to analyze thousands of text reviews and extract key sentiment drivers.",
      features: [
        "NLP-based sentiment extraction",
        "Keyword frequency analysis (e.g., 'Authentic', 'Spicy')",
        "Rating distribution analysis",
        "Service vs. Food quality correlation"
      ],
      impact: "Highlighted that 'Authenticity' and 'Service Speed' were the top drivers of 5-star ratings, guiding operational improvements."
    }
  },
  {
    title: "Snake Game",
    description: "Classic Snake game implementation using Python and Pygame.",
    technologies: ["Python", "Tkinter", "Game Logic"],
    githubUrl: "https://github.com/saivineethreddysuravi/snake-game",
    details: {
      problem: "Demonstrating core programming concepts and object-oriented design in Python.",
      solution: "Developed a fully functional Snake game with score tracking, increasing difficulty, and collision detection.",
      features: [
        "Real-time game loop",
        "Object-Oriented Design (Snake, Food, Game classes)",
        "Score tracking system",
        "Collision detection algorithms"
      ],
      impact: "Served as a fun, interactive portfolio piece demonstrating strong command of Python logic and control flow."
    }
  },
  {
    title: "Portfolio Website",
    description: "Modern, dark-themed personal portfolio website built with Next.js 15 and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/saivineethreddysuravi/saivineethreddysuravi.com",
    liveUrl: "https://saivineethreddysuravi.com",
    details: {
      problem: "Needed a unique, professional platform to showcase data analytics projects that stands out from standard templates.",
      solution: "Built a custom, responsive Next.js application with a 'Space/Dashboard' theme, featuring advanced animations and a global search system.",
      features: [
        "Global Command Search (⌘K style)",
        "Framer Motion layout animations",
        "Deep Space theme with CSS-generated stars",
        "Responsive Grid Layout"
      ],
      impact: "Provides a premium user experience for recruiters, effectively communicating technical skills in both Data and Web Development."
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