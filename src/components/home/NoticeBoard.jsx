import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    "Admission Open for Academic Year 2024-25. Apply now!",
    "Annual Sports Meet scheduled for May 15th, 2024.",
    "Last date for examination form submission extended to April 30th.",
    "Internal assessment marks uploaded on the student portal.",
    "Guest lecture on 'Artificial Intelligence in Modern Industry' this Friday."
  ];

  return (
    <div className="bg-academic-maroon text-white py-3">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 font-bold whitespace-nowrap bg-white/10 px-4 py-1 rounded-full mr-4 border border-white/20">
          <Bell size={18} className="animate-bounce" />
          <span className="text-sm">LATEST UPDATES:</span>
        </div>
        <div className="flex-grow overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap hover:pause">
            {notices.map((notice, i) => (
              <span key={i} className="mx-8 text-sm font-medium hover:text-accent-gold cursor-pointer transition-colors">
                • {notice}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {notices.map((notice, i) => (
              <span key={i + 'copy'} className="mx-8 text-sm font-medium hover:text-accent-gold cursor-pointer transition-colors">
                • {notice}
              </span>
            ))}
          </div>
        </div>
        <button className="ml-4 text-xs font-bold hover:underline flex items-center gap-1 whitespace-nowrap">
          VIEW ALL <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
