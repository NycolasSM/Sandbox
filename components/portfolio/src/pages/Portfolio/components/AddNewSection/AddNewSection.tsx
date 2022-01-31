import React, { useState } from 'react';

import "./AddNewSection.css"

import AddButton from './assets/add-button-svgrepo-com.svg'
import AddNewSectionModal from './components/AddNewSectionModal/AddNewSectionModal';

const AddNewSection: React.FC = () => {

  const [addSection, setAddSection] = useState("label")
  const [addComponent, setAddComponent] = useState("")

  return (
    <>
      {addSection === "label" ? <>
        <section onClick={() => setAddSection("choosing")} className="portfolio-add-section">
          <img className="add-section-button" src={AddButton} alt="Add new Section" />
        </section>
      </>
        :
        addSection === "chose" ? <>
          {addComponent === "component1" ?
            <div>
              component1
            </div>
            :
            addComponent === "component2" ?
              <div>
                component2
              </div>
              :
              "this component does not exist"
          }
        </>
          :
          addSection === "choosing" ? <>
            <AddNewSectionModal cancel={() => setAddSection("label")} />
            {/* <button onClick={() => { setAddComponent("component1"), setAddSection("chose") }} >escolher component 1</button> */}
            {/* <button onClick={() => { setAddComponent("component2"), setAddSection("chose") }} >escolher component 2</button> */}
          </>
            :
            "this section does not exist"
      }

    </>
  );
};

export default AddNewSection;