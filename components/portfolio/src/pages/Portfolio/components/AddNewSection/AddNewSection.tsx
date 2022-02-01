import React, { useState } from 'react';

import "./AddNewSection.css"

import AddButton from './assets/add-button-svgrepo-com.svg'
import AddNewSectionModal from './components/AddNewSectionModal/AddNewSectionModal';

type Props = {
  id: number;
  deleteSection: () => void;
  addNewSection: () => void;
  type?: string;
}

const AddNewSection: React.FC<Props> = ({ deleteSection, addNewSection }) => {

  const [addSection, setAddSection] = useState("label")
  const [isComponentChoosen, setIsComponentChoosen] = useState(false)

  return (
    <section className='new-section-container'>
      {addSection === "label" ? <>
        <section onClick={() => setAddSection("choosing")} className="add-section">
          <img className="add-section-button" src={AddButton} alt="Add new Section" />
        </section>
      </>
        :
        addSection === "choosing" ? <>
          <AddNewSectionModal isComponentChoosen={() => setIsComponentChoosen(true)} cancel={() => setAddSection("label")} addNewSection={addNewSection} />
          {isComponentChoosen === true ?
            <button className="delete-section-button" onClick={() => deleteSection()}>X</button>
            : ""}
        </>
          :
          "this section does not exist"
      }
    </section>
  );
};

export default AddNewSection;