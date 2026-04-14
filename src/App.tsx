import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Palette, 
  Globe, 
  Layout, 
  FileText, 
  Image as ImageIcon, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Utensils,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Printing & Print Management",
    description: "High-quality offset and digital printing for all your business needs, from business cards to large-scale reports.",
    icon: Printer,
  },
  {
    title: "Graphic Design & Branding",
    description: "Creative visual identities that capture your brand's essence and resonate with your target audience.",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    description: "Strategic online presence management, SEO, and social media campaigns to drive growth and engagement.",
    icon: Globe,
  },
  {
    title: "Signage & Large Format",
    description: "Bold banners, vehicle wraps, and architectural signage that make your brand impossible to ignore.",
    icon: Layout,
  },
  {
    title: "Corporate Stationery",
    description: "Professional letterheads, envelopes, and folders that maintain brand consistency across all touchpoints.",
    icon: FileText,
  },
  {
    title: "Promotional Materials",
    description: "Custom branded merchandise and apparel that keep your business top-of-mind for clients.",
    icon: ImageIcon,
  },
  {
    title: "Menu Card Design",
    description: "Elegant and durable menu cards for restaurants and hotels, designed to whet the appetite.",
    icon: Utensils,
  }
];

const portfolioItems = [
  { title: "Minimalist Business Cards", category: "Branding", image: "https://picsum.photos/seed/business-card/800/600" },
  { title: "Corporate Brand Identity", category: "Branding", image: "https://picsum.photos/seed/branding-design/800/600" },
  { title: "Premium Annual Report", category: "Printing", image: "https://picsum.photos/seed/magazine-layout/800/600" },
  { title: "Modern Web Interface", category: "Digital", image: "https://picsum.photos/seed/web-design/800/600" },
  { title: "Exhibition Signage", category: "Large Format", image: "https://picsum.photos/seed/exhibition/800/600" },
  { title: "Luxury Product Packaging", category: "Branding", image: "https://picsum.photos/seed/packaging/800/600" },
  { title: "Restaurant Menu Design", category: "Menu Cards", image: "https://picsum.photos/seed/menu/800/600" },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, TechFlow",
    content: "Prime Solutions Hub transformed our brand identity. Their attention to detail and creative vision exceeded our expectations.",
    avatar: "https://picsum.photos/seed/avatar1/100/100"
  },
  {
    name: "Michael Chen",
    role: "CEO, Urban Logistics",
    content: "The quality of their print work is unmatched. We've used them for all our corporate stationery for three years now.",
    avatar: "https://picsum.photos/seed/avatar2/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Bloom Events",
    content: "Fast turnaround and exceptional service. They handled our large format event signage perfectly under a tight deadline.",
    avatar: "https://picsum.photos/seed/avatar3/100/100"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white selection:bg-brand-gold selection:text-brand-navy">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-brand-navy/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="text-2xl font-heading font-bold text-brand-gold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Prime Solutions Hub
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-brand-gold transition-colors"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold rounded-full px-6"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-2xl"
            >
              {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-lg font-medium text-left hover:text-brand-gold transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold w-full"
              >
                Get a Quote
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              We Build Brands That <span className="text-brand-gold">Mean Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Your vision. Our expertise. Delivered. We provide premium printing, branding, and digital solutions tailored for corporate excellence in Gweru and across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold h-14 px-8 rounded-full text-lg"
              >
                Explore Services <ChevronRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="border-white/20 hover:bg-white/10 h-14 px-8 rounded-full text-lg"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/design-studio/1000/1200" 
                alt="Professional Design Studio" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-gold/50 z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-brand-gold/50 z-0" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Comprehensive Business Solutions
            </motion.h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                      <service.icon className="text-brand-gold group-hover:text-white transition-colors duration-300" size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="flex items-center text-brand-gold font-bold hover:gap-2 transition-all">
                      Learn More <ArrowRight size={18} className="ml-2" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/about/800/1000" 
                alt="Our Team" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              About Prime Solutions Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Your Partner in <span className="text-brand-gold">Corporate Growth</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Founded on the principles of excellence and innovation, Prime Solutions Hub has grown into a leading provider of integrated business services. We understand that in today's competitive landscape, your brand's physical and digital presence is your most valuable asset.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our team of expert designers, printers, and digital strategists work in harmony to deliver results that don't just look good—they perform.
            </p>
            
            <div className="flex items-center space-x-4 mb-10 p-4 bg-white/5 rounded-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/trust/100/100" 
                alt="Trust Madzungu" 
                className="w-16 h-16 rounded-full border-2 border-brand-gold"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-white text-xl">Trust Madzungu</h4>
                <p className="text-brand-gold font-medium">Founder & CEO</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {[
                "15+ Years of Industry Experience",
                "State-of-the-art Printing Technology",
                "Award-winning Design Team",
                "Dedicated Account Management"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold h-12 px-8 rounded-full">
              Our Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50 text-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Featured Projects
              </h2>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Branding', 'Printing', 'Digital', 'Signage', 'Menu Cards'].map((cat) => (
                <button 
                  key={cat}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                    cat === 'All' ? "bg-brand-navy text-white" : "bg-white text-brand-navy border border-slate-200 hover:border-brand-gold"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-heading font-bold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-brand-navy/20 hover:bg-brand-navy hover:text-white rounded-full px-10 h-12">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex space-x-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-8 text-lg leading-relaxed">
                      "{t.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-12 h-12 rounded-full border-2 border-brand-gold"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <p className="text-brand-gold text-sm">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Ready to Start Your <span className="text-brand-gold">Next Project?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you need a full brand overhaul or a simple print run, our team is here to help you achieve excellence. Reach out today for a custom quote.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-slate-600">trusttechzw@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-slate-600">+263 78 513 9208</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-slate-600">Main Street, Gweru<br />Zimbabwe</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white border-slate-200 h-12 focus:ring-brand-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <Input type="email" placeholder="john@company.com" className="bg-white border-slate-200 h-12 focus:ring-brand-gold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Service Required</label>
                  <select className="w-full h-12 px-3 rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50">
                    <option>Printing & Print Management</option>
                    <option>Graphic Design & Branding</option>
                    <option>Digital Marketing</option>
                    <option>Signage & Large Format</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="bg-white border-slate-200 min-h-[150px] focus:ring-brand-gold" />
                </div>
                <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-bold h-14 rounded-xl text-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-3xl font-heading font-bold text-brand-gold mb-6">Prime Solutions Hub</h2>
              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Your premier partner for integrated business solutions. We combine traditional craftsmanship with modern technology to deliver exceptional results for brands that mean business.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all cursor-pointer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Printing Management</li>
                <li>Brand Identity</li>
                <li>Digital Strategy</li>
                <li>Large Format Signage</li>
                <li>Corporate Stationery</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Prime Solutions Hub. Founded by Trust Madzungu. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-slate-500">
              <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
