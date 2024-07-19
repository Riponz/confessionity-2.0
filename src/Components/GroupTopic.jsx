import React, { useContext, useEffect, useState } from 'react'
import GroupCard from './GroupCard'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { userContext } from '../App';
import axios from 'axios';
import { userGroup } from '../assets/baseUrl';
import { useNavigate } from 'react-router-dom';

function GroupTopic() {

  const [group, setGroup] = useState([])

  const { uid, reload, groups, setUsername, setEmail, setUid } = useContext(userContext)

  const navigate = useNavigate()

  const handleSpecificGroup = (gid) => {
    navigate('/group/' + gid)
  }


  return (
    <div className='flex flex-col justify-start items-center px-4 w-full h-full overflow-scroll no-scrollbar'>
      <div className='text-xl font-bold'>My groups</div>

      {/* {
        groups ? (
          groups?.map(group => {
            return (
              <div className='w-full bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-[#cbc3fa] shadow-lg rounded-lg my-2' onClick={() => { handleSpecificGroup(group._id) }}>
                <GroupCard gid={group._id} groupname={group.name} no={group.members.length} desc={group.bio} />
              </div>
            )
          })
        ) : (
          <div className='w-full bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-[#cbc3fa] shadow-lg rounded-lg my-2' onClick={() => { handleSpecificGroup(group._id) }}>
            <GroupCard />
          </div>
        )
      } */}

      {
        uid ? (groups ? (
          groups?.length ? (
            groups?.map(group => {
              return (
                <div className='w-full bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-[#cbc3fa] shadow-lg rounded-lg my-2' onClick={() => { handleSpecificGroup(group._id) }}>
                  <GroupCard gid={group._id} groupname={group.name} no={group.members.length} desc={group.bio} />
                </div>
              )
            })
          ) : (
            <div className='font-bold text-2xl w-full h-full flex justify-center items-center'>No Joined Groups!</div>
          )

        ) : (
          <div className='w-full bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-[#cbc3fa] shadow-xl rounded-lg my-2' onClick={() => { handleSpecificGroup(group._id) }}>
            <GroupCard />
          </div>
        )) : (<div className='w-full h-full text-xl font-bold flex justify-center items-center'>login to view...</div>)
      }
      <MoreHorizIcon />
    </div>
  )
}

export default GroupTopic