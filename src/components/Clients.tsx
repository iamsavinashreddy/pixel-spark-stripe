
import { useRef, useEffect } from "react";

const clients = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/techcorp",
  },
  {
    name: "Innovate Inc",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/innovate",
  },
  {
    name: "Digital Solutions",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/digital",
  },
  {
    name: "WebExperts",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/webexperts",
  },
  {
    name: "MarketPro",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/marketpro",
  },
  {
    name: "BrandBuilders",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/brandbuilders",
  },
  {
    name: "CreativeMinds",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&crop=top",
    url: "https://example.com/creativeminds",
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
            We've had the privilege of working with amazing clients across various industries.
          </p>
        </div>

        {/* Auto-scrolling client logos */}
        <div className="relative overflow-hidden mb-16">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex space-x-12 py-4 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <a 
                  key={index} 
                  href={client.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[200px] h-24"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
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
