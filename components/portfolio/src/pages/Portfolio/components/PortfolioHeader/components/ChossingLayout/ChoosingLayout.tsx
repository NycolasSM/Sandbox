import React, { Component, useState } from 'react';

import './ChoosingLayout.css'

import Layout1 from './layouts/Layout1/Layout1';
import Layout2 from './layouts/Layout2/Layout2';

import HeaderLayout1 from '../../../../../../assets/HeadeLayout2.png'
import HeaderLayout2 from '../../../../../../assets/HeadeLayout2.png'


const ChoosingLayout: React.FC = () => {

  const [chosenLayout, setChosenLayoult] = useState("choosing")

  const chooseLayout = (option: string) => {
    setChosenLayoult(option)
  }

  return (
    <>
      {chosenLayout === "choosing" ? <>
        <div className='main-wrapper'>
          <h3 className='portfolio-chosing-label'>Choose Header Layout</h3>
          <div className='portfolio-choosing'>
            <img onClick={() => chooseLayout("layout1")} src={HeaderLayout1} alt="layout" />
            <img onClick={() => chooseLayout("layout2")} src={HeaderLayout2} alt="layout" />
          </div>
        </div>
      </>
        :
        chosenLayout === "layout1" ?
          <Layout1 choseLayout={() => setChosenLayoult("choosing")} />
          :
          chosenLayout === "layout2" ?
            <Layout2 choseLayout={() => setChosenLayoult("choosing")} />
            :
            "esse layout nao existe"
      }
    </>
  );
};

export default ChoosingLayout;