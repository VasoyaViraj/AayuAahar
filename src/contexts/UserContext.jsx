import React, { createContext, useEffect, useState } from 'react';
import {  DBService } from '@/services/appwriteConfig.js';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  // const [user, setUser] = useState({
  //   "id" : "doc_002",
  //   "name" : "Aayush Parekh",
  //   "email" : "aayush@aa.in",
  //   "role" : "pa" 
  // });

  const [user, setUser] = useState({
    "id" : "pat_002",
    "name" : "Viraj Vasoya",
    "email" : "viraj@aa.in",
    "role" : "patient" 
  });

  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const currentUser = await DBService.getCurrentUser();
      
  //     if(currentUser){
  //       setUser({
  //         id: currentUser?.$id || null,
  //         name: currentUser?.name || null,
  //         email: currentUser?.email || null,
  //         role: currentUser?.labels?.[0] || "patient"
  //       });
  //     }
  //   };
  
  //   getCurrentUser();
  // }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};