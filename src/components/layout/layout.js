import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../header/header';
import Footer from '../footer/footer';

import '../../styles/index.scss';
import './layout.scss';

const Layout = (props) => {
  const ldJson = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "David Vodrážka",
    "url": "https://davetheprogrammer.eu/about-me",
    "jobTitle": "JavaScript Developer",
    "alumniOf": "Charles University",
    "gender": "male",
    "sameAs": [
      "https://www.facebook.com/Vydrysek",
      "https://twitter.com/DaveVodrazka",
      "https://www.linkedin.com/in/dave-vodr%C3%A1%C5%BEka/",
    ]
  };

  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(ldJson)}
        </script>
      </Helmet>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
