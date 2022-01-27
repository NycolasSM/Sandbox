import React from 'react';

import './MainTest.css'

type Props = {
  titulo?: string,
  color?: string
}

const MainTest: React.FC<Props> = ({ titulo, color }) => {
  return (
    <div className='main-wrapper'>
      <div className='main-test' style={{ backgroundColor: `${color}`}}>
        {titulo}
      </div>
    </div>
  );
};

export default MainTest;
