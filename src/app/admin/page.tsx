"use client";
import React, { useState, useEffect } from "react";
import Ranklist from "@/components/Ranklist";
import Timer from "@/components/Timer";
import GrpInfoCard from "@/components/GrpInfoCard";
import GroupStats from "@/components/GroupStats";
import GroupStatGraph from "@/components/GroupStatGraph";
import GroupStatBar from "@/components/GroupStatBar";
import axios from "axios";
import { ProtectedRoute } from "@/hoc/ProtectedRoute";

// Define the types
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

// Sample data (move it here or import it from a separate file if it's shared)

export default function Admin() {
  const [teamsData, setTeamsData] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/api/all_teams_summary/");
        setTeamsData(response.data);
        // Set the first team as the selected team after data is fetched
        if (response.data.length > 0) {
          setSelectedTeam(response.data[0]);
        }
      } catch (e) {
        console.error("Error:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-100"></div>
      </div>
    );
  }

  return (
    <>
      <ProtectedRoute allowedRoles={["PROF"]}>
        <div className="h-full w-full mt-10">
          <div className="flex px-5 py-5">
            <div className="w-[30%] h-[76.5vh]">
              <Ranklist />
            </div>
            <div className="flex flex-col w-[70%] px-6 h-[74vh]">
              <div className="flex w-1/2 justify-between mb-5 h-2/5">
                {selectedTeam && (
                  <GroupStats
                    teamsData={teamsData}
                    selectedTeam={selectedTeam}
                    setSelectedTeam={setSelectedTeam}
                  />
                )}
              </div>
              <div className="flex w-full h-3/5">
                <div className="w-[70%] h-full">
                  {selectedTeam && <GroupStatBar selectedTeam={selectedTeam} />}
                </div>
                <div className="w-[30%]">
                  {selectedTeam && <GroupStatGraph selectedTeam={selectedTeam} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
