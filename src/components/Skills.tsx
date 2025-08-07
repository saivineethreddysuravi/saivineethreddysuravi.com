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
    <section id="skills" className="py-20 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 text-gray-900">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
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
