
import { useRef, useEffect } from "react";

const brandLogos = [
  {
    name: "Maruthi Agro",
    logo: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/ma-logo-1b.png",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  },
  {
    name: "Maruthi Agro",
    logo: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/ma-logo-1b.png",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  },
  {
    name: "Maruthi Agro",
    logo: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/ma-logo-1b.png",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  },
];

const Clients = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We've had the privilege of working with leading brands across various industries.
          </p>
        </div>

        {/* Auto-scrolling brand logos */}
        <div className="relative overflow-hidden mb-16">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex space-x-12 py-4 animate-scroll">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[160px] h-20"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
