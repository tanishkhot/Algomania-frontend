"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { cn } from '../../../lib/utils';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext'; // Import useAuth
import { useRouter } from 'next/navigation';

export default function Team() {
  const [teamId, setTeamId] = useState('');
  const [loading, setLoading] = useState(false);
  const { getToken, setTeam } = useAuth(); // Access token from AuthContext
  const router = useRouter()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamId(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading state to true
    try {
      const token: string | null = getToken();
      const response = await axios.patch<{ message: string }>(
        'http://127.0.0.1:8000/api/set_team_id/',
        { team_id: teamId },
        {
          headers: {
            'Authorization': `Bearer ${token}` // Pass the authorization token
          }
        }
      );
      setTeam(teamId);
      alert(response.data.message);

      router.push('/dashboard')
      // Handle success (e.g., redirect or show a success message)
    } catch (error) {
      console.error("Error joining team:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className={`w-full max-w-md h-auto px-4 py-6 flex flex-col justify-start items-start bg-gray-500/30 backdrop-blur-xl rounded-3xl border border-gray-100/20`}>
        <h1 className='text-white text-2xl md:text-3xl font-semibold mb-4'>Enter Team ID to Join</h1>
        <div className='w-full flex flex-col justify-center items-end space-y-4'>
          <LabelInputContainer>
            <Input
              className='w-full'
              id="teamId"
              placeholder="Enter Team ID"
              type="text"
              value={teamId}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <button
            className={cn(
              "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 md:h-12 font-medium shadow-md transition-all",
              loading && "opacity-50 cursor-not-allowed"
            )}
            type="button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Team"} {/* Button text changes based on loading state */}
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
