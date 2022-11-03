import SvgComponent from '../SvgComponent';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

interface PropsType {
  name: string;
  title: string;
  path: string;
}

const SidebarItem: FC<PropsType> = ({ name, title, path }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div
      className={clsx(
        'w-full h-20 my-2 flex items-center flex-col justify-center rounded-xl cursor-pointer',
        {
          'bg-gray-200 dark:bg-gray-800':
            name === 'home'
              ? router.pathname === '/'
              : router.pathname.includes(name),
        }
      )}
      onClick={() => router.push(path)}
    >
      <SvgComponent name={name} className='w-5 h-5 text-gray-500' />
      <span className='mt-2 text-sm font-normal'>{t(title)}</span>
    </div>
  );
};

export default SidebarItem;
