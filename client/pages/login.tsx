import LoginContainer from '~/containers/LoginContainer';
import { userService } from '~/services';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
  res,
  req,
}) => {
  const resData = await userService.getUser(req.headers.cookie);

  if (resData.status <= 300 && resData.data) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  res.setHeader('Cache-Control', 's-maxage=86400');

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Login;
