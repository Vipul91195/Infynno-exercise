import React from "react";
import Frame from "../images/Frame.png";
import searchbar from "../images/search.png";
import gift from "../images/gift.png";
import bell from "../images/bell.png";
import profile from "../images/Ellipse.png";



export default function Header() {
    return (
        <div className="top-bar">
            <div>
                <img src={Frame} alt="Frame" className="frame" />
            </div>
            <nav className="nav-bar">
                <a href="#">HOME </a>
                <a href="#">TV SHOW </a>
                <a href="#">MOVIES</a>
                <a href="#">NEW</a>
            </nav>

            <div className="searchbar">
                <input type="" placeholder="SEARCH" />
                <img src={searchbar} alt="search" className="searh-img" />
            </div>
            <div className="header-img">
                <img src={gift} alt="gift" className="gift-img" />
                <img src={bell} alt="bell" className="bell-img" />
            </div>
            <div>
                <img src={profile} alt="profile" className="profile-img" />
            </div>
        </div>
    )

}