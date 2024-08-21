"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getToken: () => string | null;
  isTeam: () => boolean;
  user_type: string | null;
  user_info: { [key: string]: any } | null;
  setTeam: (team_id: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user_type, setUserType] = useState<string | null>(null);
  const [user_info, setUserInfo] = useState<{ [key: string]: any } | null>(null);

  const loadAuthData = () => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('user_type');
    const userInfo = JSON.parse(localStorage.getItem('user_info') || 'null');

    setIsLoggedIn(!!token);
    setUserType(userType);
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadAuthData(); // Load authentication data on mount
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password });
      const { token, user_type, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user_type', user_type);
      localStorage.setItem('user_info', JSON.stringify(user));

      setIsLoggedIn(true);
      setUserType(user_type);
      setUserInfo(user);

      handleRedirect(user_type, user.team);
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleRedirect = (user_type: string, hasTeam: boolean) => {
    if (!hasTeam) {
      router.push('/team');
    } else {
      switch (user_type) {
        case 'STUD':
          router.push('/dashboard');
          break;
        case 'PROF':
          router.push('/admin');
          break;
        default:
          router.push('/unauthorized');
          break;
      }
    }
  };

  const handleLoginError = (error: any) => {
    if (axios.isAxiosError(error) && error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Unexpected error occurred during login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_info');

    setIsLoggedIn(false);
    setUserType(null);
    setUserInfo(null);

    router.push('/');
  };

  const getToken = () => localStorage.getItem('token');

  const isTeam = () => {
    return user_info?.team ? true : false;
  };

  const setTeam = (team_id: string): void => {
    if (user_info) {
      user_info.team = team_id;
      localStorage.setItem('user_info', JSON.stringify(user_info)); // Update localStorage
      setUserInfo(user_info); // Update state
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getToken, isTeam, user_type, user_info, setTeam }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
