import React from 'react';
import { Helmet } from 'react-helmet';

import style from './socialBar.scss';

const SocialBar = () => {
  return (
    <div className='socialContainer'>
      <Helmet>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      </Helmet>
      <a href='javascript:void(0)' className='fa fa-facebook'></a>
      <a href='javascript:void(0)' className='fa fa-twitter'></a>
      <a href='javascript:void(0)' className='fa fa-google'></a>
      <a href='javascript:void(0)' className='fa fa-linkedin'></a>
      <a href='javascript:void(0)' className='fa fa-instagram'></a>
    </div>
  );
};

export default SocialBar;
