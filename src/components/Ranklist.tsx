"use client"

import React, { useState } from 'react';

const Ranklist = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-xl rounded-3xl flex flex-col px-5 py-3 border border-gray-100/20 shadow-lg text-white font-inika'>
      <div role='tablist' className='relative w-full mx-auto grid grid-cols-2 rounded-full overflow-hidden bg-transparent border border-black shadow-2xl shadow-900/20 transition items-center'>
        <div className={`top-0 left-0 rounded-s-full shadow-md text-center justify-center flex ${activeTab === 'individual' ? 'bg-[#50D0FF]' : ''}`}>
          <button
            role="tab"
            aria-selected={activeTab === 'individual'}
            aria-controls="panel-1"
            id="tab-1"
            tabIndex={0}
            className="relative block h-10 px-6 tab rounded-full"
            onClick={() => handleTabClick('individual')}
          >
            <span className='text-white'>Individual</span>
          </button>
        </div>
        <div className={`top-0 left-0 rounded-e-full shadow-md text-center justify-center flex ${activeTab === 'group' ? 'bg-[#50D0FF]' : ''}`}>
          <button
            role="tab"
            aria-selected={activeTab === 'group'}
            aria-controls="panel-2"
            id="tab-2"
            tabIndex={0}
            className="relative block h-10 px-6 tab rounded-full"
            onClick={() => handleTabClick('group')}
          >
            <span className='text-white'>Group</span>
          </button>
        </div>
      </div>
      <div className='flex-1 mt-6 relative rounded-3xl bg-purple-50'>
        {activeTab === 'individual' && (
          <div role='tabpanel' id='panel-1' className='p-6 transition duration-300 h-full'>
            <h2 className="text-xl font-semibold text-gray-800">Individual Ranklist</h2>
          </div>
        )}
        {activeTab === 'group' && (
          <div role='tabpanel' id='panel-2' className='p-6 transition duration-300 h-full'>
            <h2 className="text-xl font-semibold text-gray-800">Group Ranklist</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranklist;
