import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import 'moment/locale/vi';
import 'moment/locale/ja';

import { authService } from '~/services';
import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';
import { useCallback, useEffect } from 'react';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import moment from 'moment';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getCsrfToken = useCallback(async () => await authService.getCsrf(), []);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    moment.locale(router.locale);
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
