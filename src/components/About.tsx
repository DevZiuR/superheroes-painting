import { CheckCircle2 } from "lucide-react";
import aboutPro from "../assets/about-pro.png";

const About = () => {
  const checkItems = [
    "Experience and Expertise",
    "On-Time, On-Budget",
    "Quality Craftsmanship",
    "Safety and Compliance",
    "Client-Centered Approach",
    "Innovative Solutions",
  ];

  const stats = [
    { label: "CLIENT SATISFACTION", value: "100%" },
    { label: "YEARS OF PAINTING EXPERTISE", value: "15+" },
    { label: "COMPLETED PROJECTS", value: "100+" },
    { label: "COMMERCIAL PROJECTS", value: "5+" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block px-3 py-1 border border-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
                OUR COMMITMENT
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                At Super Heros Painting LLC, we understand that choosing the right painting partner is
                crucial for the success of your project. Here's why Super Heros Painting is the best choice
                for your residential and commercial needs in Sacramento:
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <span className="text-4xl md:text-5xl font-normal text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[500px] md:h-[600px] lg:h-full min-h-[500px]">
            <div className="absolute inset-0">
              <img
                src={"https://superherospainting.com/wp-content/uploads/2025/11/AI-LOGO3.jpg"}
                alt="Professional Painting Crew"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;