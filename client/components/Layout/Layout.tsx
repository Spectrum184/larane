import Header from '../Header';
import Footer from '../Footer';
import SwitchTheme from '../SwitchTheme';
import Sidebar from '../Sidebar';
import { appStore } from '~/store';
import React, { FC } from 'react';
import clsx from 'clsx';

interface PropsType {
  showHeader?: boolean;
  children: React.ReactNode;
  showFooter?: boolean;
  showSidebar?: boolean;
}

const Layout: FC<PropsType> = ({
  showHeader = true,
  children,
  showFooter = true,
  showSidebar = true,
}) => {
  const user = appStore((state) => state.user);

  return (
    <div
      className={clsx('min-h-screen flex flex-col', {
        dark: user.theme === 0,
      })}
    >
      {showHeader && <Header />}
      <div
        className={clsx({
          'mt-16 min-h-layout': showHeader,
          'min-h-screen': !showHeader,
        })}
      >
        {showSidebar && <Sidebar />}
        <div
          className={clsx({
            'ml-24 p-2': showSidebar,
          })}
        >
          {children}
        </div>
      </div>
      <SwitchTheme />
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
