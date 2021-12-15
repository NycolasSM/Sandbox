import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components//Header/Header.jsx'
import PreviewTest from './components/PreviewTest/PreviewTest';
import Tilt3D from './components/TiltCard3D/TiltCard3D.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Tilt3D />
    {/* <PreviewTest /> */}
  </React.StrictMode>,
  document.getElementById('root')
);