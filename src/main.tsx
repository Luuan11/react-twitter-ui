import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { Tweet } from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img src="" alt="logo twitter" />

        <nav>

        </nav>

        <button>Tweet</button>
      </aside>
      <div className="content">
        
      </div>
    </div>
  </React.StrictMode>,
)
