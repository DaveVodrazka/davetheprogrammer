import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import * as style from './form.module.scss';

const Form = () => {
  const SERVICE_ID = 'service_wdabwfs';
  const TEMPLATE_ID = 'template_nmyrrwu';
  const USER_ID = 'user_hoJDmZSz0I8degM1Bhc2m';

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (!message) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={style.container} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type='text'
        name='name'
        placeholder='Name'
      />
      <label>Email</label>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type='email'
        name='email'
        placeholder='Email'
      />
      <label>Message</label>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        name='message'
        placeholder='Your message'
      />
      <input className={style.button} type='submit' value='Send' />
    </form>
  );
}

export default Form;
