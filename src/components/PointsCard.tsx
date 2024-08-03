// components/PointsCard.tsx

import React from 'react';
import QuestionChart from './PointsChart';

const PointsCard: React.FC = () => {
  const easy = 10; 
  const medium = 5; 
  const hard = 2; 
  const potd = 6; 
  const staff = 2;
  const weekly = 1;
  const biweekly = 1;
  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-md border border-gray-100/20 rounded-3xl flex items-center justify-center'>
      <QuestionChart easy={easy} medium={medium} hard={hard} potd={potd} staff={staff} weekly={weekly} biweekly={biweekly}/>
    </div>
  );
}

//15+6+3+8+10

export default PointsCard;
