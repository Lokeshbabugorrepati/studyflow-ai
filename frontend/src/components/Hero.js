import React from 'react';

const Hero = () => {
  return (
    <div className="@container">
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Hero Text */}
        <div className="flex flex-col gap-8 flex-1 lg:max-w-[50%]">
          <div className="flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">AI-Powered Learning</span>
            </div>
            <h1 className="text-[#111118] dark:text-white text-4xl font-black leading-[1.1] tracking-[-0.033em] sm:text-5xl lg:text-6xl">
              Plan smarter.<br/>
              <span className="text-primary">Learn better.</span><br/>
              Revise confidently.
            </h1>
            <h2 className="text-[#616189] dark:text-gray-400 text-lg font-normal leading-relaxed max-w-[540px]">
              Stop cramming and start flowing. StudyFlow AI organizes your syllabus into manageable chunks and adapts to your learning pace, ensuring you walk into every exam prepared.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/20">
              <span className="truncate">Start Planning</span>
            </button>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#111118] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all">
              <span className="truncate">How it works</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#616189] dark:text-gray-500">
            <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
            <span>Free for students</span>
            <span className="mx-2">•</span>
            <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
            <span>No credit card required</span>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-full flex-1 lg:h-[500px]">
          <div className="w-full h-full min-h-[300px] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl shadow-primary/10 relative overflow-hidden group" data-alt="Student focused on laptop in a bright modern library environment" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA51XogFu-I96fGg4bYkfa278HIPbq1t6bbgE8oBXFMoDT-aBWwT7AMxDeh-FHiQrLh4i22C5nlwRV_gro7gFXSJslR3ZXzrqGvCsfQVZ7RPEfhsAze4EdV-evTwvXHOfObSw4adh919mBx-nYGAbJg0DBUH95HD58XfHoqE-WX1rpOMLp4Sulp61TGdl1smyQj_bWLl7hEESOwWsFJhUovtQ2Zbx0eNZ3skQMVkMnitfC1yWa6urNZ_nZt6ZGfqM_6Ca3yMvcV3hEw")'}}>
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
