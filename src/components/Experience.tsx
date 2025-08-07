import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, duration, location, description }) => {
  return (
    <div className="mb-12 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-xl text-gray-700 mb-1">{company}</p>
      <p className="text-md text-gray-500 mb-4">{duration} | {location}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Systems Analyst",
      company: "Tek Leaders Ind Pvt Ltd",
      duration: "June 2020 - October 2022 (2 years 5 months)",
      location: "Hyderabad, Telangana, India",
      description: [
        "Developed and optimized SQL queries to extract, clean, and transform payroll data, improving accuracy and compliance.",
        "Designed dynamic Power BI dashboards to provide real-time payroll analytics, enabling senior management to make data-driven decisions.",
        "Automated payroll ETL processes using SSIS, reducing manual effort by 40% and improving efficiency.",
        "Conducted trend analysis on payroll expenses and labor costs, identifying optimization opportunities.",
      ],
    },
    {
      title: "Financial Data and Systems Analyst",
      company: "Qualcomm",
      duration: "January 2018 - February 2020 (2 years 2 months)",
      location: "Hyderabad, Telangana, India",
      description: [
        "Managed payroll data processing and reconciliation using SQL and Excel, ensuring accurate financial reporting.",
        "Developed SQL scripts to automate tax reconciliation, saving 30+ hours per month in manual work.",
        "Created financial dashboards in Tableau and Power BI, providing insights into workforce trends and payroll expenses.",
        "Implemented automated ETL workflows using SSIS, enhancing data consistency and reducing processing time.",
        "Conducted deep-dive analysis of payroll metrics, supporting cost forecasting and workforce planning.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 text-gray-900">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
