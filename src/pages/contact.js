import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';

const AboutMe = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | Contact</title>
        <meta name="description" content="Here you can find ways to contact me, so... what are you waiting for? 🤙"/>
      </Helmet>
      <h1>Contact</h1>
      <p>Contact me at: dave.vodrazka@gmail.com</p>
    </Layout>
  );
};

export default AboutMe;
