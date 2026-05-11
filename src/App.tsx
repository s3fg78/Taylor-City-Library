import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { BookOpen, MapPin, Phone, Clock, ChevronDown, Quote, Star } from 'lucide-react';

// --- Components ---

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-100 bg-ink/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="#" className="font-display text-lg text-gold font-bold">Taylor City Library</a>
        <ul className="hidden md:flex gap-8 list-none">
          {['About', 'Services', 'Reviews', 'Visit Us'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-cream/70 hover:text-gold text-[0.82rem] tracking-widest uppercase transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative bg-brown text-cream min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Ornament Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c9973a 0, #c9973a 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute inset-0 bg-radial-[ellipse_at_20%_80%] from-gold/25 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-[ellipse_at_80%_20%] from-rust/30 via-transparent to-transparent pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-2 px-8 max-w-3xl"
      >
        <span className="inline-block border-[1.5px] border-gold text-gold font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase px-5 py-1.5 rounded-full mb-8">
          Est. Taylor, Nebraska
        </span>
        <h1 className="font-display text-6xl md:text-8xl font-black leading-none tracking-tight mb-4">
          Taylor City
          <span className="block text-[0.42em] font-normal italic text-gold tracking-[0.08em] mt-2">Library</span>
        </h1>
        <div className="w-20 h-[2px] bg-linear-to-r from-transparent via-gold to-transparent mx-auto my-8"></div>
        <p className="font-serif text-lg md:text-xl italic text-cream/80 max-w-md mx-auto leading-relaxed mb-10">
          A place where stories live, history breathes, and community gathers — welcome home.
        </p>
        <a 
          href="#visit-us" 
          className="inline-block bg-gold text-ink font-sans text-[0.85rem] font-medium tracking-widest uppercase px-10 py-3.5 rounded-sm hover:bg-[#e0ac4a] transition-all hover:-translate-y-0.5"
        >
          Find Us
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 text-[0.65rem] tracking-[0.2em] uppercase"
      >
        <span>Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </header>
  );
};

