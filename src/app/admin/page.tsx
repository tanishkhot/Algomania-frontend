"use client"
import React, { useState } from 'react';
import Ranklist from '@/components/Ranklist';
import Timer from '@/components/Timer';
import GrpInfoCard from '@/components/GrpInfoCard';
import GroupStats from '@/components/GroupStats';
import GroupStatGraph from '@/components/GroupStatGraph';
import GroupStatBar from '@/components/GroupStatBar';

// Define the types
type Member = {
  name: string;
  points: number;
  easy : number;
  medium : number;
  hard : number;
  potd : number;
  staff : number;
  weekly : number;
  biweekly : number;
};

type Team = {
  teamName: string;
  members: Member[];
};

// Sample data (move it here or import it from a separate file if it's shared)
const teamsData: Team[] = [
    {
      teamName: 'Proxy',
      members: [
        { name: 'Devashish', points: 190, easy: 50, medium: 40, hard: 30, potd: 20, staff: 10, weekly: 20, biweekly: 20 },
        { name: 'Athava', points: 130, easy: 40, medium: 30, hard: 20, potd: 10, staff: 5, weekly: 15, biweekly: 10 },
        { name: 'Gaurav', points: 95, easy: 30, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 10, biweekly: 5 },
        { name: 'Pratik', points: 72, easy: 20, medium: 15, hard: 10, potd: 7, staff: 5, weekly: 10, biweekly: 5 },
        { name: 'Kshitij', points: 5, easy: 1, medium: 1, hard: 1, potd: 1, staff: 0, weekly: 1, biweekly: 0 },
        { name: 'Tanish', points: 50, easy: 15, medium: 10, hard: 10, potd: 5, staff: 2, weekly: 5, biweekly: 3 },
        { name: 'Soham', points: 10, easy: 3, medium: 2, hard: 2, potd: 1, staff: 1, weekly: 1, biweekly: 0 },
        { name: 'Shlok', points: 1, easy: 0, medium: 0, hard: 0, potd: 1, staff: 0, weekly: 0, biweekly: 0 },
        { name: 'Kanak', points: 0, easy: 0, medium: 0, hard: 0, potd: 0, staff: 0, weekly: 0, biweekly: 0 },
        { name: 'Kartik', points: 20, easy: 5, medium: 5, hard: 5, potd: 2, staff: 1, weekly: 1, biweekly: 1 },
      ],
    },
    {
      teamName: 'Team Beta',
      members: [
        { name: 'David', points: 90, easy: 30, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 5, biweekly: 5 },
        { name: 'Eve', points: 85, easy: 25, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 5, biweekly: 5 },
        { name: 'Frank', points: 88, easy: 28, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 5, biweekly: 5 },
      ],
    },
    {
      teamName: 'Team Gamma',
      members: [
        { name: 'Grace', points: 92, easy: 32, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 5, biweekly: 5 },
        { name: 'Heidi', points: 78, easy: 22, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 3, biweekly: 3 },
        { name: 'Ivan', points: 85, easy: 25, medium: 20, hard: 15, potd: 10, staff: 5, weekly: 5, biweekly: 5 },
      ],
    },
  ];

export default function Admin() {
  const [selectedTeam, setSelectedTeam] = useState<Team>(teamsData[0]);

  return (
    <div className="h-full w-full mt-10">
      <div className="flex px-5 py-5">
        <div className="w-[30%] h-[76.5vh]">
          <Ranklist />
        </div>
        <div className="flex flex-col w-[70%] px-6 h-[74vh]">
          <div className="flex w-1/2 justify-between mb-5 h-2/5">
            <GroupStats
              teamsData={teamsData}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          </div>
          <div className="flex w-full h-3/5">
            <div className='w-[70%] h-full'>
                <GroupStatBar selectedTeam={selectedTeam} />
            </div>
            <div className='w-[30%]'> 
                <GroupStatGraph selectedTeam={selectedTeam}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
