import RegisterContainer from '~/containers/RegisterContainer';
import { userService } from '~/services';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
  res,
  req,
}) => {
  const { data, status } = await userService.getUser(req.headers.cookie);

  if (status <= 300 && data) {
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
export default Register;
