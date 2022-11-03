import SidebarItem from './SidebarItem';
import { ADMIN_ROUTER, USER_ROUTER } from '~/constants';
import { appStore } from '~/store';
import React from 'react';

const Sidebar = () => {
  const { user } = appStore((state) => state);
  const routes = user.role === 'BALL_BALL' ? USER_ROUTER : ADMIN_ROUTER;

  return (
    <div className='fixed left-0 flex flex-col w-24 px-2 dark:text-white'>
      {routes.map((item, index) => (
        <SidebarItem
          key={index}
          name={item.name}
          title={item.title}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Sidebar;
