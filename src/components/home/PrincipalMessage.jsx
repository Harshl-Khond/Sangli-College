import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import principalImg from '../../assets/principal.png';

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={principalImg} 
                alt="Principal" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold rounded-full z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-academic-blue rounded-full z-0 opacity-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="flex items-center gap-3 text-academic-maroon font-bold mb-4">
              <span className="w-12 h-1 bg-academic-maroon"></span>
              LEADERSHIP MESSAGE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-academic-blue mb-8 leading-tight text-center lg:text-left">
              A Message from <br /><span className="text-academic-maroon">Our Principal</span>
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 text-academic-maroon/10 w-20 h-20" />
              <p className="text-xl text-slate-600 italic leading-relaxed mb-6 relative z-10">
                "Our mission at Prashaskiya Seva Mahavidyalay is to create the administrators of tomorrow. We don't just provide a degree; we build the character and knowledge required to serve the nation through civil and administrative services."
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              Welcome to an institution where tradition meets modernity. We provide a stimulating environment that encourages students to push their boundaries and explore their potential. Our state-of-the-art facilities and dedicated faculty ensure that our students are prepared for the challenges of the 21st century.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center text-academic-blue">
                <img src={principalImg} alt="Sig" className="w-12 h-12 rounded-full opacity-50 grayscale" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-academic-blue">Dr. Rajesh Deshmukh</h4>
                <p className="text-slate-500">M.A., Ph.D. - Principal, Prashaskiya Seva Mahavidyalay</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
