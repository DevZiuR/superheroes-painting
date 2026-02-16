import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Building2, Phone, Mail } from "lucide-react";
import logo from "../assets/logo-new.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-900 font-sans">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative mb-20">
          <div className="max-w-2xl z-10">
            <h2 className="text-4xl md:text-5xl font-medium font-onest tracking-tight mb-8 leading-tight">
              Looking to revitalize your property with expert painting?
            </h2>
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-[#AC96B6] text-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 font-onest"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Decorative Illustration */}
          <div className="mt-10 md:mt-0 opacity-20 relative">
            <Building2 className="w-48 h-48 stroke-1 text-gray-500" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-16"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="mb-6">
              <img
                src="https://superherospainting.com/wp-content/uploads/2021/12/LOGO-1.png"
                alt="Super Heros Painting LLC"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Expert Painting Services for Residential, Commercial, and Industrial Projects.
              Delivering quality and reliability across Sacramento and nearby areas.
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-xs font-bold font-onest text-gray-500 uppercase tracking-widest mb-6">Contact Info</h4>
              <address className="not-italic text-lg font-medium space-y-2">
                <p>180 Promenade Circle, Suite 340,</p>
                <p>Sacramento, CA 95834</p>
              </address>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold font-onest text-gray-500 uppercase tracking-widest mb-2">Looking for expedited assistance?</h4>
              <div className="space-y-2">
                <a href="mailto:hello@superherospainting.com" className="block text-xl font-medium hover:text-gray-300 transition-colors">
                  hello@superherospainting.com
                </a>
                <a href="tel:9168076156" className="block text-xl font-medium hover:text-gray-300 transition-colors">
                  (916) 807-6156
                </a>
              </div>
            </div>
          </div>

          {/* Pages (Span 2) */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold font-onest text-gray-500 uppercase tracking-widest mb-6">Pages</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gray-300 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('locations')} className="hover:text-gray-300 transition-colors">Areas Served</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Legal/Other (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-bold font-onest text-gray-500 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium pt-8 border-t border-gray-900">
          <p>© {currentYear} Super Heros Painting LLC.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p>Sacramento's Premier Painting Service</p>
            <span className="hidden md:block text-gray-800">|</span>
            <a
              href="https://www.instagram.com/ziur.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors tracking-[0.2em] font-bold text-[10px] uppercase"
            >
              Powered by ZiuR Studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;