import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

const Header = () => {
  return (
    <header>
      <Link activeClassName='active' to='/'>Home</Link>
      <Link activeClassName='active' to='/about-me'>About Me</Link>
      <Link activeClassName='active' to='/contact'>Contact me</Link>
    </header>
  );
}

export default Header;
