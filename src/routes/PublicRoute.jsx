import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { mainContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const {user} = useContext(mainContext)

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
