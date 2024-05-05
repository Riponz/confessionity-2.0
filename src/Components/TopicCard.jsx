import React, { useContext, useState } from 'react'
import Tags from './Tags'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { userContext } from '../App';

function TopicCard({ topics }) {

  console.log(topics, " from topicsCard")

  const { uid, reload, toggle, setToggle, username, setGroups, setUsername, setEmail, setUid } = useContext(userContext);

  const sxStyle = {
    backgroundImage: 'linear-gradient(90deg, hsl(251, 91%, 95%) 0%, hsl(226, 100%, 94%)100%)',
  }

  const handleToggle = (event, opt) => {
    setToggle(opt)
  }
  console.log(toggle, " toggle")
  return (
    <div className='w-full p-5 h-full flex justify-center items-center flex-wrap overflow-hidden no-scrollbar'>
<div className='text-xl font-bold'>Topics</div>

      <ToggleButtonGroup className='w-full p-5 h-full flex justify-center items-between flex-wrap' onChange={handleToggle} value={toggle} size="small" >
        {
          topics?.map(topic => {
            return (<ToggleButton style={{ borderRadius: "none", outlineColor: '#b2a4ff', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}} value={topic}>{topic}</ToggleButton>)
          })
        }

      </ToggleButtonGroup>


      {/* <Tags tag='depression' />
      <Tags tag='shahrukh' />
      <Tags tag='blues' />
      <Tags tag='pocoloco' />
      <Tags tag='hello world' />
      <Tags tag='locopilot' />
      <Tags tag='helo' />
      <Tags tag='depression' />
      <Tags tag='shahrukh' />
      <Tags tag='blues' />
      <Tags tag='pocoloco' />
      <Tags tag='hello world' />
      <Tags tag='locopilot' /> */}
    </div>
  )
}

export default TopicCard