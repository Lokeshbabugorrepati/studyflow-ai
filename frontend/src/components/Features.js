import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col gap-12 py-20 @container">
      <div className="flex flex-col gap-4 text-center items-center">
        <h2 className="text-[#111118] dark:text-white text-3xl font-bold leading-tight sm:text-4xl tracking-tight max-w-[720px]">
          Why StudyFlow?
        </h2>
        <p className="text-[#616189] dark:text-gray-400 text-lg font-normal leading-normal max-w-[600px]">
          Tools designed to help you focus on what matters most—learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[28px]">calendar_month</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#111118] dark:text-white text-xl font-bold leading-tight">Smart Scheduling</h3>
            <p className="text-[#616189] dark:text-gray-400 text-base font-normal leading-relaxed">
              Automatically generate adaptive study plans based on your exam dates and syllabus. Never worry about "what to study next" again.
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[28px]">psychology</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#111118] dark:text-white text-xl font-bold leading-tight">AI Tutor</h3>
            <p className="text-[#616189] dark:text-gray-400 text-base font-normal leading-relaxed">
              Get instant, context-aware answers and simplifications for difficult concepts as you study. It's like having a professor on call 24/7.
            </p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[28px]">monitoring</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#111118] dark:text-white text-xl font-bold leading-tight">Progress Tracking</h3>
            <p className="text-[#616189] dark:text-gray-400 text-base font-normal leading-relaxed">
              Visualize your mastery over time with beautiful analytics. Watch your confidence grow as you check off topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
