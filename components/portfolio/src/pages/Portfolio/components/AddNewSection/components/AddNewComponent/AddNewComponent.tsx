import React, { useState } from 'react';

import "./AddNewComponent.css"

import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiPhotoAlbum, BiText } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import PreviewImgTitleComponent from '../../../../../../assets/previewComponents/PreviewTextComponent.png'
import PreviewImgTitleComponentGif from '../../../../../../assets/previewComponents/PreviewTitleComponent.gif'
import EditableTitle from '../../../../../../components/TextComponents/EditableTitle/EditableTitle'

import PreviewImgProjects1 from '../../../../../../assets/previewComponents/PreviewProject1.png'
import PreviewImgProjects1Gif from '../../../../../../assets/previewComponents/PreviewProject1Gif.png'
import Projects1 from '../../../../../../components/ProjectsComponents/Projects1/Projects1'

import PreviewImgProjects2 from '../../../../../../assets/previewComponents/PreviewTitleComponent.gif'
import PreviewImgProjects2Gif from '../../../../../../assets/previewComponents/PreviewTitleComponent.gif'
import Projects2 from '../../../../../../components/ProjectsComponents/Projects2/Projects2'


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
    <EditableTitle isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} previewImgGif={PreviewImgTitleComponentGif} />
  ])

  const [projectsComponentsArray, setProjectsComponentsArray] = useState([
    <Projects1 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgProjects1} previewImgGif={PreviewImgProjects1Gif} />,
    <Projects2 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgProjects2} previewImgGif={PreviewImgProjects2Gif} />
  ])

  const [galeryComponentsArray, setGaletyComponentsArray] = useState([

  ])

  const [previewComponent, setPreviewComponent] = useState(PreviewImgTitleComponentGif)

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
                        <img key={index} src={section.props.previewImg} onMouseOver={() => console.log(section.props)} onMouseLeave={() => setPreviewComponent(PreviewImgTitleComponentGif)} className={"preview-section-img"} onClick={() => { setChoosenComponent("EditableTitle"), addNewComponent() }} alt="Preview of Component" />
                      )
                    })}
                  </>
                    :
                    typeOfNewSection === "Projects" ? <>
                      {projectsComponentsArray.map((section, index) => {
                        return (
                          <img key={index} src={section.props.previewImg} onMouseOver={() => console.log(section.type.previewImg)} onMouseLeave={() => setPreviewComponent(PreviewImgTitleComponentGif)} className={"preview-section-img"} onClick={() => { setChoosenComponent(`Projects${index + 1}`), addNewComponent() }} alt="Preview of Component" />
                        )
                      })}
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
            <EditableTitle isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} textAlign='center' previewImg='' />
            :
            choosenComponent === "Projects1" ?
              <Projects1 isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} previewImg=''/>
              :
              choosenComponent === "Projects2" ?
                <Projects2 isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} previewImg=''/>
                :
                "error on choosenComponent Name"
      }
    </div>
  );
};

export default AddNewComponent;







// const [componentChoose, setComponentChoose] = useState("EditableTitle")

// function chooseComponent() {
//   switch (componentChoose) {
//     case 'EditableTitle':
//       <EditableTitle isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} />
//     case 'Projects1':
//       <Projects1 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} />
//     case 'Projects2':
//       <Projects2 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} />
//       break;
//     default:
//       console.log(`Sorry, we are out of ${componentChoose}.`);
//   }
// }



          // choosenComponent === "EditableTitle" ?
          // <EditableTitle isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} textAlign='center' />
          // :
          // choosenComponent === "Projects1" ?
          //   <Projects1 isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} />
          //   :
          //   choosenComponent === "Projects2" ?
          //     <Projects2 isDeletable={isEditComponent} deleteComponent={() => deleteComponent()} />
          //     :
          //     "error on choosenComponent Name"