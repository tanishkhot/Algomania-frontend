import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Define the types
type Member = {
  name: string;
  score: number;
  email: string;
  leetcodeId: string;
  team: number;
};

const GrpInfoCard: React.FC = () => {
  const router = useRouter();
  const { getToken } = useAuth();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const token = getToken();
        const authHeader = token ? `Bearer ${token}` : '';
        const response = await axios.get('http://127.0.0.1:8000/api/get_team/', { headers: { Authorization: authHeader } });
        setMembers(response.data.members);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
      setLoading(false);
    };
    fetchMembers();
  }, [getToken, router]);

  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-xl rounded-3xl flex flex-col px-5 py-3 border border-gray-100/20 shadow-lg'>
      <div className='w-full flex h-1/4 text-white justify-between items-center'>
        <div className='flex items-center justify-between w-1/3'>
          <h1 className='text-sm font-light'>Team</h1>
          <h1 className='text-2xl'>Proxy</h1>
        </div>
        <h1 className='text-2xl'>#9</h1>
      </div>
      {loading ? (
        <p>Loading members...</p>
      ) : (
        <div className='text-white'>
          <ul className='h-20 overflow-y-auto no-scroll'>
            {members.length > 0 ? (
              members.map(member => (
                <li key={member.leetcodeId}>
                  {member.name} ({member.score})
                </li>
              ))
            ) : (
              <p>No members found.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GrpInfoCard;

