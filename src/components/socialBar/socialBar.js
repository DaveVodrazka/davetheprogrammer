import React from 'react';
import { Helmet } from 'react-helmet';

import './socialBar.scss';

const SocialBar = () => {
  return (
    <div className='socialContainer'>
      <Helmet>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      </Helmet>
      <a href='https://www.facebook.com/Vydrysek' target='_blank' rel='noreferrer' aria-label='Social button - Facebook' className='fa fa-facebook'></a>
      <a href='https://twitter.com/DaveVodrazka' target='_blank' rel='noreferrer' aria-label='Social button - Twitter' className='fa fa-twitter'></a>
      <a href='https://github.com/DaveVodrazka' target='_blank' rel='noreferrer' aria-label='Social button - GitHub' id='githubSocial' className='fa fa-github'></a>
      <a href='https://www.linkedin.com/in/dave-vodr%C3%A1%C5%BEka/' target='_blank' rel='noreferrer' aria-label='Social button - LinkedIn' className='fa fa-linkedin'></a>
      <a href='https://www.instagram.com/dave_vydrysek/' target='_blank' rel='noreferrer' aria-label='Social button - Instagram' className='fa fa-instagram'></a>
    </div>
  );
};

export default SocialBar;
