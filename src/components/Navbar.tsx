
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">          
          <Link 
            to="/" 
            className="flex items-center gap-2 py-2" 
            aria-label="VR Best Group Home">
            <img 
              src="https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/vr-best-group-logo1.png"
              alt="VR Best Solutions - IT Enabled Services" 
              className="logo-container object-contain"
              width="180"
              height="60"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-black hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#about" className="text-black hover:text-orange-500 transition-colors">
              About Us
            </a>
            <a href="#clients" className="text-black hover:text-orange-500 transition-colors">
              Clients
            </a>
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <button className="md:hidden text-black" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out shadow-md",
          isMenuOpen ? "max-h-[400px] py-4" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#services"
            className="text-black hover:text-orange-500 transition-colors py-2"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-black hover:text-orange-500 transition-colors py-2"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#clients"
            className="text-black hover:text-orange-500 transition-colors py-2"
            onClick={toggleMenu}
          >
            Clients
          </a>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors inline-block"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
