import SvgComponent from '../SvgComponent';
import moment from 'moment';
import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-20 bg-zinc-300'>
      <p className='font-light text-sm'>
        ©2022-{moment().format('YYYY')} Dang Anh Tu. Make Diamond great again!
      </p>
      <div className='flex'>
        <a
          href='https://www.facebook.com/anhtu.dang.127'
          target='_blank'
          rel='noreferrer'
        >
          <SvgComponent name='facebook' className='h-9 w-9' />
        </a>
        <a
          href='https://github.com/TuDiHocLapTrinh'
          target='_blank'
          rel='noreferrer'
        >
          <SvgComponent name='github' className='h-9 w-9' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
