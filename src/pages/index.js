import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';
import PicBox from '../components/picBox/picBox.js';

import gatsbyImage from '../assets/gatsby.png';
import pixelartImage from '../assets/pixelart.png';
import googleCloud from '../assets/google-cloud.png';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | Home</title>
        <meta name="description" content="David Vodrážka's home page, come check it out, it's pretty sweet 👌"/>
      </Helmet>
      <h1>Welcome</h1>
      <p>
        This is my website, if you'd like to learn more about me do check out{' '}
        <Link className='inline-link' to='/about-me'>About Me</Link>
        <br></br>
        If you'd like to contact me, you can do so through{' '}
        <Link className='inline-link' to='/about-me'>Contact Me</Link>
      </p>
      <PicBox
        text='This website has been created using Gatsbyjs framework. Gatsby generates static pages, where possible, from React which provides smoothest delivery of content. To find out more about Gatsby, visti www.gatsbyjs.com.'
        image={gatsbyImage}
        alt='Gatsby logo'
      />
      <PicBox
        text='The favicon was made using Pixelart. If you are at all interested in pixelart do visit their website at www.pixilart.com. If not, you should seriously reconsider your life choices.'
        image={pixelartImage}
        reverse={true}
      />
      <PicBox
        text='If you&apos;re seeing this, it is thanks to Google Cloud, which kindly and smoothly hosts my website. Thank you Google and please improve my ranking on your searches (yes, this is how SEO works).'
        image={googleCloud}
      />
    </Layout>
  );
}

export default Home;
