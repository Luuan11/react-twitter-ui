import twitterLogo from '../assets/twitter-logo.svg';

import {DotsThreeCircle, User, FileText, BookmarkSimple, Envelope, Bell, Hash, House } from 'phosphor-react';

import './Sidebar.css';

export function Sidebar() {
    return(

    <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo twitter" />

        <nav className="sidebar-nav">
          <a href="" className='active'>
            <House weight='fill'/> 
            Home</a>
          <a href="">
            <Hash /> 
            Explore</a>
          <a href="">
            <Bell /> 
            Notifications</a>
          <a href="">
            <Envelope /> 
            Messages</a>
          <a href="">
            <BookmarkSimple />
            Bookmarks</a>
          <a href="">
            <FileText />
            Twitter Blue</a>
          <a href="">
            <User />
            Profile</a>
          <a href="">
            <DotsThreeCircle />
            More</a>
        </nav>

        <button className="sidebar-btn">Tweet</button>
      </aside>
    )
}
