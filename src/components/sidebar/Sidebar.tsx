import React from "react";
// Styles
import "./Sidebar.css";
//Icons
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebarList-item active">
                <LineStyleIcon className="sidebar-icon" />
                <span>Home</span>
              </li>
            </Link>

            <li className="sidebarList-item">
              <TimelineIcon className="sidebar-icon" />
              <span>Analytics</span>
            </li>
            <li className="sidebarList-item">
              <TrendingUpIcon className="sidebar-icon" />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebarList-item active">
                <PermIdentityIcon className="sidebar-icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/new-user" className="link">
              <li className="sidebarList-item">
                <PermIdentityIcon className="sidebar-icon" />
                <span>New User</span>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarList-item">
                <StorefrontIcon className="sidebar-icon" />
                <span>Products</span>
              </li>
            </Link>
            <li className="sidebarList-item">
              <AttachMoneyIcon className="sidebar-icon" />
              <span>Transactions</span>
            </li>
            <li className="sidebarList-item">
              <BarChartIcon className="sidebar-icon" />
              <span>Report</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebarList-item active">
              <MailOutlineIcon className="sidebar-icon" />
              <span>Mail</span>
            </li>
            <li className="sidebarList-item">
              <DynamicFeedIcon className="sidebar-icon" />
              <span>Feedback</span>
            </li>
            <li className="sidebarList-item">
              <ChatBubbleOutlineIcon className="sidebar-icon" />
              <span>Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebarList-item active">
              <WorkOutlineIcon className="sidebar-icon" />
              <span>Manage</span>
            </li>
            <li className="sidebarList-item">
              <TimelineIcon className="sidebar-icon" />
              <span>Analytics</span>
            </li>
            <li className="sidebarList-item">
              <ReportIcon className="sidebar-icon" />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
