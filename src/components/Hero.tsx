import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:9168076156";
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-end pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/9qXFzwksHjGeVftZhC1RDw/o.jpg"
          alt="Painting Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20">

          {/* Left Content: Typography */}
          <div className="max-w-4xl opacity-0 animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white" />
              <span className="text-white font-bold tracking-[0.2em] text-sm uppercase font-onest">
                Exceptional Painting Results, Every Time
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-onest leading-tight text-white uppercase mb-8">
              Northern California's <br />
              <span className="text-gray-200">Trusted Painting</span> <br />
              Experts for <span className="text-gray-200">Home & Business</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={handleCall}
                className="bg-[#7908BD] hover:bg-primary/90 text-white px-8 py-6 rounded-none font-medium text-base uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 font-onest"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>

          {/* Right Content: Stats Box */}
          <div className="w-full lg:w-auto min-w-[300px] opacity-0 animate-slide-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="grid grid-cols-2 divide-x divide-gray-700 bg-black/40 backdrop-blur-md border border-white/10 p-8">
              <div className="px-6 text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-semibold font-onest text-white mb-2">10+</h3>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wider font-onest">Years of<br />Experience</p>
              </div>
              <div className="px-6 text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-semibold font-onest text-white mb-2">100+</h3>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wider font-onest">Completed<br />Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;