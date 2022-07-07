import SidebarItem from './SidebarItem';
import { ADMIN_ROUTER } from '~/constants';
import React from 'react';

const Sidebar = () => {
  return (
    <div className='fixed left-0 flex flex-col w-24 px-2'>
      {ADMIN_ROUTER.map((item, index) => (
        <SidebarItem key={index} name={item.name} title={item.title} />
      ))}
    </div>
  );
};

export default Sidebar;
