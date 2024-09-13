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
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <li className="sidebarList-item">
                <LineStyleIcon className="sidebar-icon" />
                <span>Home</span>
              </li>
            </NavLink>

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
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <li className="sidebarList-item">
                <PermIdentityIcon className="sidebar-icon" />
                <span>Users</span>
              </li>
            </NavLink>
            <NavLink
              to="/new-user"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <li className="sidebarList-item">
                <PermIdentityIcon className="sidebar-icon" />
                <span>New User</span>
              </li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <li className="sidebarList-item">
                <StorefrontIcon className="sidebar-icon" />
                <span>Products</span>
              </li>
            </NavLink>
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
            <li className="sidebarList-item">
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
            <li className="sidebarList-item">
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
