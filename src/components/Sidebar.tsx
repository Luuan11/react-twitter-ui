import twitterLogo from '../assets/twitter-logo.svg';

import {DotsThreeCircle, User, FileText, BookmarkSimple, Envelope, Bell, Hash, House, Pencil } from 'phosphor-react';

import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export function Sidebar() {
    return(

    <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo twitter" />

        <nav className="sidebar-nav">
          <NavLink to="/">
            <House weight='fill'/> 
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash /> 
            <span>Explore</span></a>
          <a href="">
            <Bell /> 
            <span>Notifications</span></a>
          <a href="">
            <Envelope /> 
            <span>Messages</span></a>
          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span></a>
          <a href="">
            <FileText />
            <span>Twitter Blue</span></a>
          <a href="">
            <User />
            <span>Profile</span></a>
          <a href="">
            <DotsThreeCircle />
            <span>More</span></a>
        </nav>

        <button className="sidebar-btn">
          <span>Tweet</span>
          <Pencil />
          </button>
      </aside>
    )
}
