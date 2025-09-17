"use client"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { mainContext } from "../context/AuthContext"


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(mainContext)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return user ? children : <Navigate to="/" replace />
}

export default ProtectedRoute
