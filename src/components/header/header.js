import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

import arrow from '../../assets/arrow.svg';

const Header = () => {
  return (
    <header>
      <Link activeClassName='active' to='/'>
        <div className='arrow'><img src={arrow} alt='Arrow pointing to the current page - home' /></div>
        Home
      </Link>
      <Link activeClassName='active' to='/about-me/'>
        <div className='arrow'><img src={arrow} alt='Arrow pointing to the current page - about me' /></div>
        About Me
      </Link>
      <Link activeClassName='active' to='/contact/'>
        <div className='arrow'><img src={arrow} alt='Arrow pointing to the current page - contact me' /></div>
        Contact me
      </Link>
    </header>
  );
}

export default Header;
