"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Ranklist from '@/components/Ranklist';
import IndInfoCard from '@/components/IndInfoCard';
import GrpInfoCard from '@/components/GrpInfoCard';
import QuestionsBox from '@/components/QuestionsBox';
import PointsCard from '@/components/PointsCard';
import Timer from '@/components/Timer';
import { ProtectedRoute } from '@/hoc/ProtectedRoute';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const { user_type, isLoggedIn, user_info } = useAuth();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [data, setData] = useState(null); // Example data state (replace with actual data)

  useEffect(() => {
    // Simulate fetching data (replace with actual API call)
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/api/dashboard_data/");
        setData(response.data); // Set fetched data (replace with actual logic)
      } catch (e) {
        console.error("Error:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading spinner
  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-100"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute allowedRoles={["STUD"]}> {/* Only allow students to access */}
      <div className="h-full w-full mt-10">
        <div className="h-full w-full flex flex-col lg:flex-row px-5 py-5">
          {/* Ranklist positioned at the end on mobile view but at the start on larger screens */}
          <div className="order-last lg:order-first w-full lg:w-[30%] h-[76.5vh] mb-5 lg:mb-0 mt-5">
            <Ranklist />
          </div>
          <div className="flex flex-col w-full lg:w-[70%] px-6 space-y-5">
            <div className="flex flex-col lg:flex-row w-full justify-between h-full space-y-5 lg:space-y-0">
              <div className="w-full lg:w-[56%]">
                <Timer />
              </div>
              <div className="w-full lg:w-[41%]">
                <PointsCard />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-between space-y-5 lg:space-y-0">
              <div className="w-full lg:w-[45%]">
                <GrpInfoCard />
              </div>
              <div className="w-full lg:w-[52%]">
                <IndInfoCard />
              </div>
            </div>
            <div className="w-full">
              <QuestionsBox />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
