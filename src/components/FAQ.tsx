import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "What should I look for when hiring a painting contractor?",
            answer: "There are several things to look for when choosing a painting contractor. At the very least, check to see if they are licensed, insured, experienced, and capable of completing quality work. Look for reputable companies with local references and a proven track record. Super Heroes Painting checks all these boxes with 15+ years of experience and 100+ satisfied customers."
        },
        {
            question: "What areas do you serve?",
            answer: "We proudly serve Sacramento, Roseville, Rocklin, Folsom, Auburn, and surrounding areas throughout Northern California."
        },
        {
            question: "What brands of paint do you use?",
            answer: "We use only premium, professional-grade paints from trusted brands like Sherwin-Williams, Benjamin Moore, and Behr. We'll recommend the best products for your specific project based on durability, finish, and budget."
        },
        {
            question: "Can I leave my home while your painting crew works?",
            answer: "Yes! Most of our customers are not home while work is in progress. Whether you're at work or running errands, our crew will be busy transforming your space. We are licensed and fully insured, so there's nothing to worry about. Your home and belongings are in safe hands."
        },
        {
            question: "Do you offer a warranty?",
            answer: "Yes, all of our work comes with a warranty. We stand behind our craftsmanship and use premium materials to ensure long-lasting results. Ask us about specific warranty details during your free estimate."
        },
        {
            question: "Can you help me choose paint colors?",
            answer: "Yes! We offer color consultation services to help you select the perfect shades for your space. Our experienced team can provide recommendations based on lighting, room size, and your personal style."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Heading & Intro */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded-full">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase font-onest">FAQ</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-normal font-onest text-[#161616] leading-tight">
                            Frequently Asked Questions
                        </h2>

                        <div className="pt-8">
                            <h4 className="text-lg font-bold font-onest text-gray-900 mb-2">You have different questions?</h4>
                            <p className="text-gray-600 font-sans mb-4">
                                If you can't find the answer you're looking for, please don't hesitate to reach out to our team.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-primary font-bold font-onest hover:underline text-lg"
                            >
                                <MessageCircleQuestion className="w-5 h-5" />
                                Contact Support
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0 px-2">
                                    <AccordionTrigger className="text-lg sm:text-xl font-medium font-onest text-gray-900 hover:text-primary transition-colors text-left py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 font-sans text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
