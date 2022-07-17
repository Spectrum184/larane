import SvgComponent from '../SvgComponent';
import { appStore } from '~/store';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { user } = appStore((state) => state);
  const router = useRouter();

  return (
    <div className='px-6 md:px-6 xl:px-9 flex justify-between items-center h-16 border-b-[1px] fixed top-0 left-0 w-full shadow-sm'>
      <div
        className='relative h-9 w-9 cursor-pointer'
        onClick={() => router.push('/')}
      >
        <Image
          src='/images/logo.jpeg'
          alt='logo'
          className='rounded-md hidden'
          layout='fill'
        />
      </div>
      <div className='flex justify-between items-center h-9 rounded-full w-80 border px-3'>
        <SvgComponent name='search' className='h-5 w-5 text-gray-500' />
        <input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='ml-4 w-60 h-full outline-none font-light text-base border-none flex-1'
        />
        {searchValue && (
          <span onClick={() => setSearchValue('')}>
            <SvgComponent
              name='x'
              className='h-5 w-5 text-gray-500 cursor-pointer hover:opacity-90'
            />
          </span>
        )}
      </div>
      <div className='flex justify-center items-center'>
        <div className=''>
          <SvgComponent name='bell' className='h-6 w-6 mr-4 text-gray-500' />
        </div>
        <span className='relative h-9 w-9 cursor-pointer rounded-full border hover:opacity-80'>
          <Image
            src={user.avatar ? user.avatar : '/images/avatar.jpeg'}
            alt='avatar'
            className='rounded-full hidden'
            layout='fill'
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
