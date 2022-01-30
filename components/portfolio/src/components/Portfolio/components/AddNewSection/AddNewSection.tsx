import React from 'react';

import "./AddNewSection.css"

import AddButton from './assets/add-button-svgrepo-com.svg'

const AddNewSection: React.FC = () => {
  return (
    <section className="portfolio-add-section">
      <img className="add-section-button" src={AddButton} alt="Add new Section" />
    </section>
  );
};

export default AddNewSection;