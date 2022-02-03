import React, { useState } from "react";

import "./AddNewSection.css"

import AddButton from "./assets/add-button-svgrepo-com.svg"
import AddNewComponent from "./components/AddNewComponent/AddNewComponent";

type Props = {
  id: number;
  deleteSection: () => void;
  addNewSection: () => void;
}

const AddNewSection: React.FC<Props> = ({ deleteSection, addNewSection }) => {


  let [numberOfComponents, setNumberOfComponents] = useState(1)

  const [addSection, setAddSection] = useState("addNewSection")

  const [componentArray, setComponentArray] = useState<any>([]);

  const createNewComponent = () => {
    setNumberOfComponents(numberOfComponents + 1)
    const copyPostArray = Object.assign([], componentArray)
    copyPostArray.push({
      id: numberOfComponents
    })
    setComponentArray(copyPostArray)
  }

  const deleteComponent = (index: number) => {
    const copyPostArray = Object.assign([], componentArray);
    copyPostArray.splice(index, 1);
    setComponentArray(
      copyPostArray
    )
  };

  return (
    <>
      {addSection === "addNewSection" ? <>
        <div className="add-section"  >
          <button onClick={() => { addNewSection(), setAddSection("sectionAdded") }} id="addSecton" className="add-section-button">+</button>
          <label className="add-section-button-label" htmlFor="addSecton">Add New Section</label>
        </div>
      </>
        :
        ""
      }
      {addSection === "sectionAdded" ? <section className="new-section" id="newSection" >
          <div className="options-section-buttons">
            <button className="config-section-button">config</button>
            <button className="delete-section-button" onClick={() => deleteSection()}>X</button>
          </div>
          {componentArray.length > 0 ?
            componentArray.map((component: any, index: number) => {
              return (
                <AddNewComponent cancel={deleteComponent.bind(this, index)} addNewComponent={() => createNewComponent} key={component.id} id={component.id} deleteComponent={deleteComponent.bind(this, index)} />
              )
            })
            :
            ""
          }
          < button onClick={() => createNewComponent()}>Add</button>
        </section>
          :
          ""
      }
    </>
  );
};

export default AddNewSection;