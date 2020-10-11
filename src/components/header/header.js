import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

import arrow from '../../assets/arrow.svg';

const Header = () => {
  return (
    <header>
      <Link activeClassName='active' to='/'>
        <div className='arrow'><img src={arrow} /></div>
        Home
      </Link>
      <Link activeClassName='active' to='/about-me'>
        <div className='arrow'><img src={arrow} /></div>
        About Me
      </Link>
      <Link activeClassName='active' to='/contact'>
        <div className='arrow'><img src={arrow} /></div>
        Contact me
      </Link>
    </header>
  );
}

export default Header;
