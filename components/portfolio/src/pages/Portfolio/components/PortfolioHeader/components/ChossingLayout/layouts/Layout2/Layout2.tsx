import React from 'react';

import "./Layout2.css"

import EditableTitle from '../../../../../../../../components/EditableTitle/EditableTitle';
import ProfileImg from '../../../../../ProfileImg/ProfileImg';

type Props = {
  choseLayout: () => void
}

const Layout2: React.FC<Props> = ({ choseLayout, }) => {
  return (
    <section className='portfolio-header_layout2'>
      <div className='portfolio-header-container_layout2'>
        <ProfileImg margin={20} size={260} />
        <div className='portfolio-user-apresentation_layout2'>
          <EditableTitle deleteComponent={() => {}} isDeletable={false}  defaultText='Seu Nome' defaultFontSize={50} textAlign='center' size={30} />
          <EditableTitle deleteComponent={() => {}} isDeletable={false}  defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} textAlign='center' size={28} />
          <span>JavaScript | HTML | CSS | React | TypeScript</span>
          <div className='portfolio-apresentation-buttons_layout2'>
            <button>Baixe Meu CV</button>
            <button>Mais Sobre Mim</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout2;