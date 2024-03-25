/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaBars } from "react-icons/fa";
import GuesMenu from "./GuesMenu";


const Sidebar = ({ role, loading }) => {
    const navigate=useNavigate()
    const { user, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')
    console.log(role)
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }

    const signOut =()=>{
        logout()
   navigate("/login")
    }
    return (
        <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>AirCnC</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
        >
            <FaBars className='h-5 w-5'/>
        
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
              <Link to='/'> AirCnC</Link>
            </h2>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                />
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* <nav>
              {role && role !== 'requested' ? (
                <>{role === 'admin' ? <AdminMenu /> : <HostMenu />} </>
              ) : (
                <UserMenu />
              )}
            </nav> */}
            <GuesMenu/>
          </div>
        </div>

        <div>
          <hr />
          <button
            // handler={logout}
            className='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform'
          >
            <FaArrowRight className='w-5 h-5' />

            <span onClick={signOut} className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
    );
};

export default Sidebar;