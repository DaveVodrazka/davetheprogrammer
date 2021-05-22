import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';
import SocialBar from '../components/socialBar/socialBar.js';
import Form from '../components/form/form.js';

const AboutMe = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | Contact</title>
        <meta name="description" content="David Vodrážka JavaScript developer - if you'd like to contant me... You know what to do 🤙"/>
      </Helmet>
      <h1>Contact</h1>
      <p>
        To contact me, please use the form bellow <span role='img' aria-label='Emoji - finger pointing bellow'>👇</span>
      </p>
      <Form />
      <p>
        Or you can click any of the lovely social buttons down here:
      </p>
      <SocialBar />
    </Layout>
  );
};

export default AboutMe;
