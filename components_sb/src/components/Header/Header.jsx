import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <ul className='headerTabs'>
        <li>Perfil</li>
        <li>Dados</li>
        <li>Layout</li>
        <li>Customização</li>
        <li>Preview</li>
        <li>Salvar</li>
      </ul>
      <hr />
    </header>
  )
}

export default Header
