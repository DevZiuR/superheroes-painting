import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, ArrowUpRight, Paintbrush, ShieldCheck, Clock, Users, Building2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    timeline: "",
    vision: "",
    source: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-gray-50 flex items-center justify-center min-h-[600px]">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg mx-4 animate-fade-in border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold font-onest text-gray-900 mb-4">Request Received!</h3>
          <p className="text-gray-600 font-sans mb-8">
            Thank you! We'll contact you within 24 hours with your personalized estimate.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
          >
            Send Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Content & Illustration */}
          <div className="space-y-8 pt-10 sticky top-24">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Let's Work Together</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-normal font-onest text-white leading-[1.1]">
              Ready to Transform Your <br />
              Dream Space?
            </h2>

            <p className="text-lg text-gray-400 font-sans max-w-md leading-relaxed font-normal">
              Whether you have a clear vision or need guidance to bring your ideas to life,
              Super Heros Painting is here to help. Let's collaborate to create something extraordinary.
            </p>

            {/* Decorative Illustration (Styled like footer) */}
            <div className="relative mt-12 opacity-20 pointer-events-none select-none">
              <Paintbrush className="w-64 h-64 stroke-[0.5] text-gray-400" />
            </div>
          </div>

          {/* Right Column: Premium Form */}
          {/* Right Column: Clean Form Layout */}
          <div className="bg-white rounded-[4px] p-8 sm:p-10 shadow-lg relative">

            <div className="mb-8">
              <h3 className="text-3xl font-medium font-onest text-gray-900 tracking-tight">Get in touch with us today!</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Full Name</label>
                  <Input
                    required
                    placeholder="Enter your full name"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Phone Number</label>
                  <Input
                    required
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              {/* Row 2: Email & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Project Address</label>
                  <Input
                    required
                    placeholder="City, Zip Code"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Type of Project</label>
                  <select
                    required
                    className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                  >
                    <option value="" className="text-gray-400">Select project type...</option>
                    <option value="Interior">Interior Painting</option>
                    <option value="Exterior">Exterior Painting</option>
                    <option value="Cabinet">Cabinet Painting</option>
                    <option value="Commercial">Commercial Project</option>
                    <option value="FullHome">Full Home Transformation</option>
                    <option value="NotSure">Not Sure Yet</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Timeline</label>
                  <select
                    required
                    className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                  >
                    <option value="" className="text-gray-400">When to start?</option>
                    <option value="2weeks">Within 2 weeks</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="2-4months">2-4 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Source (Full Width) */}
              <div className="space-y-2">
                <label className="text-base font-normal text-gray-500">How did you hear about us?</label>
                <select
                  className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                  onChange={(e) => handleInputChange('source', e.target.value)}
                >
                  <option value="" className="text-gray-400">Select source...</option>
                  <option value="Google">Google Search</option>
                  <option value="Referral">Referral</option>
                  <option value="Social">Social Media</option>
                  <option value="SawWork">Saw Your Work</option>
                  <option value="Repeat">Repeat Customer</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-base font-normal text-gray-500">Message (Optional)</label>
                <Textarea
                  placeholder="Type a message here..."
                  className="bg-white border-[#e5e7eb] focus:border-black rounded-none min-h-[150px] p-4 text-base resize-none transition-colors placeholder:text-gray-400"
                  onChange={(e) => handleInputChange('vision', e.target.value)}
                />
              </div>

              {/* Button aligned right */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-16 px-10 bg-[#161616] hover:bg-black text-white text-base font-bold uppercase tracking-widest rounded-none shadow-none transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 border-b border-white pb-0.5 leading-none">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && <ArrowUpRight size={20} className="relative z-10" />}
                </Button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section >
  );
};

export default Contact;