const BookShelf = ({ colors, heights, customClass = "" }) => {
  return (
    <div className={`w-full h-full flex items-end px-1.5 py-2.5 gap-1 overflow-hidden ${customClass}`}>
      {colors.map((color, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${heights[i]}%` }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="flex-1 min-w-[12px] rounded-t-sm"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

const About = () => {
  const shelf1Colors = ['#c0392b','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6','#1abc9c','#e74c3c','#d35400','#16a085','#8e44ad','#2980b9','#c0392b','#27ae60','#f39c12','#7f8c8d','#c0392b','#1abc9c'];
  const shelf1Heights = [70,85,65,90,75,80,68,92,72,88,78,65,82,70,95,73,85,68];
  
  const shelf2Colors = ['#2c3e50','#8e44ad','#16a085','#d35400','#2980b9','#c0392b','#27ae60','#f39c12','#7f8c8d','#1abc9c','#e74c3c','#3498db'];
  const shelf2Heights = [80,65,90,72,85,70,95,75,68,88,78,82];

  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative h-[420px]">
        {/* Main Shelf */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-[78%] h-[80%] rounded-sm overflow-hidden shadow-2xl z-1 bg-linear-to-br from-[#3d2609] via-[#6b3d15] to-[#8c5020]"
        >
          <BookShelf colors={shelf1Colors} heights={shelf1Heights} />
        </motion.div>
        {/* Accent Shelf */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[52%] h-[55%] rounded-sm overflow-hidden shadow-2xl z-2 border-4 border-cream bg-linear-to-br from-[#1a3a2a] via-[#2a5c3f] to-[#3d7a52]"
        >
          <BookShelf colors={shelf2Colors} heights={shelf2Heights} />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 text-rust font-medium text-[0.68rem] tracking-[0.3em] uppercase">
          <div className="w-8 h-[1px] bg-rust"></div>
          Our Story
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-ink">
          More Than Books — A Community Heart
        </h2>
        <div className="text-gold text-xl tracking-[0.5rem] opacity-50 text-center md:text-left">❧ ✦ ❧</div>
        <div className="font-serif text-lg leading-relaxed text-[#3a2c1a] space-y-4">
          <p>
            The <span className="text-rust font-medium">Taylor City Library</span> is a cherished gathering place in the heart of Taylor, Nebraska. Nestled among the rolling Sandhills, our library serves as a gateway to knowledge, culture, and connection for everyone in our community.
          </p>
          <p>
            From author signings to local history archives, we pride ourselves on welcoming every visitor with warmth and expertise. Whether you're a lifelong reader or just discovering the joy of books, there's a place for you here.
          </p>
          <p>
            Our dedicated staff, led by <span className="text-rust font-medium">Cheryl and the team</span>, work tirelessly to curate an experience that honours the rich heritage of the area while embracing the future of learning.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <BookOpen className="text-gold" size={32} />, title: "Book Collection", desc: "A rich and diverse collection of fiction, non-fiction, local history, and reference materials for all ages." },
    { icon: "✍️", title: "Author Events", desc: "Special signings and literary gatherings that connect readers with the voices behind the stories." },
    { icon: "🏛️", title: "Local History", desc: "Dive into the fascinating history of the Sandhills region through curated archives and staff." },
  ];

  return (
    <section id="services" className="relative z-1 bg-ink text-cream py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #c9973a 0, #c9973a 1px, transparent 1px, transparent 30px)' }}></div>
      
      <div className="max-w-6xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-gold font-medium text-[0.68rem] tracking-[0.3em] uppercase mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Everything a Library Should Be</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 border border-gold/20 rounded-sm hover:border-gold transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {typeof service.icon === 'string' ? <span className="text-3xl">{service.icon}</span> : service.icon}
              </div>
              <h3 className="font-display text-xl text-gold mb-3 text-center">{service.title}</h3>
              <p className="text-cream/65 text-[0.93rem] leading-relaxed text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-parchment py-24">
      <div className="max-w-3xl mx-auto px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-ink font-medium text-[0.68rem] tracking-[0.3em] uppercase"
        >
          Community Voices
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-ink"
        >
          What Our Visitors Say
        </motion.h2>

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          className="font-display text-8xl text-gold leading-[0.5] block"
        >
          <Quote className="inline-block fill-gold" size={60} />
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-xl md:text-2xl italic text-brown leading-relaxed"
        >
          On April 9th, I was thrilled to be part of the 'Authors' book signings. I would like to thank Cheryl and the ladies for welcoming me into their wonderful Library! I learned so much about the history of the area and met so many great people! Thank you all so very much!
        </motion.blockquote>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-rust to-brown flex items-center justify-center text-cream font-display text-2xl font-bold">
            B
          </div>
          <div className="text-left">
            <div className="flex text-gold gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <strong className="block font-display text-lg text-ink">BJ Akin</strong>
            <span className="text-[0.8rem] text-[#7a6040] italic">Betty Akin · Author of The Sandhills Dreamer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Visit = () => {
  const info = [
    { icon: <MapPin size={20} />, title: "Address", content: "106 Williams St, Taylor, NE 68879, United States" },
    { icon: <Phone size={20} />, title: "Phone", content: <a href="tel:+13089426125" className="hover:underline text-rust">+1 (308) 942-6125</a> },
    { icon: <Clock size={20} />, title: "Hours", content: "Mon – Fri: 9:00 AM – 5:00 PM | Sat: 10:00 AM – 2:00 PM" },
  ];

  return (
    <section id="visit-us" className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3 text-rust font-medium text-[0.68rem] tracking-[0.3em] uppercase">
          Find Us
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Come Visit the Library</h2>
        <div className="text-gold text-xl tracking-[0.5rem] opacity-50">❧ ✦ ❧</div>
        
        <div className="space-y-8">
          {info.map((item, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="w-11 h-11 bg-rust rounded-sm flex items-center justify-center text-cream shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h4 className="font-display text-ink font-bold text-[0.95rem] mb-1">{item.title}</h4>
                <div className="font-serif text-[0.9rem] text-[#5a4020] leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative h-[400px] bg-[#d4c9ae] rounded-md overflow-hidden border border-brown/20 shadow-lg group"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#c9b48a] to-[#a8936a] flex flex-col items-center justify-center p-8 gap-4 text-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl grayscale-50"
          >
            📌
          </motion.div>
          <p className="font-display text-brown font-bold text-lg max-w-[250px] leading-snug">
            106 Williams St, Taylor, NE 68879
          </p>
          <a 
            href="https://maps.google.com/?q=106+Williams+St+Taylor+NE+68879" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brown text-cream px-8 py-3 rounded-sm text-[0.82rem] font-medium tracking-wide hover:bg-rust transition-colors shadow-md"
          >
            Open in Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-cream/55 text-center py-12 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-8 space-y-4">
        <span className="font-display text-xl text-gold font-bold block">Taylor City Library</span>
        <p className="text-[0.82rem] leading-relaxed">
          106 Williams St, Taylor, NE 68879 &nbsp;·&nbsp; 
          <a href="tel:+13089426125" className="text-gold hover:underline"> +1 (308) 942-6125</a>
        </p>
        <p className="text-[0.7rem] opacity-40 pt-4">© 2026 Taylor City Library. Built with reverence for the written word.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative isolate min-h-screen">
      <div className="noise-overlay" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
