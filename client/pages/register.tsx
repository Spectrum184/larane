import RegisterContainer from '~/containers/RegisterContainer';
import { userService } from '~/services';
import { appStore } from '~/store';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';

const Register: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  appStore((state) => state.setUser)(user);

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

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      user: data,
    },
  };
};
export default Register;
