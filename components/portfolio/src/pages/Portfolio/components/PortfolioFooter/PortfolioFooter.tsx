import React from 'react';

import "./PortfolioFooter.css"

import FooterImg from '../../../../assets/footer.png'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { AiFillMail, AiOutlineFileProtect } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'

const PortfolioFooter: React.FC = () => {
  return (
    <section className='portfolio-footer'>
      {/* <img src={FooterImg} alt="" /> */}
      <div>
        <AiFillMail className='portfolio-footer-icon' size={40}/>
        <FaLinkedin className='portfolio-footer-icon' size={40}/>
        <FaGithub className='portfolio-footer-icon' size={40}/>
        <MdFacebook className='portfolio-footer-icon' size={40}/>
      </div>
      <hr />
      <AiOutlineFileProtect className='portfolio-footer-icon' size={40} color='gray'/>
      <p style={{color: 'gray'}}>created with (Project Name)</p>
    </section>
  );
};

export default PortfolioFooter;