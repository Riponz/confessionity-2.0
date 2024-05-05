import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from '../App';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Navbar() {

  const { uid, setUid, setGroups, setEmail, setUsername } = useContext(userContext);

  const navigate = useNavigate()

  const handleLogout = async () => {
    console.log("clicked logout");
    await signOut(auth);
    setUid("");
    setEmail("");
    setUsername("");
    setGroups([])

  };

  const handleSignup = () => {
    navigate("/signup")
  }

  const handleLogin = async () => {

    navigate('/login');
  };


  return (
    <>
      <div className='w-full z-[10] font-semibold text-lg fixed top-0 display h-[max] py-4 px-20 flex flex-col md:flex-row justify-between items-center bg-[#B2A4FF]'>
        <div className='w-max flex justify-evenly items-center'>
          <div className='text-xl font-bold'>confessionity</div>
          {/* <form className='w-[16rem] ml-5 rounded-lg h-8 flex justify-center items-center bg-[#e5e7eb]'>
            <input type="text" required={true} placeholder='search groups...' className='bg-transparent outline-none w-[70%]' />
            <button type='submit'><SearchIcon /></button>
          </form> */}
        </div>
        <div className='flex justify-evenly items-center'>
          <div className={`mx-5 my-4 md:my-0 md:mx-10 hover:text-white h-full cursor-pointer`}><NavLink to='/'>Home</NavLink></div>
          <div className={`mx-5 my-4 md:my-0 md:mx-10 hover:text-white h-full cursor-pointer`}><NavLink to='/groups'>Group</NavLink></div>
          <div className={`mx-5 my-4 md:my-0 md:mx-10 hover:text-white h-full cursor-pointer`}><NavLink to='/profile'>Profile</NavLink></div>
        </div>
        <div className='flex justify-center items-center'>
          {uid ? "" : (<div onClick={handleSignup} className='cursor-pointer mr-5 font-bold'>Signup</div>)}
          <div onClick={uid ? handleLogout : handleLogin} className='bg-[#7f6fd8] cursor-pointer hover:bg-[#6e61bc] px-4 py-2 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>{uid ? "logout" : "login"}</div>
        </div>{/* <div className='bg-emerald-500 w-fit h-fit'>{home}</div>
      <div className='bg-emerald-500 w-fit h-fit'>{group}</div>
      <div className='bg-emerald-500 w-fit h-fit'>{profile}</div> */}
      </div>
    </>
  )
}

export default Navbar