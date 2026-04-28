import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/src/assets/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold tracking-tight uppercase">Prashaskiya Seva Mahavidyalay</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Affiliated with Kavikulguru Kalidas Sanskrit University, Ramtek (Nagpur). Managed by EHP Association. Specializing in Civil Services and Competitive Exam training.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-academic-maroon transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-academic-maroon transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-academic-maroon transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-academic-maroon transition-colors"><FaLinkedinIn size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent-gold pl-3">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Institution</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Courses Offered</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admission 2024-25</Link></li>
              <li><Link to="/notices" className="hover:text-white transition-colors">Latest News & Events</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
              <li><Link to="/mandatory-disclosure" className="hover:text-white transition-colors">UGC Mandatory Disclosure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent-gold pl-3">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-gold shrink-0" size={20} />
                <span>Near Varad Hospital, Bypass Corner, Madhavnagar Road, Sangli, Maharashtra - 416416</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent-gold shrink-0" size={18} />
                <span>+91 9422619118 / 9699675975 / 8855804414</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent-gold shrink-0" size={18} />
                <span>psmsangli@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Maps / Quick Access */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent-gold pl-3">UGC Compliance</h3>
            <div className="grid grid-cols-1 gap-2">
              <a href="#" className="flex items-center justify-between p-3 bg-slate-800 rounded hover:bg-slate-700 transition-all text-sm group">
                NAAC Self Study Report <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-slate-800 rounded hover:bg-slate-700 transition-all text-sm group">
                NIRF Ranking 2024 <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-slate-800 rounded hover:bg-slate-700 transition-all text-sm group">
                AISHE Reports <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-slate-800 rounded hover:bg-slate-700 transition-all text-sm group">
                Internal Quality Assurance <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Prashaskiya Seva Mahavidyalay, Sangli. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
