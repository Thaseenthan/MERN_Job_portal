import React, { useState, useEffect  } from 'react'
import { Link, NavLink,useNavigate  } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from "react-icons/fa6"


//import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config'; // Ensure this path is correct for your project
import { signOut, onAuthStateChanged } from 'firebase/auth';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () =>{
    setIsMenuOpen(!isMenuOpen)
  };


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsAuthenticated(!!user); // If user exists, set isAuthenticated to true
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
  }, []);



  const handleLogout = async () => {
    try {
        await signOut(auth);
        alert("Logged out successfully");
        navigate('/sign-up');
    } catch (error) {
        console.error("Error logging out: ", error);
    }
};



  const navItems = [
    
    {path: "/", title: "Start a Search"  },
    {path: "/my-job", title: "My Jobs"},
    {path: "/post-job", title: "Post a Job"}
   
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 py-4'>
      <nav className='flex justify-between items-center py-6'>
        <img src="images/Job-logo5.jpg" className='w-40 h-36 flex item-centre gap-2' id='jpimage'/>

        {/* nav items for large devices */}
        <ul className='hidden md:flex gap-16 '>
          {
            navItems.map(({path, title}) => (
              <li key={path} className='  hover:text-3xl font-bold text-2xl '>
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ))
          }
        </ul>

        {/* sign up log in log out btn  */}


          {isAuthenticated ? (
                <button onClick={handleLogout} className='py-2 px-5 border rounded-2xl font-bold text-2xl hover:bg-gray-500 bg-slate-200'>
                    Logout
                </button>
            ) : (
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='py-2 px-5 border rounded-2xl font-bold text-2xl hover:bg-gray-500 bg-slate-200'>
                        Log in
                    </Link>
                    <Link to="/sign-up" className='py-2 px-5 border rounded-2xl font-bold text-2xl bg-[#0f5f2c] text-white hover:bg-black'>
                        Sign up
                    </Link>
                </div>
            )}
      </nav>

    </header>
  )
}

export default NavBar