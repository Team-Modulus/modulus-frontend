import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { mainContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
const {user} = useContext(mainContext)
console.log("user",user);


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
