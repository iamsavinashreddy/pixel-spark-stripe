
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing solutions including SEO, social media marketing, and PPC campaigns.",
    icon: "🚀",
  },
  {
    title: "Website Designing",
    description: "Get a stunning, responsive website that reflects your brand identity and engages your audience effectively.",
    icon: "🎨",
  },
  {
    title: "Payment Gateways",
    description: "Implement secure and seamless payment solutions for your business with our payment gateway integration services.",
    icon: "💳",
  },
  {
    title: "AI Automation",
    description: "Streamline your business processes with our AI-powered automation solutions. Save time and reduce errors.",
    icon: "🤖",
  },
  {
    title: "Graphics Designing",
    description: "Stand out with eye-catching graphics for your brand, designed by our creative team of graphic designers.",
    icon: "✏️",
  },
  {
    title: "Business Cards & Flyers",
    description: "Make a lasting impression with professionally designed business cards, flyers, and other marketing materials.",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a wide range of IT-enabled services to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group hover:border-orange-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
