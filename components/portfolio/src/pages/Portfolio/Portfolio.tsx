import React, { useState } from 'react';

import './Portfolio.css'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader';
import AddNewSection from './components/AddNewSection/AddNewSection';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';

const Portfolio: React.FC = () => {

  const createNewSection = () => {

  }

  const [sectionArray, setSectionArray] = useState([
    {id: 1},
    {id: 2},
  ])

  const deleteSection = (index: any) => {
    const copyPostArray = Object.assign([], sectionArray);
    copyPostArray.splice(index, 1);
    setSectionArray(
      copyPostArray
    )
  }
  
  return (
    <div className="portfolio-main-container">
      <PortfolioHeader />
      {
        sectionArray.map((section, index) => {
          return (
            <AddNewSection id={section.id} deleteSection={deleteSection.bind(this, index)}/>
          )
        })
      }
      <button onClick={() => createNewSection()}>teste</button>
      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;