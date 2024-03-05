import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const StoryCircle = () => {
  return (
    <div>
      <div  className='flex flex-col items-center mr-4 cursor-pointer'>
        <Avatar
      sx={{width:"5rem", height:"5rem",}}
    //   src=''
      >
      <AddIcon sx={{fontSize:"3rem"}}/>
      
      </Avatar>
      <p>name</p>
        </div>
    </div>
  )
}

export default StoryCircle
