import React from 'react';
import Hero from '../components/home/Hero';
import NoticeBoard from '../components/home/NoticeBoard';
import PrincipalMessage from '../components/home/PrincipalMessage';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Globe, Download, ArrowRight } from 'lucide-react';
import pos01 from '../assets/pos01.jpg';
import pos02 from '../assets/Pos02.jpg';

const Home = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Civil Services Focus",
      desc: "Specialized B.A. program integrated with MPSC & UPSC preparation."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Coaching",
      desc: "Training for IAS, IPS, PSI, Railway, Banking, and Defense services."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Library Science",
      desc: "Professional Diploma in Library & Information Science (1 Year)."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Career Guidance",
      desc: "From Gramsevak to Talathi, we prepare you for all government posts."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <NoticeBoard />
      
      {/* Featured Admission Posters - Redesigned */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-[20px] border-academic-blue rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-[40px] border-academic-maroon rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="text-academic-maroon font-bold tracking-widest text-sm uppercase mb-2 block">Admission 2024-25</span>
              <h2 className="text-4xl md:text-5xl font-bold text-academic-blue leading-tight">
                Latest <span className="text-academic-maroon">Circulars</span> & Announcements
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-academic-blue text-white font-bold rounded-full hover:bg-academic-maroon transition-all shadow-lg flex items-center gap-2">
                All Notices <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {[
              { img: pos01, title: "Degree & Coaching", tag: "Integrated B.A." },
              { img: pos02, title: "Library Science", tag: "Professional Diploma" }
            ].map((poster, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-academic-blue/5 to-academic-maroon/5 rounded-[2.5rem] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative rounded-[1.5rem] overflow-hidden mb-6 bg-slate-50">
                    <img 
                      src={poster.img} 
                      alt={poster.title} 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-academic-maroon text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                        {poster.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-academic-blue group-hover:text-academic-maroon transition-colors">{poster.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">Click to view full details</p>
                    </div>
                    <button className="w-12 h-12 bg-slate-50 text-academic-blue rounded-2xl flex items-center justify-center group-hover:bg-academic-blue group-hover:text-white transition-all shadow-sm">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PrincipalMessage />

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-academic-blue mb-16 uppercase tracking-tight">Why Choose <span className="text-academic-maroon">Prashaskiya Seva?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-accent-gold transition-all group"
              >
                <div className="w-16 h-16 bg-academic-blue/5 rounded-2xl flex items-center justify-center text-academic-blue mb-6 mx-auto group-hover:bg-academic-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-academic-blue">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview (Preview) */}
      <section className="py-24 bg-academic-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore Our <span className="text-accent-gold">Departments</span></h2>
              <p className="text-slate-300 max-w-xl">We offer a wide range of undergraduate and postgraduate programs designed to build strong foundations and specialized expertise.</p>
            </div>
            <button className="px-6 py-3 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-academic-blue font-bold rounded-lg transition-all">
              VIEW ALL COURSES
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "B.A. (Civil Services)", count: "3 Years Degree", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
              { name: "Lib. & Info. Science", count: "1 Year Diploma", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800" },
              { name: "Competitive Exams", count: "MPSC, UPSC, Bank", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" }
            ].map((dept, i) => (
              <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src={dept.img} alt={dept.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-1">{dept.name}</h3>
                  <p className="text-accent-gold font-medium">{dept.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
