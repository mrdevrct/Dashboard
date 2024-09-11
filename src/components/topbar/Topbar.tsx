import React from "react";
// Styles
import "./Topbar.css";
// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWapper">
        <div className="top-left">
          <span className="logo">Devrct ❤️</span>
        </div>
        <div className="top-right">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadg">2</span>
          </div>
          <div className="topbarIconContainer">
            <PublicIcon />
            <span className="topIconBadg">lg</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="images/IMG_20240909_145706.jpg" className="top-avatar" alt="avatar"/>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
