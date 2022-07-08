import Layout from '~/components/Layout';
import SvgComponent from '~/components/SvgComponent';
import { ILogin } from '~/interface';
import { loginSchema } from '~/validators';
import { authService } from '~/services';
import { showToast } from '~/libs';
import Link from 'next/link';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';

const LoginContainer: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });
  const { t } = useTranslation();

  const onSubmit = async (data: ILogin) => {
    const res = await authService.login(data);
    showToast(res.status, res.data.message);
  };

  return (
    <Layout showFooter={false} showHeader={false} showSidebar={false}>
      <div className='bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center'>
        <div className='bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8 rounded-sm'>
          <div className='text-center w-full font-bold text-3xl text-gray-600 p-4'>
            LOGIN
          </div>
          <div className='w-full bg-gray-200 my-3 h-[1px]'></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4 px-0 py-4'>
              <div className='pb-5 relative'>
                <label className='text-gray-700'>Email address</label>
                <SvgComponent
                  name='email-symbol'
                  className='font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11'
                />
                <input
                  className='py-2 pl-10 border border-gray-200 w-full rounded-sm'
                  placeholder='Email address'
                  type='text'
                  autoComplete='current-username'
                  {...register('email')}
                />
                <p className='text-sm text-red-500 italic absolute'>
                  {errors.email?.message && t(errors.email.message)}
                </p>
              </div>
              <div className='pb-5 relative'>
                <label className='text-gray-700'>Password</label>
                <SvgComponent
                  name='lock'
                  className='font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11'
                />
                <input
                  className='py-2 pl-10 border border-gray-200 w-full rounded-sm'
                  placeholder='Password'
                  type='password'
                  autoComplete='current-password'
                  {...register('password')}
                />
                <p className='text-sm text-red-500 italic absolute'>
                  {errors.password?.message &&
                    t(errors.password.message, {
                      min: 4,
                      max: 100,
                    })}
                </p>
              </div>
              <button
                className='text-white p-2 bg-red-500 hover:bg-red-400 rounded-sm duration-100 ease-in-out flex flex-row justify-center items-center'
                type='submit'
              >
                <SvgComponent name='login' className='h-5 w-5' />
                Login
              </button>
              <Link href='/register'>
                <a className='text-white p-2 bg-indigo-500 hover:bg-indigo-400 rounded-sm duration-100 ease-in-out flex flex-row justify-center items-center'>
                  <SvgComponent name='register' className='h-5 w-5' />
                  Register
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginContainer;
