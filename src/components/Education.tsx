import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, duration }) => {
  return (
    <div className="mb-8 p-6 bg-gray-700 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-400 mb-1">{degree}</h3>
      <p className="text-xl text-gray-200 mb-1">{institution}</p>
      <p className="text-md text-gray-400">{duration}</p>
    </div>
  );
};

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science - MS, Computer Technology/Computer Systems Technology",
      institution: "Christian Brothers University",
      duration: "January 2024 - December 2025",
    },
    {
      degree: "Engineer's degree, Computer Science",
      institution: "Narasimha Reddy Engineering College",
      duration: "April 2014 - May 2017",
    },
    {
      degree: "Mathematics and Computer Science",
      institution: "Narayana Junior College - India",
      duration: "2012 - 2014",
    },
    {
      degree: "10th",
      institution: "St marks high school",
      duration: "2011 - 2012",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
