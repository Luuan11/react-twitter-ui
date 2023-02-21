import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { Sparkle, DotsThreeCircle, User, FileText, BookmarkSimple, Envelope, Bell, Hash, House } from 'phosphor-react'

import twitterLogo from './assets/twitter-logo.svg'
import { Tweet } from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">

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

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
              <textarea id="tweet" placeholder="What's happening? "></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
