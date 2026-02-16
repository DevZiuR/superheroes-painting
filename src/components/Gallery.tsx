import { ArrowUpRight } from "lucide-react";

const Gallery = () => {
  const projects = [
    {
      src: "https://i.imgur.com/5r77PGg.png",
      title: "Interior Elegance",
      description: "Transforming living spaces with precision and care.",
    },
    {
      src: "https://s3-media0.fl.yelpcdn.com/bphoto/2QWZbngNcc8iINksNznLaw/o.jpg",
      title: "Exterior Excellence",
      description: "Boosting curb appeal with durable, high-quality finishes.",
    },
    {
      src: "https://s3-media0.fl.yelpcdn.com/bphoto/92jXiXU_iv6x6yHlXbbhFA/o.jpg",
      title: "Detail & Color",
      description: "Expert color consultation and flawless application.",
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#111111] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
          <div className="flex flex-col space-y-6">
            <span className="w-fit inline-block px-3 py-1 border border-gray-700 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              SELECTED PROJECTS
            </span>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-white leading-tight tracking-tight">
                Our Work Speaks for Itself
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase">
                BEFORE & AFTER TRANSFORMATIONS
              </p>
            </div>
          </div>

          <div className="flex items-center h-full">
            <div className="hidden md:block h-20 w-[1px] bg-gray-800 mr-8"></div>
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-gray-300 transition-colors "
            >
              SEE ALL PROJECTS <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex flex-col space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;