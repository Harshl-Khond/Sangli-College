import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, Calendar } from 'lucide-react';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden pt-32 md:pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="College Campus" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-academic-blue/90 via-academic-blue/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 bg-accent-gold text-academic-blue font-bold rounded-full mb-6 text-sm uppercase tracking-wider">
            Excellence in Education
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight">
            Shape Your Career in <br className="hidden sm:block" /> <span className="text-accent-gold uppercase">Administrative Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            Prashaskiya Seva Mahavidyalay, Sangli. Prepare for MPSC, UPSC, Banking, and Defense while earning your B.A. degree.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0">
            <button className="px-8 py-4 bg-accent-gold text-academic-blue font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
              Explore Courses <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Take a Virtual Tour
            </button>
          </div>

          {/* Mobile/Tablet Stats */}
          <div className="grid grid-cols-3 gap-4 xl:hidden mt-12">
            {[
              { count: "50+", label: "Courses" },
              { count: "5000+", label: "Students" },
              { count: "25+", label: "Years" }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-accent-gold">{stat.count}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-10 hidden xl:flex gap-6 z-10">
        {[
          { icon: <GraduationCap />, count: "50+", label: "Courses" },
          { icon: <Users />, count: "5000+", label: "Students" },
          { icon: <Calendar />, count: "25+", label: "Years Excellence" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white min-w-[160px]"
          >
            <div className="text-accent-gold mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.count}</div>
            <div className="text-sm text-slate-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
