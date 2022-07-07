import React from "react";
import user from "../images/user.png";
import list from "../images/list.png"
import download from "../images/download.png"
import setting from "../images/settings.png"

export default function Sidebar() {
    return (
        <div className="sidebar-menu">
            <img src={user} alt="user" className="sidebar-img" />
            <img src={list} alt="list" className="sidebar-img" />
            <img src={download} alt="ownload" className="sidebar-img" />
            <img src={setting} alt="setting" className="sidebar-img" />
        </div>
    )
}