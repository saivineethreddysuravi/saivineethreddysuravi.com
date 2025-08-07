import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6 text-gray-900">Let&apos;s Connect</h2>
        <p className="text-xl mb-8 font-light">
          I&apos;m excited to connect with you! Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center text-xl">
            <FaEnvelope className="mr-4 text-black" />
            <a href="mailto:svineethreddy@icloud.com" className="hover:text-gray-600 transition-colors duration-300">
              svineethreddy@icloud.com
            </a>
          </div>
          <div className="flex items-center text-xl">
            <FaPhone className="mr-4 text-black" />
            <span className="hover:text-gray-600 transition-colors duration-300">+1 901-930-8006</span>
          </div>
          <div className="flex items-center text-xl">
            <FaLinkedin className="mr-4 text-black" />
            <a
              href="https://www.linkedin.com/in/sai-vineeth-reddy-suravi-047433209"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-300"
            >
              linkedin.com/in/sai-vineeth-reddy-suravi
            </a>
          </div>
          <div className="mt-8">
            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
