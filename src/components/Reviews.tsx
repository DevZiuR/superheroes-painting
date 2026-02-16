import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    name: "Susan Hutchens",
    rating: 5,
    text: "We are so happy with the results! Not only for their mastery as painters, but for their robust level of integrity and professionalism. We would recommend Super Hero’s to anyone and invite you to experience the beauty of color!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVUhk8nYL9rEuV9nZbHvFcMDuUZar5ZNrR0wVg9xCbInz4_Mugt=w108-h108-p-rp-mo-br100"
  },
  {
    id: 2,
    name: "Angela Blanchard",
    rating: 5,
    text: "Our entryway looks brand new thanks to the team! They were prompt, kept the job site clean, finished on time and were competitively priced. Very happy with the service and we will definitely hire them again!",
    image: null
  },
  {
    id: 3,
    name: "William Jordan",
    rating: 5,
    text: "Had a great experience with Superheroes painting. Great customer service and a reliable team with outstanding work ethic. I will be referring them to anyone needing interior or exterior painting done.",
    image: null
  },
  {
    id: 4,
    name: "Britt Ruhl",
    rating: 5,
    text: "They are a Very professional company that does great work. Nemesio was on time and worked hard to get a time sensitive bid done late Friday and started work Monday. They finished when they said they would and cleaned up their mess when the job was completed. I highly recommend.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXUbXOe9XkJ7Z4P2FfIGQhsrRhxffdXo-qb47Rkg_SmiHWLgGa-=w108-h108-p-rp-mo-br100"
  }
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4 font-onest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-normal font-onest text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-8">Trusted by 100+ Homeowners & Businesses</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                  <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col relative border border-gray-100 hover:shadow-lg transition-shadow">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />

                    <div className="flex text-yellow-500 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 font-sans mb-6 flex-grow italic">"{review.text}"</p>

                    <div className="flex items-center gap-4 mt-auto">
                      {review.image ? (
                        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {review.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-black font-onest">{review.name}</h4>
                        <span className="text-xs text-gray-500">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://share.google/kOkFWYqLD1NMoUgWy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              View more reviews <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;