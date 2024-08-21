"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { CgProfile } from 'react-icons/cg'; // Import CgProfile icon

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user_info } = useAuth(); // Import logout function from AuthContext
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | MouseEventInit) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout(); // Call the logout function
    router.push("/"); // Redirect to home page after logout
  };

  return (
    <div ref={profileRef} className="my-auto w-12 relative">
      <div className="relative inline-block">
        <button
          className="flex items-center justify-center ring-1 rounded-full overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CgProfile className="text-3xl text-white" /> {/* Replace with CgProfile icon */}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 flex w-60 flex-col gap-3 rounded-xl bg-slate-100 p-4 text-slate-900 shadow-lg z-50">
            <div className="flex items-center">
              <div>
                <div className="flex gap-1 text-[14px] font-semibold">
                  <span>{user_info?.name}</span>
                </div>
                <div className="flex gap-1 text-[14px] font-semibold">
                  <span>{user_info?.leetcodeId}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {user_info?.email}
                </div>
              </div>
            </div>
            <div className="border-t border-slate-500/30"></div>
            <div className="flex flex-col">
              <div onClick={() => router.push("https://leetcode.com/u/" + user_info?.leetcodeId + "/")}
                className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Profile</span>
              </div>
            </div>
            <button
              className="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 text-slate-500 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
