import React from 'react';

import "./Layout2.css"

import EditableTitle from '../../../../../EditableTitle/EditableTitle';
import ProfileImg from '../../../../../ProfileImg/ProfileImg';

type Props = {
  choseLayout: () => void
}

const Layout2: React.FC<Props> = ({ choseLayout, }) => {
return (
  <section className='portfolio-header_layout2'>
    <div className='main-wrapper'>
      <button onClick={() => choseLayout()}>change layout</button>
      <div className='portfolio-header-container_layout2'>
        <ProfileImg margin={20} size={260} />
        <div className='portfolio-user-apresentation_layout2'>
          <EditableTitle defaultText='Seu Nome' defaultFontSize={50} textAlign='center' size={30} />
          <EditableTitle defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} textAlign='center' size={28} />
          <span>JavaScript | HTML | CSS | React | TypeScript</span>
          <div className='portfolio-apresentation-buttons_layout2'>
            <button>Baixe Meu CV</button>
            <button>Mais Sobre Mim</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Layout2;