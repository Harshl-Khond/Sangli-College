import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import pos01 from '../assets/pos01.jpg';
import pos02 from '../assets/Pos02.jpg';

const Admissions = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-academic-blue mb-4 uppercase">Admissions Open 2024-25</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Take the first step towards a prestigious administrative career. Join our integrated degree and coaching programs.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Poster Section */}
          <div className="space-y-8">
            {[
              { img: pos01, title: "B.A. (Civil Services)", duration: "3 Years Full-time" },
              { img: pos02, title: "Diploma in Library Science", duration: "1 Year Professional Course" }
            ].map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
              >
                <div className="p-6 border-b border-slate-100 bg-white flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-academic-blue">{course.title}</h3>
                    <p className="text-sm text-slate-500">{course.duration}</p>
                  </div>
                  <button className="p-3 bg-academic-blue text-white rounded-full hover:bg-academic-maroon transition-colors">
                    <Download size={20} />
                  </button>
                </div>
                <img src={course.img} alt={course.title} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <div className="lg:sticky lg:top-40 space-y-10">
            <div className="bg-academic-blue text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <h2 className="text-3xl font-bold mb-6">How to Apply?</h2>
              <ul className="space-y-4">
                {[
                  "Collect the application form from the college office.",
                  "Submit required documents (10th, 12th Marksheets, LC, TC).",
                  "Personal interview with the admission counselor.",
                  "Payment of fees and confirmation of admission."
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-accent-gold shrink-0" size={24} />
                    <span className="text-slate-100">{step}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-4 bg-accent-gold text-academic-blue font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                INQUIRE NOW <ArrowRight size={20} />
              </button>
            </div>

            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem]">
              <h3 className="text-xl font-bold text-academic-blue mb-4">Contact Admission Desk</h3>
              <p className="text-slate-500 mb-6 font-medium">For any queries regarding the admission process, please contact:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-academic-maroon font-bold">96</div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Mobile</p>
                    <p className="font-bold text-slate-700">9699675975</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-academic-maroon font-bold">94</div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Mobile</p>
                    <p className="font-bold text-slate-700">9422619118</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
