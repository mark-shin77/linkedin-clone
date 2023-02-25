import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
import { auth } from './firebase';


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch((logout))
    auth.signOut();
  }


  return (
    <div className="header">
      <div className="header-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" />
        
        <div className="header-search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
        
      </div>

      <div className="header-right">
         <HeaderOption Icon={HomeIcon} title="Home"/>
         <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
         <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
         <HeaderOption Icon={ChatIcon} title="Messaging"/>
         <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
         <HeaderOption avatar={true} onClick={logoutOfApp} title="me"/>
      </div>
    </div>
  )
}

export default Header