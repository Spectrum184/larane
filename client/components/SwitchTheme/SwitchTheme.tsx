import SvgComponent from '../SvgComponent';
import React, { FC } from 'react';
import clsx from 'clsx';

interface PropsType {
  darkTheme: boolean;
  // eslint-disable-next-line no-unused-vars
  setDarkTheme: (theme: boolean) => void;
}

const SwitchTheme: FC<PropsType> = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='fixed bottom-32 right-4 flex flex-col'>
      <span
        className={clsx(
          'rounded-full shadow-md w-12 h-12 flex justify-center items-center cursor-pointer',
          { 'bg-zinc-900': !darkTheme, 'bg-zinc-50': darkTheme }
        )}
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? (
          <SvgComponent name='sun' className='h-5 w-5 text-yellow-500' />
        ) : (
          <SvgComponent name='moon' className='h-5 w-5 text-yellow-500' />
        )}
      </span>
    </div>
  );
};

export default SwitchTheme;
