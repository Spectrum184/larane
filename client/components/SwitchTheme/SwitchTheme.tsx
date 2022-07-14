import SvgComponent from '../SvgComponent';
import { appStore } from '~/store';
import React, { FC } from 'react';
import clsx from 'clsx';

const SwitchTheme: FC = () => {
  const { user, setTheme } = appStore((state) => state);

  return (
    <div className='fixed bottom-32 right-4 flex flex-col'>
      <span
        className={clsx(
          'rounded-full shadow-md w-12 h-12 flex justify-center items-center cursor-pointer',
          { 'bg-zinc-900': user.theme === 1, 'bg-zinc-50': user.theme === 0 }
        )}
        onClick={() => setTheme(!user.theme)}
      >
        {user.theme === 0 ? (
          <SvgComponent name='sun' className='h-5 w-5 text-yellow-500' />
        ) : (
          <SvgComponent name='moon' className='h-5 w-5 text-yellow-500' />
        )}
      </span>
    </div>
  );
};

export default SwitchTheme;
