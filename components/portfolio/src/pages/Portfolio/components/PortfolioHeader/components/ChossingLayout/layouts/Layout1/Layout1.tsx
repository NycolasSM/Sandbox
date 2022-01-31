import React from 'react';

import "./Layout1.css"

import EditableTitle from '../../../../../EditableTitle/EditableTitle';
import ProfileImg from '../../../../../ProfileImg/ProfileImg';

type Props = {
  choseLayout: () => void
}

const Layout1: React.FC<Props> = ({ choseLayout, }) => {

  return (
    <section className='portfolio-header_layout1'>
      <div className='main-wrapper'>
        <button onClick={() => choseLayout()}>change layout</button>
        <div className='portfolio-header-container_layout1'>
          <div className='portfolio-user-apresentation_layout1'>
            <span>Hi There!</span>
            <EditableTitle defaultText='Seu Nome' defaultFontSize={60} />
            <EditableTitle defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} />
            <span>JavaScript | HTML | CSS | React | TypeScript</span>
            <div className='portfolio-apresentation-buttons_layout1'>
              <button>Baixe Meu CV</button>
              <button>Mais Sobre Mim</button>
            </div>
          </div>
          <ProfileImg />
        </div>
      </div>
    </section>
  );
};

export default Layout1;