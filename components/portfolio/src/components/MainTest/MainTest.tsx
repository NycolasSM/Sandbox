import React from 'react';

import './MainTest.css'

interface {
  titulo: string;
}

const MainTest: React.FC = ( titulo ) => {
  return (
    <div className='main-wrapper'>
      <div className='main-test'>
        {titulo}
      </div>
    </div>
  );
};

export default MainTest;
