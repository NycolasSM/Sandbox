import React, { useState } from 'react';

import './Portfolio.css'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader';
import AddNewSection from './components/AddNewSection/AddNewSection';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';

const Portfolio: React.FC = () => {

  let [numberOfSections, setNumberOfSections] = useState(0)

  const [sectionArray, setSectionArray] = useState([{
    id: 0
  }]);

  const createNewSection = () => {
    setNumberOfSections(numberOfSections + 1)
    const copyPostArray = Object.assign([], sectionArray)
    copyPostArray.push({
      id: numberOfSections
    })
    setSectionArray(copyPostArray)
  }

  const deleteSection = (index: number) => {
    const copyPostArray = Object.assign([], sectionArray);
    copyPostArray.splice(index, 1);
    setSectionArray(
      copyPostArray
    )
  };

  return (
    <div className="portfolio-main-container">
      <PortfolioHeader />
      {
        sectionArray.map((section, index) => {
          return (
            <AddNewSection addNewSection={() => createNewSection()} key={section.id} id={section.id} deleteSection={deleteSection.bind(this, index)} />
          )
        })
      }
      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;