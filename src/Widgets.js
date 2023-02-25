import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  
  const newArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className='widgets'>
         <div className="widgets-header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
         </div>
         {newArticle("PAPA React is back", "Top news - 9999 readers")}
         {newArticle("Coronavirus: UK updates", "Top news - 886 readers")}
         {newArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
         {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
         {newArticle("Is Redux too good?", "Code - 123 readers")}
         {newArticle("PAPA React launches course?!", "Top news - 6503 readers")}
         
    </div>
  )
}

export default Widgets