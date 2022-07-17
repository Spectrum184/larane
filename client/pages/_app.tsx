import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import 'dayjs/locale/vi';

import { authService } from '~/services';
import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';
import { useCallback, useEffect } from 'react';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';

NProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getCsrfToken = useCallback(async () => await authService.getCsrf(), []);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    dayjs.locale(router.locale);
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router]);

  useEffect(() => {
    getCsrfToken();
  }, [getCsrfToken]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default appWithTranslation(MyApp);
