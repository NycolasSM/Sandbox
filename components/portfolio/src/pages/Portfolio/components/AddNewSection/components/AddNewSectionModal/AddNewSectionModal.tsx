import React, { useState } from 'react';

import "./AddNewSectionModal.css"

import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiPhotoAlbum, BiText } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import previewImg from '../../../../../../assets/PreviewTextComponent.png'

import EditableTitle from '../../../EditableTitle/EditableTitle'

type Props = {
  cancel: () => void;
  addNewSection: () => void;
  isComponentChoosen: () => void;
}

const AddNewSectionModal: React.FC<Props> = ({
  cancel,
  addNewSection,
  isComponentChoosen
}) => {

  const [choosenComponent, setChoosenComponent] = useState("choosing")

  const [typeOfNewSection, setTypeOfNewSection] = useState("Text")

  const [textSectionsArray, setTextSectionsArray] = useState([
    <EditableTitle previewImg={previewImg} />
  ])

  const [projectsSectionsArray, setProjectsSectionsArray] = useState([
    
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
                    {textSectionsArray.map((section, index) => {
                      return (
                        <img key={index} className={"preview-section-img"} onClick={() => { setChoosenComponent("EditableTitle"), addNewSection(), isComponentChoosen() }} src={section.props.previewImg} alt="" />
                      )
                    })}
                  </>
                    :
                    typeOfNewSection === "Projects" ? <>
                      <div onClick={() => { setChoosenComponent("EditableTitle"), addNewSection(), isComponentChoosen() }}>Component Project</div>
                      <div>Component Project</div>
                      <div>Component Project</div>
                    </>
                      :
                      typeOfNewSection === "Galery" ? <>
                        <div onClick={() => { setChoosenComponent("EditableTitle"), addNewSection(), isComponentChoosen() }}>Component Galery</div>
                        <div>Component Galery</div>
                      </>
                        :
                        typeOfNewSection === "GitHub" ? <>
                          <div onClick={() => { setChoosenComponent("EditableTitle"), addNewSection(), isComponentChoosen() }}>Component GitHub</div>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                        </>
                          :
                          typeOfNewSection === "Achievements" ? <>
                            <div onClick={() => { setChoosenComponent("EditableTitle"), addNewSection(), isComponentChoosen() }}>Component Achievements</div>
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
        </> :
          choosenComponent === "EditableTitle" ?
            <EditableTitle textAlign='center' />
            :
            "error on choosenComponent Name"
      }
    </div>
  );
};

export default AddNewSectionModal;