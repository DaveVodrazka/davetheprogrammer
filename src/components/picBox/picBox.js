import React from 'react';
import Linkify from 'react-linkify';

import * as style from './picBox.module.scss';

const PicBox = (props) => {
  return (
    <div className={[style.container, props.reverse ? style.reverse : null].join(' ')}>
      {props.image
        ?
        <div className={style.imageHolder}><img src={props.image} alt={props.alt} /></div>
        : null
      }
      <div className={style.textHolder}>
        <Linkify><p>{props.text}</p></Linkify>
      </div>
    </div>
  );
}

export default PicBox;
