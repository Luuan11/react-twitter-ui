import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separator';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">

      <Sidebar />

      <div className="content">
        <main className="timeline">
          
        <Header title='Home' />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
              <textarea id="tweet" placeholder="What's happening? "></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          <Tweet />
          <Tweet />

        </main>
      </div>
    </div>
  </React.StrictMode>,
)
