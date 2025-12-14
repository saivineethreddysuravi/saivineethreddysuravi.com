import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaChartBar, FaPython, FaFileExcel, FaChartLine, FaTable } from 'react-icons/fa';
import { SiTableau, SiPandas, SiNumpy, SiMysql } from 'react-icons/si';

export const personalInfo = {
  name: "Sai Vineeth Reddy Suravi",
  title: "Data Analyst | Business Intelligence Specialist",
  email: "saivineethreddysuravi@gmail.com",
  phone: "+1 (901) 930-8006",
  location: "Memphis, TN",
  summary: "Data Analyst with 5+ years of experience designing and implementing interactive dashboards and analytics solutions. Proven ability in Power BI, SQL, Python, and Excel to extract and visualize large datasets. Recognized for streamlining reporting workflows and delivering insights across finance, payroll, and operations.",
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
  }
];

export const experience = [
  {
    company: "StarTech Networks Inc.",
    role: "Data Analyst Intern",
    location: "Memphis, TN",
    period: "May 2025 - Present",
    description: [
      "Built Power BI dashboards with custom visuals and DAX for operational and workforce KPIs.",
      "Developed SQL queries for data extraction and reporting.",
      "Automated Excel/Python workflows to reduce manual work.",
      "Collaborated with teams to provide actionable insights.",
      "Led analysis initiatives for cross-team projects, including data cleansing processes that improved workflow visibility and scheduling efficiency."
    ]
  },
  {
    company: "TEK Leaders Pvt Ltd",
    role: "Senior Data Analyst",
    location: "Hyderabad, India",
    period: "Jun 2020 - Oct 2023",
    description: [
      "Analyzed payroll and HR data using SQL and advanced Excel to perform forecasting and deliver actionable insights.",
      "Created Power BI dashboards using R visualizations and custom visuals for team and management.",
      "Streamlined reports and automated workflows.",
      "Worked closely with HR and Finance stakeholders to clarify reporting requirements and deliver weekly insights that informed operational and payroll decisions."
    ]
  },
  {
    company: "Qualcomm India Pvt Ltd",
    role: "Finance Data Analyst",
    location: "Hyderabad, India",
    period: "Jan 2018 - Feb 2020",
    description: [
      "Managed payroll and financial data for large teams.",
      "Developed Tableau dashboards tracking large-scale workforce and operational metrics.",
      "Collaborated with cross-functional teams and performed code reviews to support business decisions.",
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
    period: "2014 - 2017"
  }
];

export const projects = [
  {
    title: "Hotel Booking Data Analysis",
    description: "Exploratory Data Analysis (EDA) of hotel booking cancellations, customer segments, and seasonal trends to optimize revenue strategies.",
    technologies: ["Python", "Pandas", "Seaborn", "EDA"],
    githubUrl: "https://github.com/saivineethreddysuravi/hotel-booking-analysis",
  },
  {
    title: "Credit Card Financial Dashboard",
    description: "Strategic USA market analysis of credit card trends, risk factors, and revenue streams using advanced Power BI visualizations.",
    technologies: ["Power BI", "SQL", "DAX", "Market Analysis"],
    githubUrl: "https://github.com/saivineethreddysuravi/credit-card-financial-dashboard",
  },
  {
    title: "Student Dropout Prediction",
    description: "Machine learning project using Django and Scikit-Learn to predict student dropout rates based on educational data.",
    technologies: ["Python", "Machine Learning", "Django", "Jupyter"],
    githubUrl: "https://github.com/saivineethreddysuravi/student-dropout-prediction",
  },
  {
    title: "Cycling Equipment Market Analysis",
    description: "Special strategic project analyzing global cycling market trends for 2023, featuring inventory optimization and regional performance KPIs.",
    technologies: ["Power BI", "Python", "Predictive Analytics", "Excel"],
    githubUrl: "https://github.com/saivineethreddysuravi/cycling-equipment-dashboard",
  },
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Power BI dashboard for tracking sales KPIs, regional performance, and product profitability.",
    technologies: ["Power BI", "DAX", "Data Analytics"],
    githubUrl: "https://github.com/saivineethreddysuravi/sales-performance-dashboard",
  },
  {
    title: "Financial Loan Analytics",
    description: "Comprehensive analysis of loan data to identify risk factors, default trends, and financial performance.",
    technologies: ["SQL", "Excel", "Data Analysis"],
    githubUrl: "https://github.com/saivineethreddysuravi/financial-loan-analytics",
  },
  {
    title: "Workforce Retention Dashboard",
    description: "HR analytics dashboard focused on employee retention, turnover rates, and workforce demographics.",
    technologies: ["Tableau", "HR Analytics", "Data Visualization"],
    githubUrl: "https://github.com/saivineethreddysuravi/workforce-retention-dashboard",
  },
  {
    title: "Restaurant Market Insights",
    description: "Market analysis of restaurant trends and consumer preferences to drive business strategy.",
    technologies: ["Python", "Pandas", "Market Research"],
    githubUrl: "https://github.com/saivineethreddysuravi/restaurant-market-insights",
  },
  {
    title: "Mexican Restaurant Analysis",
    description: "Deep dive data analysis into Mexican restaurant performance, location trends, and customer reviews.",
    technologies: ["Python", "Data Analysis", "Sentiment Analysis"],
    githubUrl: "https://github.com/saivineethreddysuravi/mexican-restaurant-analysis",
  },
  {
    title: "Snake Game",
    description: "Classic Snake game implementation using Python and Pygame.",
    technologies: ["Python", "Pygame", "Game Development"],
    githubUrl: "https://github.com/saivineethreddysuravi/snake-game",
  },
  {
    title: "Portfolio Website",
    description: "Modern, dark-themed personal portfolio website built with Next.js 15 and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/saivineethreddysuravi/saivineethreddysuravi.com",
    liveUrl: "https://saivineethreddysuravi.com",
  }
];