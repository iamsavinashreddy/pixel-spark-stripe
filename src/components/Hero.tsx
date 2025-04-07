
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Your Business with{" "}
              <span className="text-orange-500">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              We provide cutting-edge IT-enabled services to help your business thrive in the digital age.
              From digital marketing to AI automation, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center gap-2 font-medium"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center font-medium"
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/vr-best-solutions-hero-1.jpg"
                alt="Digital Transformation"
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "500px"
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 border-2 border-black rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
