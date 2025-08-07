import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "Cybersecurity",
    "Cloud Security",
    "Data Science",
    "SQL",
    "Python",
    "Power BI",
    "Business Intelligence",
    "Data Visualization",
    "Tableau",
    "SSIS",
    "Excel",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
