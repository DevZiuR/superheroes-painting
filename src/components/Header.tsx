import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:9168076156";
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", id: "services", hasDropdown: true },
    { name: "About", id: "about" },
    { name: "Areas Served", id: "locations" },
    { name: "Contact", id: "contact" },
  ];

  const serviceItems = [
    "Interior Painting",
    "Exterior Painting",
    "Commercial Painting",
    "Residential Painting"
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-[#7908BD] text-white py-2 border-b border-white/10 relative z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] font-onest">
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Star className="w-3 h-3 fill-white" />
              #1 Trusted Painters in Northern CA
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-6 w-full sm:w-auto">
            <span className="hidden lg:inline">Expert Residential & Commercial Services</span>
            <a href="tel:9168076156" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1 transition-all duration-300 rounded-none border border-white/20">
              <Phone className="w-3 h-3" /> (916) 807-6156
            </a>
          </div>
        </div>
      </div>

      <div className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "mt-2 mb-2" : "mt-4 sm:mt-6 mb-6"}`}>
        <div className="max-w-[1400px] mx-auto border border-white/20 bg-white/5 backdrop-blur-sm rounded-none md:rounded-sm flex items-stretch min-h-[70px]">

          {/* Logo Section */}
          <div className="flex items-center px-6 border-r border-white/20 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="https://superherospainting.com/wp-content/uploads/2021/12/LOGO-1.png"
              alt="Super Heros Painting LLC"
              className={`h-12 w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end items-center px-8 border-r border-white/20">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative group h-full flex items-center">
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-white hover:text-gray-300 font-bold font-onest text-sm tracking-wider uppercase transition-colors flex items-center gap-1 py-4"
                      >
                        {link.name}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute top-[calc(100%+10px)] -left-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-black border border-white/10 shadow-xl overflow-hidden min-w-[240px]">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={(e) => {
                                e.stopPropagation();
                                scrollToSection("services");
                              }}
                              className="w-full text-left px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-white text-sm font-medium transition-colors border-b border-white/5 last:border-0"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-gray-300 font-bold font-onest text-sm tracking-wider uppercase transition-colors py-4"
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Contact Button Section */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="h-full px-10 bg-black hover:bg-gray-900 border-l border-white/20 text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Call Us
            </button>
          </div>

          {/* Mobile Menu Button - Right aligned within the flex container logic if needed, or absolute */}
          <div className="lg:hidden flex-1 flex justify-end items-center px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`fixed inset-0 ${scrolled ? "top-[125px]" : "top-[155px]"} bg-black z-40 lg:hidden animate-fade-in border-t border-gray-800`}>
          <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
            <div className="space-y-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="border-b border-gray-800 pb-4">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-left text-lg font-bold text-white mb-2 uppercase tracking-wide"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      {servicesOpen && (
                        <div className="flex flex-col gap-3 pl-4 mt-2 animate-slide-down">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={() => scrollToSection("services")}
                              className="text-gray-300 hover:text-white text-base font-medium text-left flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-lg font-bold text-white border-b border-gray-800 pb-4 uppercase tracking-wide"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <Button
                className="w-full bg-secondary text-black py-6 text-base font-bold uppercase tracking-wider rounded-none"
                onClick={() => scrollToSection("contact")}
              >
                Get a Free Quote
              </Button>
              <Button
                className="w-full bg-white/10 text-white hover:bg-white/20 py-6 text-base font-medium border border-white/20 rounded-none"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" /> (916) 807-6156
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;