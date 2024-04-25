import React from 'react'
import Card from '../Components/Card'

function Profile() {
  return (
    <>
      <section className='w-full h-[88vh] py-1 flex justify-center items-center'>
        <div className='w-full rounded-lg p-4 h-full flex flex-col justify-evenly items-center bg-white m-3 basis-1/3 '>


          <div className="info w-full flex justify-evenly items-center">
            <div className="image rounded-full w-28 h-28 bg-black"></div>

            <div className="name">
              <div className='font-bold text-black text-2xl'>username</div>
            </div>
          </div>

          <div className="email text-xl font-bold">riponbiswasfilms@gmail.com</div>

          <div className='text-xl font-bold'>Your Anonymity, Our <span className='text-[#B2A4FF]'>Responsibility</span></div>


        </div>
        <div className='userpost w-full h-full px-20 basis-2/3 overflow-scroll no-scrollbar'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}

export default Profile