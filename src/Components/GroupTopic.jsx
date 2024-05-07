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
    <div className='flex flex-col justify-start items-center w-full h-full overflow-scroll no-scrollbar'>
      <div className='text-xl font-bold'>My groups</div>
      {/* {groups?.map(group => {
        return (
          <div className='w-full bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-[#cbc3fa] shadow-lg rounded-lg my-2' onClick={() => { handleSpecificGroup(group._id) }}>
            <GroupCard gid={group._id} groupname={group.name} no={group.members.length} desc={group.bio} />
          </div>
        )
      })} */}

      {
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
      }
      <MoreHorizIcon />
    </div>
  )
}

export default GroupTopic