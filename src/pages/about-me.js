import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';

const AboutMe = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | About Me</title>
        <meta name="description" content="Find out more about David Vodrážka right on this page, you're literally one click away. 💖"/>
      </Helmet>
      <h1>Hi, I'm Dave</h1>
      <p>
        My full name is David Vodrážka and one of the reasons why I created this website is to see myself when I google my name, which is why I use it quite extensively.
      </p>
      <p>
        I was born and raised in the Czech Republic (it should be Czechia now, but I don't agree), I'm stationed in the capitol - Prague.
      </p>
      <p>
        Programming use to be just something I was learning out of curiosity, but now it pays my bills. I am employed in Seznam.cz, which is a pretty big deal here in the Czeach Republic (no, not Czechia).
      </p>
    </Layout>
  );
};

export default AboutMe;
