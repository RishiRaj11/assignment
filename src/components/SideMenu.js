import React from 'react'
import "./SideMenu.css"
import SideMenuSubcomponent from './SideMenuSubcomponent';
import { Typography } from '@mui/material';
const SideMenu = () => {
  return (
    <div className='sidemenu'>
      <SideMenuSubcomponent />
      <Typography style={{marginLeft:"50px"}}>Explore differnt sections</Typography>
      <div>
      <SideMenuSubcomponent />
      <SideMenuSubcomponent />
      <SideMenuSubcomponent />
      <SideMenuSubcomponent />
      </div>
    </div>
  )
}

export default SideMenu;
