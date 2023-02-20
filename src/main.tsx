import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { Tweet } from './components/Tweet';

import twitterLogo from './assets/twitter-logo.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo twitter" />

        <nav className="sidebar-nav"> 
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Notifications</a>
          <a href="">Messages</a>
          <a href="">Bookmarks</a>
          <a href="">Twitter Blue</a>
          <a href="">Profile</a>
          <a href="">More</a>
        </nav>

        <button className="sidebar-btn">Tweet</button>
      </aside>
      <div className="content">
        
      </div>
    </div>
  </React.StrictMode>,
)
