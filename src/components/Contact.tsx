import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center text-xl">
            <FaEnvelope className="mr-3 text-blue-400" />
            <span>svineethreddy@icloud.com</span>
          </div>
          <div className="flex items-center text-xl">
            <FaPhone className="mr-3 text-blue-400" />
            <span>+1 901-930-8006</span>
          </div>
          <div className="flex items-center text-xl">
            <FaLinkedin className="mr-3 text-blue-400" />
            <a
              href="https://www.linkedin.com/in/sai-vineeth-reddy-suravi-047433209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center text-xl">
            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            >
              View Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
