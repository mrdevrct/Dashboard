import React from "react";
// Styles
import "./WidgeteSm.css";
// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
// data
import { users } from "../../data/data";

function WidgeteSm() {
  return (
    <div className="widgeteSm">
      <span className="widgeteSm-title">New Join Members</span>
      <ul className="widgeteSm-list">
        {users.map((user) => (
          <li className="widgeteSm-list-item">
            <img src={user.img} className="widgeteSm-image" loading="lazy" />
            <div className="widgeteSm-user">
              <span className="widgeteSm-username">
                {user.firstname}
                {user.lastname}
              </span>
              <span className="widgeteSm-user-title">{user.skill}</span>
            </div>
            <button className="widgeteSm-button">
              <VisibilityIcon className="widgeteSm-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgeteSm;
