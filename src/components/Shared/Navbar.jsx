import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,logout}=useContext(AuthContext);

    

    return (
        <div className="navbar bg-blue-700 text-white font-bold h-36">
         <div className="container mx-auto">
         <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl md:text-5xl">Booking.com</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-8 ">
           
           {
            user && user? <div>
            <p>Welcome to <span className="font-bold md:text-3xl block">{user.displayName}</span></p>
            <button 
            onClick={logout}
            className="btn ">Sign Out</button>
            </div> :<>
                 <Link to='/login'> <button className="btn btn-active bg-white text-blue-500 font-bold max-sm:w-20">Sign In</button></Link>
            <Link to='/signup'><button className=" btn btn-active bg-white text-blue-500 font-bold max-sm:w-24">Sign Up</button></Link>
            </>
           }
      
          </ul>
        </div>
         </div>
      </div>
    );
};

export default Navbar;