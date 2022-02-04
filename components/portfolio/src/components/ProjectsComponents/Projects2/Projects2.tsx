import React from "react";

import './Projects2.css'

import { CgExtensionRemove } from 'react-icons/cg'

type Props = {
  previewImg: string;
  previewImgGif?: string;
  playGif?: boolean;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const Projects2: React.FC<Props> = ({ deleteComponent, isDeletable = false }) => {

  const focusOnElementById = (elementId: string) => {
    if (elementId) {
      // @ts-ignore: Object is possibly 'null' error.
      document.getElementById(elementId).focus();
    }
  }

  return (
    <div>
      <CgExtensionRemove className="edit-tools-title-delete-button" onClick={() => deleteComponent()} size={28} />
      2
    </div>
  );
};

export default Projects2;