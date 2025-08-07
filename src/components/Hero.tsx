import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Sai Vineeth Reddy Suravi
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Data Analyst | SQL | Python | Power BI | Business Intelligence | Data Visualization
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
