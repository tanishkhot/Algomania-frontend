import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the types for props
type Member = {
  name: string;
  points: number;
  easy: number;
  medium: number;
  hard: number;
  potd: number;
  staff: number;
  weekly: number;
  biweekly: number;
};

type Team = {
  teamName: string;
  members: Member[];
};

type GroupStatGraphProps = {
  selectedTeam: Team;
};

export default function GroupStatBar({ selectedTeam }: GroupStatGraphProps) {
  const data = {
    labels: selectedTeam.members.map(member => member.name),
    datasets: [
      {
        label: 'Easy',
        data: selectedTeam.members.map(member => member.easy),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Medium',
        data: selectedTeam.members.map(member => member.medium),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Hard',
        data: selectedTeam.members.map(member => member.hard),
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'POTD',
        data: selectedTeam.members.map(member => member.potd),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Staff',
        data: selectedTeam.members.map(member => member.staff),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Weekly',
        data: selectedTeam.members.map(member => member.weekly),
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Biweekly',
        data: selectedTeam.members.map(member => member.biweekly),
        backgroundColor: 'rgba(255, 99, 71, 0.5)',
        borderColor: 'rgba(255, 99, 71, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels:{
          color : 'rgba(255,255,255,0.8)',
        }
      },
      title: {
        display: true,
        text: `Questions Solved by Members in ${selectedTeam.teamName}`,
        color: 'rgba(255,255,255,0.8)',
      },
    },
    scales: {
      x: {
        barThickness: 50, 
        ticks:{
          color: 'rgba(255,255,255,0.8)',
        }
      },
      y: {
        beginAtZero: true,
        ticks:{
          color: 'rgba(255,255,255,0.8)',
        }
      },
    },
  };

  return (
    <div className='w-[95%] h-full bg-gray-500/30 backdrop-blur-md rounded-3xl p-4 border border-gray-100/20 '>
      <Bar data={data} options={options} />
    </div>
  );
}
