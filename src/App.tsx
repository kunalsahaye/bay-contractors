import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Shield, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  Hammer,
  Droplets,
  Wind,
  Home as HomeIcon,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, TESTIMONIALS, NEIGHBORHOODS, FAQS, TRUST_BADGES } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue p-2 rounded-lg">
            <HomeIcon className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>BAY CONTRACTORS</span>
            <span className={`text-[10px] tracking-[0.2em] font-medium uppercase ${isScrolled ? 'text-brand-accent' : 'text-white/80'}`}>& Roofing</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:4155550123" className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            <Phone className="w-4 h-4 text-brand-accent" />
            (415) 555-0123
          </a>
          <button className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20">
            Get a Free Quote
          </button>
        </div>

        <button className="md:hidden text-brand-blue" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className={isScrolled ? 'text-brand-blue' : 'text-white'} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-xl text-brand-blue">BAY CONTRACTORS</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="text-brand-blue" /></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-bold text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-gray-100 my-4" />
              <a href="tel:4155550123" className="flex items-center gap-3 text-xl font-bold text-brand-blue">
                <Phone className="text-brand-accent" />
                (415) 555-0123
              </a>
              <button className="bg-brand-accent text-white w-full py-4 rounded-xl text-lg font-bold mt-4">
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium San Francisco Home" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
            San Francisco's Trusted Roofing Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] text-balance">
            Premium Roofs. <br />
            <span className="text-brand-accent">Built for the Bay.</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            From historic Victorian restorations to modern emergency repairs, we provide San Francisco homeowners with elite craftsmanship and 24/7 reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-accent/30">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-brand-accent" /> Call (415) 555-0123
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Shield className="text-brand-accent w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-white font-bold leading-none">Licensed & Insured</span>
                <span className="text-white/60 text-xs">CA License #123456</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-brand-accent w-6 h-6 fill-brand-accent" />
              <div className="flex flex-col">
                <span className="text-white font-bold leading-none">5-Star Rated</span>
                <span className="text-white/60 text-xs">Top Rated in SF</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-brand-fog border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <badge.icon className="w-6 h-6 text-brand-blue/40" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue/60">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Comprehensive Roofing Solutions</h2>
            <p className="text-slate-600 text-lg">We specialize in the unique challenges of San Francisco architecture, from steep Victorian gables to modern flat-roof waterproofing.</p>
          </div>
          <button className="text-brand-blue font-bold flex items-center gap-2 hover:text-brand-accent transition-colors">
            View All Services <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold text-brand-blue flex items-center gap-3 pb-4 border-b border-gray-100">
                {idx === 0 && <Hammer className="text-brand-accent w-5 h-5" />}
                {idx === 1 && <HomeIcon className="text-brand-accent w-5 h-5" />}
                {idx === 2 && <Droplets className="text-brand-accent w-5 h-5" />}
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((service, sIdx) => (
                  <motion.div 
                    whileHover={{ x: 5 }}
                    key={sIdx} 
                    className="group p-4 rounded-xl hover:bg-brand-fog transition-all cursor-pointer border border-transparent hover:border-gray-100"
                  >
                    <h4 className="font-bold text-brand-blue group-hover:text-brand-accent transition-colors mb-1">{service.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmergencySection = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Wind className="w-full h-full text-white" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-brand-accent mb-6">
              <AlertTriangle className="w-8 h-8" />
              <span className="text-xl font-bold uppercase tracking-widest">Emergency Response</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">24/7 Emergency Roof Repair in San Francisco</h2>
            <p className="text-white/70 text-lg mb-8">
              Storm damage, sudden leaks, or structural failures don't wait for business hours. Our rapid-response team is on call 24/7 to protect your home from the elements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:4155550123" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all flex items-center gap-3">
                <Phone className="w-5 h-5" /> Call Now: (415) 555-0123
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800" 
              alt="Emergency Repair" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Victorian Restoration", location: "Noe Valley", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Flat Roof", location: "Mission District", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { title: "Storm Damage Recovery", location: "Richmond District", img: "https://images.unsplash.com/photo-1628744276520-67306f14f6ce?auto=format&fit=crop&q=80&w=800" },
    { title: "Premium Shingle Install", location: "Sunset District", img: "https://images.unsplash.com/photo-1600566752355-397921163bc3?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-fog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Recent Projects Across the City</h2>
          <p className="text-slate-600 text-lg">From the fog-swept hills of Twin Peaks to the sunny Mission, we've protected thousands of San Francisco homes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={idx} 
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-1 block">{project.location}</span>
                <h4 className="text-white font-bold text-xl">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Reviews</span>
            <h2 className="text-4xl font-bold text-brand-blue mb-6">What Your Neighbors Are Saying</h2>
            <p className="text-slate-600 text-lg mb-8">We take pride in our reputation. With over 500+ 5-star reviews, we are San Francisco's most trusted roofing team.</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-brand-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand-accent" />)}
                </div>
                <span className="text-sm font-bold text-brand-blue">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-brand-fog p-8 rounded-2xl border border-gray-100">
                <div className="flex text-brand-accent mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand-accent" />)}
                </div>
                <p className="text-brand-blue italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-blue">{t.name}</span>
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">{t.neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Free Quote", desc: "Request a quote online or call us for a fast, on-site inspection." },
    { title: "Detailed Inspection", desc: "We provide a thorough assessment and a transparent, itemized proposal." },
    { title: "Expert Install", desc: "Our licensed crew handles everything with precision and cleanliness." },
    { title: "Final Walkthrough", desc: "We ensure you're 100% satisfied and provide your full warranty docs." }
  ];

  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Seamless Process</h2>
          <p className="text-white/60">Quality roofing shouldn't be stressful. Here's how we work.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-brand-accent text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Questions</span>
          <h2 className="text-4xl font-bold text-brand-blue">Common Inquiries</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-blue hover:bg-brand-fog transition-colors"
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HomeIcon className="text-brand-accent w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">BAY CONTRACTORS</span>
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-brand-accent">& Roofing</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              San Francisco's premier roofing specialists. Licensed, insured, and dedicated to protecting your home with elite craftsmanship.
            </p>
            <div className="flex items-center gap-4">
              <Shield className="text-brand-accent w-5 h-5" />
              <span className="text-xs font-bold text-white/80">CA License #123456</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/60 text-[11px] uppercase tracking-wider">
              {NEIGHBORHOODS.slice(0, 10).map(n => (
                <span key={n} className="flex items-center gap-1"><MapPin className="w-3 h-3 text-brand-accent" /> {n}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="text-brand-accent w-4 h-4" />
                <a href="tel:4155550123" className="hover:text-white transition-colors">(415) 555-0123</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="text-brand-accent w-4 h-4" />
                <a href="mailto:info@baycontractors.com" className="hover:text-white transition-colors">info@baycontractors.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="text-brand-accent w-4 h-4 mt-1" />
                <span>123 Market St, Suite 456<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Bay Contractors & Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-fog relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-blue mb-6">Ready for a Roof That Lasts?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Don't wait for the next storm. Get your free, no-obligation inspection and quote from San Francisco's trusted experts today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-accent/90 transition-all shadow-2xl shadow-brand-accent/30">
            Get a Free Quote
          </button>
          <div className="flex flex-col items-start sm:items-center">
            <span className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-1">Or Call Us Directly</span>
            <a href="tel:4155550123" className="text-2xl font-bold text-brand-blue hover:text-brand-accent transition-colors">
              (415) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <EmergencySection />
      <Projects />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
