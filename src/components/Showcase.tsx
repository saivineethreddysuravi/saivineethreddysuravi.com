
import React from 'react';
import Image from 'next/image';

interface ShowcaseCardProps {
  title: string;
  imageUrl: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <Image src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" width={500} height={500} />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl font-black tracking-wider uppercase">{title}</h3>
      </div>
    </div>
  );
};

const Showcase: React.FC = () => {
  const showcases = [
    {
      title: "The Professional",
      imageUrl: "https://i.ibb.co/yYgKA0H/professional.png",
    },
    {
      title: "The Sportsman",
      imageUrl: "https://i.ibb.co/9N2xY5B/sportsman.png",
    },
    {
      title: "The Team Player",
      imageUrl: "https://i.ibb.co/yYgKA0H/professional.png",
    },
  ];

  return (
    <section id="showcase" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 text-gray-900">One Person, Many Passions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <ShowcaseCard key={index} {...showcase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
