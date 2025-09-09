import React, { createContext, useEffect, useState } from 'react';
import {  DBService } from '@/services/appwriteConfig.js';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    "id" : null,
    "name" : null,
    "email" : null,
    "role" : "patient" 
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await DBService.getCurrentUser();
  
      setUser({
        id: currentUser?.$id || null,
        name: currentUser?.name || null,
        email: currentUser?.email || null,
        role: currentUser?.labels?.[0] || "patient"
      });
    };
  
    getCurrentUser();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};