import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout.js';
import PicBox from '../components/picBox/picBox.js';

import gatsbyImage from '../assets/gatsby.png';
import pixelartImage from '../assets/pixelart.png';
import googleCloud from '../assets/google-cloud.png';
import dockerLogo from '../assets/docker.png';
import kubernetesLogo from '../assets/kubernetes.png';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dave's page | Home</title>
        <meta name="description" content="David Vodrážka JavaScript developer - home page, come check it out, it's pretty sweet 👌"/>
      </Helmet>
      <h1>Welcome</h1>
      <p>
        This is my website, if you'd like to learn more about me do check out{' '}
        <Link className='inline-link' to='/about-me'>About Me</Link>
        <br></br>
        If you'd like to contact me, you can do so through{' '}
        <Link className='inline-link' to='/contact'>Contact Me</Link>
        <br></br>
        Keep reading to find out the stack that I like to work with 👨‍💻
      </p>
      <PicBox
        text={['If it is not in a container it is not in the 21', <sup>st</sup>, ' century! Docker opens you up to all kinds of cool opportunities, give it a go!']}
        image={dockerLogo}
        alt='Docker logo'
      />
      <PicBox
        text='When you get bored playing around with containers, let Kubernetes take the helm! "Helm", get it? Deploying and restarting containers manually is so 2014.'
        image={kubernetesLogo}
        reverse={true}
        alt='Kubernetes logo'
      />
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
