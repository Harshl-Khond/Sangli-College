import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-academic-blue mb-4">Contact Us</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us for admissions, academic inquiries, or any other information.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="w-full lg:w-4/12 space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-accent-gold transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-academic-blue shadow-sm mb-6 group-hover:bg-academic-blue group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-academic-blue mb-2">Our Address</h3>
              <p className="text-slate-600 leading-relaxed">
                123 Knowledge Park, Sangli-Miraj Road, <br />Sangli, Maharashtra - 416416
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-accent-gold transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-academic-blue shadow-sm mb-6 group-hover:bg-academic-blue group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-academic-blue mb-2">Call Us</h3>
              <p className="text-slate-600 mb-1">+91 233 123 4567</p>
              <p className="text-slate-600">+91 987 654 3210</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-accent-gold transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-academic-blue shadow-sm mb-6 group-hover:bg-academic-blue group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-academic-blue mb-2">Email Us</h3>
              <p className="text-slate-600 mb-1">office@psmsangli.edu.in</p>
              <p className="text-slate-600">admissions@psmsangli.edu.in</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-8/12 bg-academic-blue rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            
            <h2 className="text-3xl font-bold mb-8 relative z-10">Send an Inquiry</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-accent-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-accent-gold transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-accent-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Subject</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-accent-gold transition-colors appearance-none">
                    <option className="bg-academic-blue">Admission Inquiry</option>
                    <option className="bg-academic-blue">Academic Doubt</option>
                    <option className="bg-academic-blue">Recruitment</option>
                    <option className="bg-academic-blue">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-accent-gold transition-colors resize-none"></textarea>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-accent-gold text-academic-blue font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-[450px] bg-slate-100 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Interactive Google Map Integration</p>
            </div>
          </div>
          {/* In a real app, embed iframe here */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <h4 className="font-bold text-academic-blue mb-2">Visit Our Campus</h4>
            <p className="text-sm text-slate-500 mb-4">Located at the heart of Sangli city, easily accessible from the railway station and bus stand.</p>
            <button className="text-academic-maroon text-sm font-bold flex items-center gap-1 hover:underline">
              GET DIRECTIONS <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
