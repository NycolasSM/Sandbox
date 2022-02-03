import React, { Component, useState } from 'react';

import './ChoosingLayout.css'

import Layout1 from './layouts/Layout1/Layout1';
import Layout2 from './layouts/Layout2/Layout2';

import { FaExchangeAlt } from 'react-icons/fa'

import HeaderLayout1 from '../../../../../../assets/HeadeLayout1.png'
import HeaderLayout2 from '../../../../../../assets/HeadeLayout2.png'

type Props = {
  setIsChoosenHeaderLayout: () => void;
}


const ChoosingLayout: React.FC<Props> = ({
  setIsChoosenHeaderLayout
}) => {

  const [chosenLayout, setChosenLayoult] = useState("choosing")

  const chooseLayout = (option: string) => {
    setChosenLayoult(option)
  }

  return (
    <div className='main-wrapper'>
      {chosenLayout === "choosing" ? <>
        <h3 className='portfolio-chosing-label'>Choose Header Layout</h3>
        <div className='portfolio-choosing'>
          <img onClick={() => { chooseLayout("layout1"), setIsChoosenHeaderLayout() }} src={HeaderLayout1} alt="layout" />
          <img onClick={() => { chooseLayout("layout2"), setIsChoosenHeaderLayout() }} src={HeaderLayout2} alt="layout" />
        </div>
      </>
        :
        chosenLayout === "layout1" ? <>
          <FaExchangeAlt className='portfolio-header-change-layout-button' onClick={() => setChosenLayoult("choosing")} size={30} />
          <label className='portfolio-header-change-layout-button-label' htmlFor="changeHeaderButton">Change Header</label>
          <Layout1 />
        </>
          :
          chosenLayout === "layout2" ? <>
            <FaExchangeAlt className='portfolio-header-change-layout-button' id='changeHeaderButton' onClick={() => setChosenLayoult("choosing")} size={30} />
            <label className='portfolio-header-change-layout-button-label' htmlFor="changeHeaderButton">Change Header</label>
            <Layout2 choseLayout={() => setChosenLayoult("choosing")} />
          </>
            :
            "esse layout nao existe"
      }
    </div >
  );
};

export default ChoosingLayout;