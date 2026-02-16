import { ChevronRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const serviceAreas = [
    {
        county: "Sacramento County",
        cities: [
            "Sacramento",
            "Folsom",
            "Elk Grove",
            "Rancho Cordova",
            "Citrus Heights",
            "Fair Oaks",
            "Carmichael",
        ],
    },
    {
        county: "Placer County",
        cities: [
            "Roseville",
            "Rocklin",
            "Auburn",
            "Lincoln",
            "Granite Bay",
        ],
    },
    {
        county: "El Dorado County",
        cities: ["El Dorado Hills"],
    },
];

const Locations = () => {
    return (
        <section id="locations" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Map */}
                    <RevealOnScroll animation="fade-in" className="order-2 lg:order-1">
                        <div className="relative rounded-sm overflow-hidden border border-gray-200 shadow-lg h-[450px] md:h-[550px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d199656.702!2d-121.494!3d38.581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none border-[15px] border-white/10"></div>

                            {/* Overlay Label */}
                            <div className="absolute top-6 left-6 bg-white px-4 py-2 shadow-xl border border-gray-100">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                                    Service Areas Active
                                </span>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Right Column: Content */}
                    <div className="flex flex-col space-y-8 order-1 lg:order-2">
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 border border-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-900">
                                OUR COVERAGE
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight">
                                Bringing Premium Painting to <br />
                                Your Neighborhood
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full border-t border-gray-100">
                            {serviceAreas.map((area, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                                    <AccordionTrigger className="text-lg md:text-xl font-bold uppercase tracking-tight py-6 hover:no-underline hover:text-gray-600 transition-colors">
                                        {area.county}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 pb-4">
                                            {area.cities.map((city) => (
                                                <div key={city} className="flex items-center space-x-2 text-gray-500">
                                                    <ChevronRight className="w-3 h-3 text-gray-400" />
                                                    <span className="text-sm font-medium">{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="pt-4">
                            <p className="text-gray-400 text-sm font-medium tracking-wide first-letter:uppercase">
                                Plus surrounding communities throughout the region
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Locations;

