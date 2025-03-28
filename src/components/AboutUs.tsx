
import { useState } from "react";

const AboutUs = () => {
  // This state can be used to toggle visibility directly in code
  const [isVisible] = useState(true);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <div className="w-16 h-1 bg-orange-500 mt-4 mb-6"></div>
        </div>

        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Founder and CEO"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-orange-500 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 border-2 border-black rounded-full -z-10"></div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-orange-500 font-medium mb-4">Founder & CEO</p>
              
              <p className="text-gray-700 mb-4">
                With over 15 years of experience in the IT industry, John leads our team with vision and expertise. His passion for leveraging technology to solve business challenges drives our company's mission.
              </p>
              
              <p className="text-gray-700 mb-6">
                Under his leadership, VR Best Solutions has grown from a small startup to a trusted provider of comprehensive IT-enabled services for businesses of all sizes.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
