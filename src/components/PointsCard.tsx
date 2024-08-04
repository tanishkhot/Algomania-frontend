"use client"
// components/PointsCard.tsx
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import QuestionChart from './PointsChart';

const PointsCard: React.FC = () => {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [potd, setPotd] = useState(0);
  const [staff, setStaff] = useState(0);
  const [weekly, setWeekly] = useState(0);
  const [biweekly, setBiweekly] = useState(0);
 
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get("https://algomania-backend.onrender.com/api/get_profile/");
        const profile = response.data.profile;

        const easy = profile.find(item => item.difficulty === 'Easy');
        const medium = profile.find(item => item.difficulty === 'Medium');
        const hard = profile.find(item => item.difficulty === 'Hard');

        if(easy) setEasy(easy.count);
        if(medium) setMedium(medium.count);
        if(hard) setHard(hard.count);
      }
      catch (e){
        console.error("Error:", e);
      }
    }
    fetchData();
  }, [])
  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-md border border-gray-100/20 rounded-3xl flex items-center justify-center'>
      <QuestionChart easy={easy} medium={medium} hard={hard} potd={potd} staff={staff} weekly={weekly} biweekly={biweekly}/>
    </div>
  );
}

//15+6+3+8+10

export default PointsCard;
