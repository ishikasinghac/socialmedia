import { Grid } from '@mui/material'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import MiddlePart from '../../components/middle/MiddlePart'
import CreateReels from '../../components/reels/CreateReels'
import Reels from '../../components/reels/Reels'
import Profile from '../profile/Profile'
import HomeRight from '../../components/homeright/HomeRight'

const HomePage = () => {
    const location=useLocation();
  return (
    <div className='px-20'>
        
        <Grid container spacing={0}>
            <Grid item xs={0} lg={3}>
            <div className='sticky top-0'>
                <Sidebar/>
            </div> 
            </Grid>
           
            <Grid lg={
                location.pathname==='/'?6:9} 
                item className='px-5 flex justify-center' 
                xs={12}>
                <Routes>
                    <Route path='/' element={<MiddlePart/>}/>
                    <Route path='/reels' element={<Reels/>}/>
                    <Route path='/create-reels' element={<CreateReels/>}/>
                    <Route path='/profile/:id' element={<Profile/>}/>
                </Routes>
            </Grid>
            
            {/* to fix the bar of post saved reels */}
           
            {location.pathname==='/' &&
                <Grid item lg={3} className="relative">
                <div className='sticky top-0 w-full'>
                    <HomeRight/>
                </div>
            </Grid>}
        </Grid>
      
    </div>
  )
}

export default HomePage
