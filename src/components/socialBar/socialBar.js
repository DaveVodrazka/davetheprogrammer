import React from 'react';
import { Helmet } from 'react-helmet';

import './socialBar.scss';

const SocialBar = () => {
  return (
    <div className='socialContainer'>
      <Helmet>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      </Helmet>
      <a href='https://www.facebook.com/Vydrysek' target='_blank' className='fa fa-facebook'></a>
      <a href='https://twitter.com/david_vodrazka' target='_blank' className='fa fa-twitter'></a>
      <a href='https://github.com/DaveVodrazka' target='_blank' id='githubSocial' className='fa fa-github'></a>
      <a href='https://www.linkedin.com/in/dave-vodr%C3%A1%C5%BEka/' target='_blank' className='fa fa-linkedin'></a>
      <a href='https://www.instagram.com/dave_vydrysek/' target='_blank' className='fa fa-instagram'></a>
    </div>
  );
};

export default SocialBar;
