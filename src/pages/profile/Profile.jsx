import { Avatar, Button, Card } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../../components/post/PostCard';
import UserReelCard from '../../components/reels/UserReelCard';

const Profile = () => {
    const tabs=[
        {value:"post", name:"Post"},
        {value:"reels", name:"Reel"},
        {value:"saved", name:"Saved"},
        {value:"repost", name:"Repost"}
    ]
    const posts=[1,1,1,1];
    const reels=[1,1,1,1];
    const savedPost=[1,1,1,1];
    const {id}=useParams();
    const [value, setValue] = React.useState('post');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Card className='py-10 w-[70%]'>
        <div className='rounded-md'>
            <div className='h-[15rem]'>
            <img 
            className='w-full h-full rounded-top'
            src='https://cdn.pixabay.com/photo/2019/11/29/16/21/lord-krishna-4661658_1280.jpg'
            alt=''
            />
            </div>
            <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
            <Avatar 
            className='transform -translate-y-24' 
            sx={{width:"10rem",height:"10rem"}} 
            src=''/>

            {true? <Button sx={{borderRadius:"20px"}}
             variant='outlined'>Edit Profile</Button>
             : <Button sx={{borderRadius:"20px"}} 
             variant='outlined'>Follow</Button>}
            </div>
            <div className='p-5'>

                <div>
                    <h1 className='py-1 font-bold text-xl'>Ishika Singh</h1>
                    <p>@isha</p>
                </div>

                <div className='flex gap-5 items-center py-3'>
                    <span>40 posts</span>
                    <span>780 followers</span>
                    <span>300 following</span>
                </div>
                <div>
                <p>love to be loved, hare krishna</p>
                 </div>
            </div>
          

            <section>
            <Box sx={{ width: '100%', borderBottom:1, borderColor:"divider" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                
               
                {tabs.map((item)=> <Tab value={item.value} 
                label={item.name} 
                wrapped/>)}
            </Tabs>
            </Box>

            <div className='flex justify-center'>
                {value==="post"?(
                <div className='space-y-5 w-[70%] my-10'>
                  {posts.map((item)=>(
                  <div className='border border-slate-100 rounded-md'>
                    <PostCard/>
                  </div>  
                  ))}
                  </div>)
                  :
                  value==="reels"? 
                  <div className='flex justify-center flex-wrap gap-2 my-10'>
                    {reels.map((item)=>
                        <UserReelCard/>
                      )}
                  </div>
                  :
                    value==="saved"? 
                  <div className='flex justify-center flex-wrap gap-2 my-10'>
                    {savedPost.map((item)=>
                        <PostCard/>
                      )}
                  </div>
                  : (
                    <div>Repost</div>
                    )}
                  
            </div>
            </section>
        </div>
    </Card>
  )
}

export default Profile
