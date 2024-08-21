import React from 'react';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import Profile from './Profile';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, user_type, user_info } = useAuth(); // Access the necessary values from the AuthContext

  return (
    <div className="flex items-center px-5 justify-between w-full h-16">
      <Link href="/">
        <h1 className="text-white text-2xl font-bold">AlgoMania</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="text-white text-xl">Home</h1>
        </Link>

        {isLoggedIn && !user_info?.team && user_type === "STUD" && (
          <Link href="/team">
            <h1 className="text-white text-xl">Join Team</h1>
          </Link>
        )}

        {isLoggedIn && user_type === "STUD" && (
          <Link href="/dashboard">
            <h1 className="text-white text-xl">Dashboard</h1>
          </Link>
        )}

        {isLoggedIn && user_type === "PROF" && (
          <Link href="/admin">
            <h1 className="text-white text-xl">Admin</h1>
          </Link>
        )}

        {!isLoggedIn ? (
          <Link href="/login">
            <h1 className="text-white text-xl">Sign In</h1>
          </Link>
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
};

export default Navbar;
