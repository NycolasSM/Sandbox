import React, { useState } from "react";

import "./AddNewSection.css"

import AddNewComponent from "./components/AddNewComponent/AddNewComponent";

import { AiOutlineAppstoreAdd, AiOutlineControl, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { RiPlayListAddLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'

type Props = {
  id: number;
  deleteSection: () => void;
  addNewSection: () => void;
}

const AddNewSection: React.FC<Props> = ({ deleteSection, addNewSection }) => {


  let [numberOfComponents, setNumberOfComponents] = useState(0)

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
          <RiPlayListAddLine size={36} onClick={() => { addNewSection(), setAddSection("sectionAdded") }} id="addSecton" className="add-section-button" />
          <label className="add-section-button-label" htmlFor="addSecton">Add New Section</label>
        </div>
      </>
        :
        ""
      }
      {addSection === "sectionAdded" ? <section className="new-section" id="newSection" >
        <div className="section-configuration">
          <AiOutlineControl className="section-configuration-button" tabIndex={0} size={34} />
          <div className="options-section-buttons-container">
            <div className="section-configuration-blur"></div>
            <div className="options-section-buttons">
              <FaRegEdit size={25} />
              <AiOutlineArrowUp size={25} />
              <AiOutlineArrowDown size={25} />
              <BsTrash onClick={() => deleteSection()} size={25} />
            </div>
          </div>
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
        <AiOutlineAppstoreAdd size={42} className="add-component-button" id="addComponent" style={{ paddingTop: `${(componentArray.length === 0 ? "126px" : "")}` }} onClick={() => createNewComponent()} />
        <label className="add-component-button-label" htmlFor="addComponent">Add New Component</label>
      </section>
        :
        ""
      }
    </>
  );
};

export default AddNewSection;