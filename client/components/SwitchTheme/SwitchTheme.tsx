import SvgComponent from '../SvgComponent';
import React, { FC } from 'react';
import clsx from 'clsx';

interface PropsType {
  theme: boolean;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: boolean) => void;
}

const SwitchTheme: FC<PropsType> = ({ setTheme, theme }) => {
  return (
    <div className='fixed bottom-96 right-4 flex flex-col'>
      <span
        className={clsx(
          'rounded-full shadow-md w-12 h-12 flex justify-center items-center cursor-pointer',
          { 'bg-zinc-900': theme, 'bg-zinc-50': !theme }
        )}
        onClick={() => setTheme(!theme)}
      >
        {theme ? (
          <SvgComponent name='moon' className='h-5 w-5 text-yellow-500' />
        ) : (
          <SvgComponent name='sun' className='h-5 w-5 text-yellow-500' />
        )}
      </span>
    </div>
  );
};

export default SwitchTheme;
