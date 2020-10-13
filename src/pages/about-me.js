import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';
import PicBox from '../components/picBox/picBox.js';

import backgroundMe from '../assets/background_me.jpeg';
import profilePic from '../assets/profilepic.jpg';
import czechFlag from '../assets/czechflag.png';
import codeImage from '../assets/code.png';

const AboutMe = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | About Me</title>
        <meta name="description" content="Find out more about David Vodrážka right on this page, you're literally one click away. 💖"/>
      </Helmet>
      <h1>Hi, I'm Dave</h1>
      <img src={backgroundMe} className='fullWidth' alt='David Vodrážka playing petanque' />
      <PicBox
        image={profilePic}
        alt='portrait photo of David Vodrážka'
        text='My full name is David Vodrážka and one of the reasons why I created this website is to see myself when I google my name, which is why I use it quite extensively.'
      />
      <PicBox
        image={czechFlag}
        alt='Czech Republic flag'
        text='I was born and raised in the Czech Republic (it should be Czechia now, but I don&apos;t agree), I&apos;m stationed in the capital - Prague.'
        reverse={true}
      />
      <PicBox
        image={codeImage}
        alt='JavaScript code'
        text='Programming used to be just something I was learning out of curiosity, but now it pays my bills. I am employed in Seznam.cz, which is a pretty big deal here in the Czech Republic (no, not Czechia).'
      />
    </Layout>
  );
};

export default AboutMe;
