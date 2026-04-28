import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo.jpg';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notices', path: '/notices' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-academic-blue text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 9422619118 / 9699675975</span>
            <span className="flex items-center gap-2"><Mail size={14} /> psmsangli@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <Link to="/notices" className="hover:text-accent-gold transition-colors underline decoration-accent-gold underline-offset-4">Latest Notices</Link>
            <Link to="/admissions" className="bg-accent-gold text-academic-blue px-3 py-1 rounded font-semibold hover:bg-white transition-colors">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        "w-full transition-all duration-300 py-4 px-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-white"
      )}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-academic-blue leading-tight uppercase">Prashaskiya Seva</span>
              <span className="text-xs text-gray-500 font-bold tracking-widest">MAHAVIDYALAY, SANGLI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200",
                  location.pathname === link.path
                    ? "text-academic-maroon bg-academic-maroon/5"
                    : "text-gray-700 hover:text-academic-maroon hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "xl:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ease-in-out overflow-y-auto",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-bold py-3 border-b border-gray-100",
                  location.pathname === link.path ? "text-academic-maroon" : "text-gray-800"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
