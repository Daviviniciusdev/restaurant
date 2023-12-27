import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__chef app__wrapper section__padding' id='menu'>
    <div className='app__chef-img'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-info">
      <SubHeading  title="Chef’s Word"/>
      <h1 className='headtext__cormorant'>What we Believe in</h1>
      <div className="app__chef-info_text">
        <img src={images.quote} alt=" qoute" />
        <p className='p__opensans' style={{color: '#AAA',fontStyle:'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      </div>
      <p className='p__opensans' style={{color:'#AAA', fontStyle:'italic'}}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

      <div className="app__chef-info_name">
        <h4 className='p__cormorant'> Kevin Luo</h4>
        <p className='p__opensans' style={{color: '#AAA'}}>Chef & Founder</p>
      </div>

      <div className="app__chef-info_sing">
        <img src={images.sign} alt="sing" />
      </div>
    </div>
  </div>
);

export default Chef;
