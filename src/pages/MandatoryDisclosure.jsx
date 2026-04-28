import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, PieChart, Users, BookOpen } from 'lucide-react';

const MandatoryDisclosure = () => {
  const documents = [
    { title: "Affiliation Certificates", icon: <ShieldCheck />, desc: "Recognition from University and UGC Section 2(f) & 12(B)." },
    { title: "NAAC / NBA Accreditation", icon: <Award />, desc: "Accreditation certificates and Peer Team reports." },
    { title: "Audit Reports", icon: <PieChart />, desc: "Financial audit statements for the last three years." },
    { title: "AISHE Data", icon: <BookOpen />, desc: "All India Survey on Higher Education annual submissions." },
    { title: "Governing Body", icon: <Users />, desc: "List of members and minutes of the governing body meetings." },
    { title: "Annual Reports", icon: <FileText />, desc: "Institution's progress and achievements for the academic year." }
  ];

  const committees = [
    "Anti-Ragging Committee",
    "Grievance Redressal Cell",
    "Internal Quality Assurance Cell (IQAC)",
    "Internal Complaint Committee (ICC)",
    "SC/ST Cell",
    "College Development Committee (CDC)"
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-academic-blue mb-4"
          >
            Mandatory Disclosure
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Public self-disclosure in compliance with Indian UGC guidelines and University regulations for institutional transparency.
          </p>
        </header>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-academic-maroon/10 rounded-xl flex items-center justify-center text-academic-maroon mb-6">
                {doc.icon}
              </div>
              <h3 className="text-xl font-bold text-academic-blue mb-3">{doc.title}</h3>
              <p className="text-slate-500 mb-6 flex-grow">{doc.desc}</p>
              <button className="flex items-center gap-2 text-academic-maroon font-bold text-sm hover:underline">
                <Download size={16} /> DOWNLOAD PDF
              </button>
            </motion.div>
          ))}
        </div>

        {/* Committees Section */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-academic-blue/5 rounded-full -mr-20 -mt-20"></div>
          
          <h2 className="text-3xl font-bold text-academic-blue mb-10 relative z-10">Statutory Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {committees.map((committee, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-accent-gold transition-colors cursor-pointer group">
                <div className="w-2 h-2 bg-accent-gold rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="font-semibold text-slate-700">{committee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock Award icon since it wasn't imported from lucide-react in the previous list but used in map
const Award = () => <ShieldCheck />;

export default MandatoryDisclosure;
