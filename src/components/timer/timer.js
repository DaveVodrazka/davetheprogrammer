import React from 'react';
import Interval from 'react-interval-rerender';

import style from './timer.module.scss';

const Timer = () => {
  return (
    <div className={style.timer}>
      <p>The time is{' '}
        <span>
          <Interval delay={1000}>
            {() => Math.floor(new Date().getTime() / 1000)}
          </Interval>
        </span>
        {' '}seconds past midnight January 1<sup>st</sup>, 1970.
      </p>
    </div>
  );
}

export default Timer;
