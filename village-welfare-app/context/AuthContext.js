// context/AuthContext.js
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
// import { onAuthChange, isAdmin as checkIsAdmin } from '@/lib/firebase/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribe = onAuthChange((authUser) => {
    //   setUser(authUser);
    //   setIsAdmin(checkIsAdmin(authUser));
    //   setLoading(false);
    // });

    // return () => unsubscribe();
  }, []);

  const value = {
    user,
    isAdmin,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
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