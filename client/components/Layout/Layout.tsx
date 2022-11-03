import Header from '../Header';
import Footer from '../Footer';
import SwitchTheme from '../SwitchTheme';
import Sidebar from '../Sidebar';
import React, { FC, useState } from 'react';
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
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <div
      className={clsx('min-h-screen flex flex-col font-sans', {
        dark: darkTheme,
      })}
    >
      {showHeader && <Header />}
      <div
        className={clsx('dark:bg-gray-900', {
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
      <SwitchTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
