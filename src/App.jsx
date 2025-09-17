import { useState } from 'react'
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import AppRouter from './routes/AppRouter.jsx';
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);
    console.log("Token saved to localStorage");
    window.history.replaceState({}, document.title, "/dashboard");
  } else {
    console.log(" No token found in URL.");
  }
}, [])
  return (
    <>
  <AppRouter/>
    </>
  )
}

export default App
