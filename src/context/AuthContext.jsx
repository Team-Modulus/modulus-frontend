import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import API from '../constants/Api';



// Create a context to share token and user information
export const mainContext = createContext();

export const MainProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || "");

  // On mount, check for token in URL (e.g., after Google OAuth redirect)
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    if (urlToken && urlToken !== token) {
      setToken(urlToken);
      localStorage.setItem('token', urlToken);
      // Optionally, remove token from URL for cleanliness
      urlParams.delete('token');
      const newUrl = window.location.pathname + (urlParams.toString() ? `?${urlParams.toString()}` : '');
      window.history.replaceState({}, '', newUrl);
    }
  }, []); // Only run on mount

  // Function to fetch user details
  const fetchUserDetails = async () => {
    if (!token) return; // Don't fetch if there is no token
    try {
      const response = await axios.get(API.auth.userDetails, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setUser(response.data.user||null);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Error fetching user details:', error);
      signOut(); // Clear user data on error
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      fetchUserDetails(); // Fetch user details whenever token changes
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser("");
    }
  }, [token]);

  const signOut = () => {
    // Clear token and user data from localStorage and reset state
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken('');
    setUser({});
  };
  console.log("user",user);
  

  return (
    <mainContext.Provider value={{ token, setToken, user, setUser, signOut, fetchUserDetails }}>
      {children}
    </mainContext.Provider>
  );
};
