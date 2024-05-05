import React from 'react'

function Card({ username, content, time, id, delbtn }) {

  const originalDate = new Date(time);
  const options = { year: 'numeric', month: 'long', day: '2-digit' };

  const formattedDate = originalDate.toLocaleDateString('en-US', options).replace(/(\d+)(st|nd|rd|th)/, '$1$2');

  return (
    <>
    <div key={id} className='w-full h-max flex flex-col rounded-lg bg-white justify-center my-1 items-start p-4 '>
      <div className='font-bold sm:font-bold text-base sm:text-base lg:text-xl'>{username}</div>
      <div className='text-sm text-slate-600'>{formattedDate}</div>
      <div className='mt-1'><p >{content}</p></div>
    </div>    
    </>
  )
}

export default Card