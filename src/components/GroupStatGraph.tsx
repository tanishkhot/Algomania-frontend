import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
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

export default function GroupStatGraph({ selectedTeam }: GroupStatGraphProps) {
  // Prepare data for the doughnut chart
  const data = {
    labels: selectedTeam.members.map(member => member.name),
    datasets: [
      {
        label: 'Points',
        data: selectedTeam.members.map(member => member.points),
        backgroundColor: selectedTeam.members.map(() =>
          // Generate random colors for each segment
          `hsl(${Math.random() * 360}, 70%, 70%)`
        ),
        borderColor: 'rgba(0, 0, 0, 0.3)',
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
            color:'rgba(255,255,255,0.8)',
        }
      },
      title: {
        display: true,
        text: `Points Distribution of Members in ${selectedTeam.teamName}`,
        color: 'rgba(255,255,255,0.8)',
      },
    },
  };

  return (
    <div className='w-full h-full bg-gray-500/30 border border-gray-100/20 backdrop-blur-md rounded-3xl p-4'>
      <Doughnut data={data} options={options} />
    </div>
  );
}
