import React, { useState } from "react";

import './EditableTitle.css'

type Props = {
  nome?: string,
}

const EditableTitle: React.FC<Props> = ({ nome = "Titulo Editavel" }) => {

  const [fontWeight, setFontWeight] = useState("normal")
  const [fontSize, setFontSize] = useState("60px")
  const [fontStyle, setFontStyle] = useState("normal")
  const [textDecoration, setTextDecoration] = useState("")

  const toggleFontBold = () => {
    fontWeight === "normal" ? setFontWeight("bold") : setFontWeight("normal")
  }

  const toggleFontItalic = () => {
    fontStyle === "normal" ? setFontStyle("Italic") : setFontStyle("normal")
  }

  const toggleTextUnderline = () => {
    textDecoration === "" ? setTextDecoration("underline") : setTextDecoration("")
  }

  const changeFontSize = (e: any) => {
    setFontSize(e.target.value)
  }

  return (
    <div className="editable-title">
      <input type="text" name="profileName" placeholder="Seu Nome" spellCheck={false} 
        style={{ 
          fontWeight: `${fontWeight}`,
          fontSize: `${fontSize}`,
          fontStyle: `${fontStyle}`,
          textDecoration: `${textDecoration}`,
        }} />
      <div className="edit-tools-profile-name">
        <button onClick={() => toggleFontBold()} >B</button>
        <button onClick={() => toggleFontItalic()} >i</button>
        <button onClick={() => toggleTextUnderline()} >_</button>
        <button onClick={() => toggleFontBold()} >B</button>
        <label htmlFor="font-size">Font Size</label>
        <select onChange={(e) => changeFontSize(e)} id="font-size" name="font-size">
          <option value="60px">60</option>
          <option value="50px">50</option>
          <option value="40px">40</option>
          <option value="30px">30</option>
        </select>
      </div>
    </div>
  );
};

export default EditableTitle;