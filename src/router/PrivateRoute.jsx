/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <>
     <Player
          autoplay
          loop
          src="https://lottie.host/ee074ed3-6bd7-44d2-8a3e-a7daa98f1018/ycCQbavn6j.json"
          style={{ height: '300px', width: '300px' }}
      >
          <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;