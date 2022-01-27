import React, { useState } from "react";

import './EditableTitle.css'

type Props = {
  nome?: string,
}

const EditableTitle: React.FC<Props> = ({ nome = "Titulo Editavel" }) => {

  const [fontWeight, setFontWeight] = useState("normal")
  const [fontSize, setFontSize] = useState(60)
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

  const fontSizeResize = (operator: string) => {
    if (fontSize <= 60) {
      if (operator === "+") {
        setFontSize(fontSize + 1)
        console.log(fontSize)
      } 
    }
    if (fontSize > 30) {
      if (operator === "-") {
        setFontSize(fontSize - 1)
      }
    }
  }

  return (
    <div className="editable-title">
      <input type="text" name="profileName" placeholder="Seu Nome" spellCheck={false} 
        style={{ 
          fontWeight: `${fontWeight}`,
          fontSize: `${fontSize}px`,
          fontStyle: `${fontStyle}`,
          textDecoration: `${textDecoration}`,
        }} />
      <div className="edit-tools-profile-name">
        <button style={{fontWeight: "bold"}} onClick={() => toggleFontBold()} >B</button>
        <button style={{fontStyle: "italic", fontFamily: "serif", fontWeight: "bold"}} onClick={() => toggleFontItalic()} >I</button>
        <button onClick={() => toggleTextUnderline()} >U</button>
        <button onClick={() => toggleFontBold()} >B</button>
        <label htmlFor="font-size">Font Size</label>
        <select onChange={(e) => changeFontSize(e)} value={fontSize} id="font-size" name="font-size">
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
          <option value="60">60</option>
        </select>
        <button onClick={() => fontSizeResize("+")}>+</button>
        <button onClick={() => fontSizeResize("-")}>-</button>
      </div>
    </div>
  );
};

export default EditableTitle;