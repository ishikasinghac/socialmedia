import {  Menu,MenuItem, Button, Divider, Avatar } from '@mui/material'
import * as React from 'react';
import { navigationMenu } from './SidebarNavigation'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='card h-screen flex flex-col justify-between py-5'>

          <div className='logo font-bold text-xl'>Social Paradise</div>  

        <div className='space-y-8'>
          {
            navigationMenu.map((item)=> (<div className='cursor-pointer flex space-x-3 items-center'>
              {item.icon}
              <p className='text-xl'>{item.title}</p>
              </div>
          ))}
        </div>  
        <div>
        <Divider/>
        <div className='pl-5 flex items-center justify-between pt-5'>
            <div className='flex items-center space-x-3'>
              <Avatar src=""/>
              <div>
                <p className='font-bold'>Username</p>
                <p className='opacity-70'>@ishika</p>
              </div>
            </div>
            <div> 
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div> 
        </div>
        </div>
        </div>
        
    
  )
}

export default Sidebar
