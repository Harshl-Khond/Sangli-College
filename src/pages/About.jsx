import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Eye, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Our Mission", desc: "To provide quality education that empowers students to lead with integrity and innovate for a better future." },
    { icon: <Eye className="w-8 h-8" />, title: "Our Vision", desc: "To be a global center of excellence in academics, research, and holistic development." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Core Values", desc: "Excellence, Integrity, Inclusivity, and Social Responsibility are the pillars of our institution." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-academic-maroon/10 text-academic-maroon font-bold rounded-full mb-6 text-sm">
              OUR LEGACY
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-academic-blue mb-8 leading-tight">
              Decades of Academic <br className="hidden sm:block" /> <span className="text-academic-maroon">Excellence & Innovation</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded with the vision to bridge the gap between academic education and administrative careers, Prashaskiya Seva Mahavidyalay has been a pioneer in integrating competitive exam preparation with university degrees.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in preparing students for MPSC, UPSC, and various government sector exams while they complete their graduation. Our unique approach ensures that our students are career-ready the moment they receive their degree.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800" alt="Campus Building" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" alt="Students Studying" className="rounded-2xl h-64 w-full object-cover mt-8 shadow-lg" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-academic-blue">25+</div>
              <div className="text-sm font-bold text-academic-blue opacity-80 uppercase tracking-widest">Years of Trust</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-20 bg-slate-50 rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-academic-maroon shadow-sm mx-auto mb-8">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-academic-blue mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Governing Body Preview */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-academic-blue mb-16">The Governing Body</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Hon. Shri. S.P. Deshmukh", role: "Chairman" },
              { name: "Dr. R.V. Patil", role: "Secretary" },
              { name: "Smt. V.S. Mane", role: "Treasurer" },
              { name: "Dr. A.B. Joshi", role: "Member" }
            ].map((member, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-academic-blue">{member.name}</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
