import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { getRole } from "../api/user";

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
  

    useEffect(()=>{
     getRole(user?.email)
     .then(data=>{
        console.log(data)
    setRole(data)
    setLoading(false)
    })
    },[user])





    return (
   
      
     <div className="md:flex min-h-screen">
      {
        loading? <p>Loading...</p> : (

            <>
            <div><Sidebar role={role}/></div>
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet/>
                </div>
            </div>
            </>
        )
      }
     </div>


    );
};

export default DashboardLayout;