import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 sm:px-6 lg:px-8">
        <footer className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary justify-center md:justify-start">
              <span className="material-symbols-outlined text-2xl">school</span>
              <span className="text-[#111118] dark:text-white text-lg font-bold">StudyFlow AI</span>
            </div>
            <p className="text-[#616189] dark:text-gray-500 text-sm">© 2024 StudyFlow AI. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a className="text-[#616189] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-[#616189] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-[#616189] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
