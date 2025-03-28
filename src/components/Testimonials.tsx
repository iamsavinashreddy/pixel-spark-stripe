
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Their digital marketing strategies completely transformed our online presence. We saw a 200% increase in leads within the first three months!",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=80&h=80&fit=crop&crop=faces",
  },
  {
    quote: "The AI automation solution they implemented has saved us countless hours on repetitive tasks. Our team can now focus on more strategic initiatives.",
    author: "David Chen",
    position: "CTO, Innovate Inc",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=80&h=80&fit=crop&crop=faces",
  },
  {
    quote: "Our new website is not only beautiful but also highly functional. The user experience has improved dramatically, and so has our conversion rate.",
    author: "Emma Rodriguez",
    position: "CEO, Digital Solutions",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=80&h=80&fit=crop&crop=faces",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-orange-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/90">
            Don't just take our word for it. Hear what our clients have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <div className="text-2xl text-orange-500 mb-6">"</div>
                        <p className="text-lg mb-6">{testimonial.quote}</p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white text-orange-500 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="bg-white text-orange-500 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
