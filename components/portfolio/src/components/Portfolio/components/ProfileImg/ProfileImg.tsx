import React, { useState } from 'react';

import './ProfileImg.css'

import ProfileImgExample from '../../../../assets/ProfileExample.png'

type Props = {
  size?: number,
  margin?: string
}

const ProfileImg: React.FC<Props> = ({ margin = "0", size= 300 }) => {

  const [imageSize, setImageSize] = useState(size)

  const changeImageWidth = (event:any) => {
    setImageSize(event.target.value)
  } 

  return (
    <>
      <img src={ProfileImgExample} className='profile-image' draggable={false} style={{height: `${imageSize}px`, margin: `${margin}`}} alt="Profile Image" tabIndex={0}/>
      <div className="edit-tools-profile-image" id="editTool">
        <input type="file" name="uploadProfileImage" id="uploadProfileImage" title=" " style={{color: "transparent", width: "110px"}}/>
        <label htmlFor="font-size">Size Image</label>
        <input type="range" name="imageSize" id="imageSize" onChange={(event) => changeImageWidth(event)} defaultValue={imageSize} max={300} min={200} step={1}/>
      </div>
    </>
  );
};

export default ProfileImg;