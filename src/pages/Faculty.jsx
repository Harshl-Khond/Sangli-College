import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Briefcase, Award } from 'lucide-react';

const Faculty = () => {
  const departments = [
    {
      name: "Computer Science",
      faculty: [
        { name: "Dr. Anjali Patil", role: "Head of Department", qualification: "Ph.D. in AI & ML", exp: "18 Years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
        { name: "Prof. Sameer Kulkarni", role: "Assistant Professor", qualification: "M.Tech in CSE", exp: "12 Years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
        { name: "Mrs. Sneha More", role: "Assistant Professor", qualification: "M.Sc. Computer Science", exp: "8 Years", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" }
      ]
    },
    {
      name: "Management Studies",
      faculty: [
        { name: "Dr. Vinay Deshpande", role: "Professor", qualification: "MBA, Ph.D.", exp: "22 Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
        { name: "Ms. Priyanka Shah", role: "Associate Professor", qualification: "M.Com, NET", exp: "10 Years", img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-academic-blue mb-4">Our Distinguished Faculty</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Meet the dedicated educators and researchers who guide our students towards academic excellence and professional success.
          </p>
        </header>

        {departments.map((dept, di) => (
          <div key={di} className="mb-20">
            <h2 className="text-3xl font-bold text-academic-maroon mb-10 border-b-2 border-slate-100 pb-4 inline-block">{dept.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {dept.faculty.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-50 group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-academic-blue/20 group-hover:bg-academic-blue/40 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-academic-blue mb-1">{member.name}</h3>
                    <p className="text-academic-maroon font-semibold mb-6">{member.role}</p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <GraduationCap size={18} className="text-accent-gold" />
                        <span>{member.qualification}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <Briefcase size={18} className="text-accent-gold" />
                        <span>{member.exp} Experience</span>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-slate-50 text-academic-blue font-bold rounded-xl hover:bg-academic-blue hover:text-white transition-all flex items-center justify-center gap-2">
                      <Mail size={18} /> View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
