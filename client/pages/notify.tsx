import NotifyContainer from '~/containers/NotifyContainer';
import { userService } from '~/services';
import { appStore } from '~/store';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';

const Notify: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  appStore((state) => state.setUser)(user);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Notification</title>
      </Head>
      <NotifyContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
  res,
  req,
}) => {
  const { status, data } = await userService.getUser(req.headers.cookie);

  res.setHeader('Cache-Control', 's-maxage=86400');

  if (status >= 400) {
    res.writeHead(302, { Location: '/login' });
    res.end();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      user: data,
    },
  };
};

export default Notify;
