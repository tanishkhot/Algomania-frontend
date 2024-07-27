"use client"

import React, { useState } from 'react';
import Rankbox from './Rankbox';

const Ranklist = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const rankData = [
    {name: 'Devashish Bhirdi',points: 150, rank: '#1'},
    {name: 'Atharva Dhake',points: 120, rank: '#2'},
    {name: 'Gaurav Waghmare',points: 78, rank: '#3'},
    {name: 'Pratik Survase',points: 27, rank: '#4'},
    {name: 'Tanish Khot',points: 16, rank: '#5'},
    {name: 'Kshitij Dhake',points: 11, rank: '#6'},
    {name: 'Soham Kottawar',points: 7, rank: '#7'},
    {name: 'Kartik Tichkule',points: 2, rank: '#8'},
    {name: 'Shlok gaidhani',points: 0, rank: '#9'},
    {name: 'Kanak Agarwal',points: 0, rank: '#10'},
  ];
// We support GFG	623
// Shishimaru	579
// LeetHunters	525
// SIGSEGV	495
// Code Crushers	399
// AlgoRiders	349
// Code Executors	306
// Proxy	304
// Whoami	263
// Hustlers	248
// Leet Legends	131
// Tech Titans	131
// AlgorithmAviator	102
// ZerotoHero	93
// Test Cases Passed	91
// Chhichhore coders	78
// meatHeads	76
// Binary Bosses	67
// Titanic	39
// Algorithm Avengers	0
// CodeRangers	0
// Leet_Comer	0
  const groupRank = [
    {name: 'We Support GFG',points : 623,rank: '#1'},
    {name: 'Shishimaru',points : 579,rank: '#2'},
    {name: 'LeetHunters',points : 525,rank: '#3'},
    {name: 'SIGSEGV',points : 495,rank: '#4'},
    {name: 'Code Crushers',points : 399,rank: '#5'},
    {name: 'AlgoRiders',points : 349,rank: '#6'},
    {name: 'Code Executors',points : 306,rank: '#7'},
    {name: 'Proxy',points : 304,rank: '#8'},
    {name: 'Whoami',points : 263,rank: '#9'},
    {name: 'Hustlers',points : 248,rank: '#10'},
    {name: 'Leet Legends',points : 131,rank: '#11'},
    {name: 'Tech Titans',points : 131,rank: '#12'},
    {name: 'AlgorithmAviator',points : 102,rank: '#13'},
    {name: 'ZerotoHero',points : 93,rank: '#14'},
    {name: 'Test Cases Passed',points : 91,rank: '#15'},
    {name: 'Chhichore Coders',points : 78,rank: '#16'},
    {name: 'meatHeads',points : 76,rank: '#17'},
    {name: 'Binary Bosses',points : 67,rank: '#18'},
    {name: 'Titanic',points : 39,rank: '#19'},
  ]

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
        <div className={`top-0 left-0 rounded-e-full shadow-md text-cente justify-center flex ${activeTab === 'group' ? 'bg-[#50D0FF]' : ''}`}>
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
      <div className=' mt-6 relative rounded-3x'>
        {activeTab === 'individual' && (
          <div role='tabpanel' id='panel-1' className='transition duration-300 h-full'>
            <Rankbox name='Devashish Bhirdi' points={150} rank='#1' />
            <div className='mt-4 h-80 overflow-y-scroll space-y-4 no-scroll'>
              {rankData.map((rank,index) => (
                <Rankbox key={index} name={rank.name} points={rank.points} rank={rank.rank}/>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'group' && (
          <div role='tabpanel' id='panel-2' className='transition duration-300 h-full'>
            <Rankbox name='We Support GFG' points={623} rank='#1' />
            <div className='mt-4 h-80 overflow-y-scroll space-y-4 no-scroll'>
              {groupRank.map((rank,index) => (
                <Rankbox key={index} name={rank.name} points={rank.points} rank={rank.rank}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranklist;

// We support GFG	623
// Shishimaru	579
// LeetHunters	525
// SIGSEGV	495
// Code Crushers	399
// AlgoRiders	349
// Code Executors	306
// Proxy	304
// Whoami	263
// Hustlers	248
// Leet Legends	131
// Tech Titans	131
// AlgorithmAviator	102
// ZerotoHero	93
// Test Cases Passed	91
// Chhichhore coders	78
// meatHeads	76
// Binary Bosses	67
// Titanic	39
// Algorithm Avengers	0
// CodeRangers	0
// Leet_Comer	0