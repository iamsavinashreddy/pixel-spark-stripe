
import { cn } from "@/lib/utils";
import { Code, PaintBucket, CreditCard, BrainCircuit, TrendingUp, FileText } from "lucide-react";

const services = [
  {
    title: "Application Development",
    description: "Custom web, mobile, and desktop application development tailored to your business needs with modern technologies and best practices.",
    icon: <Code className="w-8 h-8" />,
    highlightedDescription: "Custom <b>web</b>, <b>mobile</b>, and <b>desktop application</b> development tailored to your business needs with <b>modern technologies</b> and best practices."
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing solutions including SEO, social media marketing, and PPC campaigns.",
    icon: "🚀",
    highlightedDescription: "Boost your <b>online presence</b> with our comprehensive <b>digital marketing</b> solutions including <b>SEO</b>, <b>social media marketing</b>, and <b>PPC campaigns</b>."
  },
  {
    title: "Business Growth",
    description: "Strategic planning and implementation to help businesses grow, scale and achieve sustainable success in competitive markets.",
    icon: <TrendingUp className="w-8 h-8" />,
    highlightedDescription: "Strategic <b>planning</b> and <b>implementation</b> to help businesses <b>grow</b>, <b>scale</b> and achieve <b>sustainable success</b> in competitive markets."
  },
  {
    title: "Payment Gateways",
    description: "Implement secure and seamless payment solutions for your business with our payment gateway integration services.",
    icon: "💳",
    highlightedDescription: "Implement <b>secure</b> and <b>seamless payment</b> solutions for your business with our <b>payment gateway integration</b> services."
  },
  {
    title: "AI Automation",
    description: "Streamline your business processes with our AI-powered automation solutions. Save time and reduce errors.",
    icon: "🤖",
    highlightedDescription: "Streamline your business processes with our <b>AI-powered</b> automation solutions. <b>Save time</b> and <b>reduce errors</b>."
  },
  {
    title: "Graphics Designing",
    description: "Stand out with eye-catching graphics, website designs, business cards, flyers, and other marketing materials created by our creative team.",
    icon: <PaintBucket className="w-8 h-8" />,
    highlightedDescription: "Stand out with <b>eye-catching graphics</b>, <b>website designs</b>, <b>business cards</b>, <b>flyers</b>, and other <b>marketing materials</b> created by our creative team."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            We offer a wide range of IT-enabled services to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center">
                {typeof service.icon === "string" ? service.icon : service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">{service.title}</h3>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: service.highlightedDescription }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
