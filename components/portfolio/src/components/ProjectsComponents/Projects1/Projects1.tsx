import React from "react";

import './Projects1.css'

import { CgExtensionRemove } from 'react-icons/cg'
import previewComponentImg from "../../../assets/previewComponents/PreviewProject1.png"
import previewComponentGif from "../../../assets/previewComponents/PreviewProject1Gif.png"

type Props = {
  previewImg: string;
  previewImgGif?: string;
  playGif?: boolean;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const Projects1: React.FC<Props> = ({ deleteComponent, isDeletable = false }) => {

  const focusOnElementById = (elementId: string) => {
    if (elementId) {
      // @ts-ignore: Object is possibly 'null' error.
      document.getElementById(elementId).focus();
    }
  }

  return (
    <div>
      <CgExtensionRemove className="edit-tools-title-delete-button" onClick={() => deleteComponent()} size={28} />
      1
    </div>
  );
};

export default Projects1;