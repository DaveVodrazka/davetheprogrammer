import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import '../../styles/index.scss';
import './layout.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
