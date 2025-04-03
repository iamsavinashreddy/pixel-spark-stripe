
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">VR</div>
              <h3 className="text-xl font-bold">Best Solutions</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with cutting-edge IT-enabled services and solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Website Designing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Payment Gateways</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Graphics Designing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-orange-500 transition-colors">Clients</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 text-orange-500 flex-shrink-0" size={18} />
                <a href="tel:+13073872378" className="text-gray-400 hover:text-orange-500 transition-colors">+1 (307) 387-2378</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-orange-500 flex-shrink-0" size={18} />
                <a href="mailto:it@vrbest.group" className="text-gray-400 hover:text-orange-500 transition-colors">it@vrbest.group</a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-orange-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">PO Box 3067, PA, 17011</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {currentYear} VR Best Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
