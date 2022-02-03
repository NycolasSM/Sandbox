import React from 'react';

import "./Layout1.css"



import EditableTitle from '../../../../../EditableTitle/EditableTitle';
import ProfileImg from '../../../../../ProfileImg/ProfileImg';

const Layout1: React.FC = () => {

  return (
    <section className='portfolio-header_layout1'>
      <div className='portfolio-header-container_layout1'>
        <div className='portfolio-user-apresentation_layout1'>
          <span>Hi There!</span>
          <EditableTitle defaultText='Seu Nome' defaultFontSize={60} />
          <EditableTitle defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} />
          <span contentEditable={true} >JavaScript | HTML | CSS | React | TypeScript</span>
          <div className='portfolio-apresentation-buttons_layout1'>
            <button>Baixe Meu CV</button>
            <button>Mais Sobre Mim</button>
          </div>
        </div>
        <ProfileImg />
      </div>
    </section >
  );
};

export default Layout1;