import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';
import PicBox from '../components/picBox/picBox.js';

import backgroundMe from '../assets/background_me.jpeg';
import profilePic from '../assets/profilepic.jpg';
import czechFlag from '../assets/czechflag.png';
import codeImage from '../assets/code.png';
import javascriptLogo from '../assets/javascript.png';

const AboutMe = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | About Me</title>
        <meta name="description" content="David Vodrážka JavaScript developer - all you want to know is literally one click away. 💖"/>
      </Helmet>
      <h1>Hi, I'm Dave</h1>
      <img src={backgroundMe} className='fullWidth' alt='David Vodrážka playing petanque' />
      <PicBox
        image={profilePic}
        alt='portrait of David Vodrážka JavaScript developer'
        text='My name is David Vodrážka and I am a JavaScript developer. One of the reasons why I created this website is to see myself when I google my name, which is why I use it quite extensively.'
      />
      <PicBox
        image={czechFlag}
        alt='Czech Republic flag'
        text='I was born and raised in the Czech Republic and I live in it&amp;s capital - Prague.'
        reverse={true}
      />
      <PicBox
        image={codeImage}
        alt='JavaScript code'
        text='Programming used to be just something I was learning out of curiosity, but now it pays my bills. I am employed at Seznam.cz, which is a pretty big deal here in the Czech Republic.'
      />
      <PicBox
        image={javascriptLogo}
        alt='JavaScript logo'
        text='My programming language of choice is ✨JavaScript✨ I started with the frontend, but I can handle all sides of any application🛠️'
        reverse={true}
      />
    </Layout>
  );
};

export default AboutMe;
