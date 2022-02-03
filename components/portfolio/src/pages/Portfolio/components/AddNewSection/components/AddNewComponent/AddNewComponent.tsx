import React, { useState } from 'react';

import "./AddNewComponent.css"

import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiPhotoAlbum, BiText } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import PreviewImgTitleComponent from '../../../../../../assets/previewComponents/PreviewTitleComponent.gif'

import EditableTitle from '../../../../../../components/EditableTitle/EditableTitle'

type Props = {
  id?: number;
  cancel: () => void;
  deleteComponent: () => void;
  addNewComponent: () => void;
  isEditComponent: boolean;
}

const AddNewComponent: React.FC<Props> = ({
  cancel,
  addNewComponent,
  deleteComponent,
  isEditComponent
}) => {

  const [choosenComponent, setChoosenComponent] = useState("choosing")

  const [typeOfNewSection, setTypeOfNewSection] = useState("Text")

  const [textComponentsArray, setTextComponentsArray] = useState([
    <EditableTitle isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} />
  ])

  const [projectsComponentsArray, setProjectsComponentsArray] = useState([

  ])

  const [galeryComponentsArray, setGaletyComponentsArray] = useState([

  ])

  return (
    <div className='main-wrapper'>
      {
        choosenComponent === "choosing" ? <>
          <div className="add-section-modal-overlay">
            <div className="add-section-modal">
              <div className="add-section-modal-header">
                <h3>Add New Section</h3>
                <IoMdClose onClick={() => cancel()} size={24} color='white' className="add-section-modal-header-button" />
              </div>
              <div className="add-section-modal-new-component">
                <div className="add-section-modal-aside">
                  <div onClick={() => { setTypeOfNewSection("Text") }} tabIndex={0}>
                    <BiText size={30} />
                    <span>Text</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Projects") }} tabIndex={0}>
                    <AiOutlineFundProjectionScreen size={30} />
                    <span>Projects</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Galery") }} tabIndex={0}>
                    <BiPhotoAlbum size={30} />
                    <span>Galery</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("GitHub") }} tabIndex={0}>
                    <AiFillGithub size={30} />
                    <span>GitHub</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Achievements") }} tabIndex={0}>
                    <GiAchievement size={30} />
                    <span>Achievements</span>
                  </div>
                </div>
                <div className="add-section-modal-content">
                  {typeOfNewSection === "Text" ? <>
                    {textComponentsArray.map((section, index) => {
                      return (
                        <img key={index} className={"preview-section-img"} onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }} src={section.props.previewImg} alt="" />
                      )
                    })}
                  </>
                    :
                    typeOfNewSection === "Projects" ? <>
                      <div onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }}>Component Project</div>
                      <div>Component Project</div>
                      <div>Component Project</div>
                    </>
                      :
                      typeOfNewSection === "Galery" ? <>
                        <div onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }}>Component Galery</div>
                        <div>Component Galery</div>
                      </>
                        :
                        typeOfNewSection === "GitHub" ? <>
                          <div onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }}>Component GitHub</div>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                        </>
                          :
                          typeOfNewSection === "Achievements" ? <>
                            <div onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }}>Component Achievements</div>
                            <div>Component Achievements</div>
                            <div>Component Achievements</div>
                          </>
                            :
                            "error on type name"
                  }
                </div>
              </div>
            </div>
          </div>
        </>
          :
          choosenComponent === "EditableTitle" ?
            <EditableTitle isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} textAlign='center' />
            :
            "error on choosenComponent Name"
      }
    </div>
  );
};

export default AddNewComponent;