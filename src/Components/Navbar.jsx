import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
    <>
      <div className='w-full z-[10] font-semibold text-lg fixed top-0 display h-[max] py-4 px-20 flex justify-between items-center bg-[#B2A4FF]'>
        <div className='text-xl font-bold'>confessionity</div>
        <div className='flex justify-evenly items-center'>
          <div className={`mx-10 hover:text-red-700 h-full cursor-pointer`}><NavLink to='/'>Home</NavLink></div>
          <div className={`mx-10 hover:text-red-700 h-full cursor-pointer`}><NavLink to='/groups'>Group</NavLink></div>
          <div className={`mx-10 hover:text-red-700 h-full cursor-pointer`}><NavLink to='/profile'>Profile</NavLink></div>
        </div>
        <div className='bg-[#7f6fd8] hover:bg-[#6e61bc] px-4 py-2 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>login</div>
      {/* <div className='bg-emerald-500 w-fit h-fit'>{home}</div>
      <div className='bg-emerald-500 w-fit h-fit'>{group}</div>
      <div className='bg-emerald-500 w-fit h-fit'>{profile}</div> */}
      </div>
    </>
  )
}

export default Navbar