import React, { useState } from 'react';

import "./AddNewSectionModal.css"

import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiPhotoAlbum, BiText } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import EditableTitle from '../../../EditableTitle/EditableTitle'

type Props = {
  cancel: () => void;
}

const AddNewSectionModal: React.FC<Props> = ({
  cancel
}) => {

  const [choosenComponent, setChoosenComponent] = useState("choosing")

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
                  <div tabIndex={0}>
                    <BiText size={30} />
                    <span>Text</span>
                  </div>
                  <div tabIndex={0}>
                    <AiOutlineFundProjectionScreen size={30} />
                    <span>Projects</span>
                  </div>
                  <div tabIndex={0}>
                    <BiPhotoAlbum size={30} />
                    <span>Galery</span>
                  </div>
                  <div tabIndex={0}>
                    <AiFillGithub size={30} />
                    <span>GitHub</span>
                  </div>
                  <div tabIndex={0}>
                    <GiAchievement size={30} />
                    <span>Achievements</span>
                  </div>
                </div>
                <div className="add-section-modal-content">
                  <div onClick={() => setChoosenComponent("EditableTitle")}>Component Preview</div>
                  <div>Component Preview</div>
                  <div>Component Preview</div>
                  <div>Component Preview</div>
                  <div>Component Preview</div>
                  <div>Component Preview</div>
                </div>
              </div>
            </div>
          </div>
        </> :
          choosenComponent === "EditableTitle" ?
            <EditableTitle textAlign='center'/>
            :
            "error on choosenComponent Name"
      }
    </div>
  );
};

export default AddNewSectionModal;