import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <Avatar className='sidebar-avatar' />
            <h2>Mark Shin</h2>
            <h4>markshin92@gmail.com</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar-statNumber">213</p>   
            </div>
            <div className="sidebar-stat">
                <p>Views on post</p>
                <p className="sidebar-statNumber">300</p>   
            </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar