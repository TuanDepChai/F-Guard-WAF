'use client';

import { CloudCog } from 'lucide-react';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserData {
  _id: string;
  email: string;
  username?: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userData: UserData | null;
  setUserData: (user: UserData) => void;
  login: (user: UserData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Check for user cookie on initial load
    const userCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
    if (userCookie) {
      try {
        const cookieValue = userCookie.split('=')[1];
        if (cookieValue) {
          const user: UserData = JSON.parse(decodeURIComponent(cookieValue));
          setUserData(user);
          setIsLoggedIn(true);
        } else {
          // Cookie exists but value is empty
          setIsLoggedIn(false);
          setUserData(null);
        }
      } catch (error) {
        console.error('Failed to parse user cookie:', error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, []);

  const login = async (user: UserData) => {
    // Set cookie with proper encoding and expiration
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
    const cookieValue = encodeURIComponent(JSON.stringify(user));
    document.cookie = `user=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    // Remove the user cookie
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict';
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, setUserData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 