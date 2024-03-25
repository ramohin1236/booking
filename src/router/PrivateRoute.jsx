/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <p>Loading....</p>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;