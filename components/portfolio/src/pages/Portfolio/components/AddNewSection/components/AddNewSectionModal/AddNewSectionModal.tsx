import React from 'react';

import "./AddNewSectionModal.css"

type Props = {
  cancel: () => void;
}

const AddNewSectionModal: React.FC<Props> = ({
  cancel
}) => {

  return (
    <div>
      <button onClick={() => cancel()}>cancel</button>
      <button>2</button>
    </div>
  );
};

export default AddNewSectionModal;