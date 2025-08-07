import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-gray-800 bg-white"
    >
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4 tracking-tighter">
          Sai Vineeth Reddy Suravi
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
          A Team Player, Driven by Data and Fueled by a Passion for Excellence.
        </p>
        <a
          href="#contact"
          className="bg-black text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
