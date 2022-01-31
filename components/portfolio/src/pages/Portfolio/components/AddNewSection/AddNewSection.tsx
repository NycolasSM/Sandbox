import React, { useState } from 'react';

import "./AddNewSection.css"

import AddButton from './assets/add-button-svgrepo-com.svg'
import AddNewSectionModal from './components/AddNewSectionModal/AddNewSectionModal';

type Props = {
  id: any;
  deleteSection: () => void;
  type?: string;
}

const AddNewSection: React.FC<Props> = ({ deleteSection }) => {

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
      <button onClick={() => deleteSection()}>Delete Section</button>
    </>
  );
};

export default AddNewSection;