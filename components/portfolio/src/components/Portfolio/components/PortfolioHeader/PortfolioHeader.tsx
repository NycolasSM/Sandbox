import React from 'react';

import './PortfolioHeader.css'

import ProfileImgExample from '../../../../assets/ProfileExample.png'
import EditableTitle from '../EditableTitle/EditableTitle';

const PortfolioHeader: React.FC = () => {
  return (
    <section className='portfolio-header'>
      <div className='main-wrapper'>
        <div className='portfolio-header-container'>
          <div className='portfolio-user-apresentation'>
            <span>Hi There!</span>
            <EditableTitle defaultText='Seu Nome' defaultFontSize={60} />
            <EditableTitle defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} />
            {/* <h3>Desenvolvedor FrontEnd</h3> */}
            <span>JavaScript | HTML | CSS | React | TypeScript</span>
            <div className='portfolio-apresentation-buttons'>
              <button>Baixe Meu CV</button>
              <button>Mais Sobre Mim</button>
            </div>
          </div>
          <img src={ProfileImgExample} className='profile-image' alt="Profile Image" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;