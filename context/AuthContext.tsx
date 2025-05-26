'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserData {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userData: UserData | null;
  login: (user: UserData) => void;
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
          const user: UserData = JSON.parse(cookieValue);
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

  const login = (user: UserData) => {
    // In a real app, setting the cookie would likely happen during the API call handling
    // but we'll set it here for demonstration if not already set by the login form
    const existingCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
    if (!existingCookie) {
         const expirationDate = new Date();
         expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
         document.cookie = `user=${JSON.stringify(user)}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    setUserData(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove the user cookie
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
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