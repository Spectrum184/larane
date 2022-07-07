import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <div
      className='fixed w-full h-screen text-center loading'
      style={{
        background: '#0008',
        color: 'white',
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <svg className='h-64 w-64' viewBox='0 0 40 50'>
        <polygon
          stroke='#fff'
          strokeWidth='1'
          fill='none'
          points='20,1 40,40 1,40'
        />
        <text fill='#fff' x='5' y='47'>
          Diamond
        </text>
      </svg>
    </div>
  );
};

export default Loading;
