import React from 'react';

const Header = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between whitespace-nowrap py-4">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-4xl">school</span>
            <h2 className="text-[#111118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">StudyFlow AI</h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-[#111118] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-[#111118] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Study Plan</a>
              <a className="text-[#111118] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Ask AI</a>
              <a className="text-[#111118] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Progress</a>
            </nav>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Start Planning</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
