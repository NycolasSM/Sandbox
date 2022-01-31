import React, { useState } from 'react';

import "./AddNewSection.css"

import AddButton from './assets/add-button-svgrepo-com.svg'
import AddNewSectionModal from './components/AddNewSectionModal/AddNewSectionModal';

const AddNewSection: React.FC = () => {

  const [addSection, setAddSection] = useState("label")

  return (
    <>
      {addSection === "label" ? <>
        <section onClick={() => setAddSection("choosing")} className="portfolio-add-section">
          <img className="add-section-button" src={AddButton} alt="Add new Section" />
        </section>
      </>
        :
        addSection === "choosing" ? <>
          <AddNewSectionModal cancel={() => setAddSection("label")} />
        </>
          :
          "this section does not exist"
      }
    </>
  );
};

export default AddNewSection;