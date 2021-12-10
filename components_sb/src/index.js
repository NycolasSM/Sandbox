import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components//Header/Header.jsx'
import PreviewTest from './components/PreviewTest/PreviewTest';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <PreviewTest />
  </React.StrictMode>,
  document.getElementById('root')
);