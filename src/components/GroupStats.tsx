"use client";

import React from 'react';

// Define the types
type Member = {
  name: string;
  points: number;
};

type Team = {
  teamName: string;
  members: Member[];
};

type GroupStatsProps = {
  teamsData: Team[];
  selectedTeam: Team;
  setSelectedTeam: React.Dispatch<React.SetStateAction<Team>>;
};

export default function GroupStats({ teamsData, selectedTeam, setSelectedTeam }: GroupStatsProps) {
  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeamName = e.target.value;
    const team = teamsData.find(team => team.teamName === selectedTeamName);
    if (team) {
      setSelectedTeam(team);
    }
  };

  const totalPoints = selectedTeam.members.reduce((sum, member) => sum + member.points, 0);

  return (
    <div className='rounded-3xl bg-gray-500/30 backdrop-blur-md border border-gray-100/10 w-full h-full py-4 px-4'>
      <div className='mb-4 h-1/4'>
        <label htmlFor='team-select' className='block text-sm font-medium text-white'>Select Team:</label>
        <select
          id='team-select'
          value={selectedTeam.teamName}
          onChange={handleTeamChange}
          className='mt-1 block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        >
          {teamsData.map(team => (
            <option key={team.teamName} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>
      </div>
      <div className='flex h-3/4 pb-3'>
        <div className='flex flex-col w-1/2'>
          <div className='text-lg font-semibold text-white mb-4'>
            {selectedTeam.teamName}
          </div>
          <ul className='space-y-2 overflow-y-scroll no-scroll h-52'>
            {selectedTeam.members.map(member => (
              <li key={member.name} className='flex justify-between'>
                <span className='text-white'>{member.name}<span className='ml-2'>({member.points} points)</span></span>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-white text-5xl w-1/2 h-full flex items-center justify-center'>
          <span>{totalPoints}</span>
        </div>
      </div>
    </div>
  );
}
