import Layout from '~/components/Layout';
import { registerSchema } from '~/validators';
import { IRegister } from '~/interface';
import SvgComponent from '~/components/SvgComponent';
import { authService } from '~/services';
import { showToast } from '~/libs';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegisterContainer: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });
  const { t } = useTranslation();
  const router = useRouter();

  const onSubmit = async (dataRegister: IRegister) => {
    const { status, data } = await authService.register(dataRegister);

    if (status < 300) {
      showToast(status, 'Register complete, please login!');
      router.push('/');
    } else {
      showToast(status, data.message);
    }
  };

  return (
    <Layout showFooter={false} showHeader={false} showSidebar={false}>
      <div className='bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center dark:bg-slate-800'>
        <div className='bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8 rounded-sm dark:bg-slate-700'>
          <div className='text-center w-full font-bold text-3xl text-gray-600 p-4 dark:text-gray-200'>
            REGISTER
          </div>
          <div className='w-full bg-gray-200 my-3 h-[1px]'></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4 px-0 py-4'>
              <div className='pb-4 relative'>
                <label className='text-gray-700 dark:text-gray-200'>
                  Email address
                </label>
                <SvgComponent
                  name='email-symbol'
                  className='font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11'
                />
                <input
                  className='py-2 pl-10 border border-gray-200 w-full rounded-sm'
                  placeholder='Email address'
                  type='text'
                  autoComplete='email'
                  {...register('email')}
                />
                <p className='text-sm text-red-500 italic absolute'>
                  {errors.email?.message && t(errors.email.message)}
                </p>
              </div>
              <div className='pb-4 relative'>
                <label className='text-gray-700 dark:text-gray-200'>Name</label>
                <SvgComponent
                  name='user'
                  className='font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11'
                />
                <input
                  className='py-2 pl-10 border border-gray-200 w-full rounded-sm'
                  placeholder='Name'
                  type='text'
                  autoComplete='name'
                  {...register('name')}
                />
                <p className='text-sm text-red-500 italic absolute'>
                  {errors.name?.message && t(errors.name.message)}
                </p>
              </div>
              <div className='pb-4 relative'>
                <label className='text-gray-700 dark:text-gray-200'>
                  Password
                </label>
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
                      min: 8,
                      max: 100,
                    })}
                </p>
              </div>
              <div className='pb-4 relative'>
                <label className='text-gray-700 dark:text-gray-200'>
                  Confirm password
                </label>
                <SvgComponent
                  name='lock'
                  className='font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11'
                />
                <input
                  className='py-2 pl-10 border border-gray-200 w-full rounded-sm'
                  placeholder='Confirm password'
                  type='password'
                  autoComplete='confirm-password'
                  {...register('confirmPassword')}
                />
                <p className='text-sm text-red-500 italic absolute'>
                  {errors.confirmPassword?.message &&
                    t(errors.confirmPassword.message)}
                </p>
              </div>
              <button
                className='text-white p-2 bg-red-500 hover:bg-red-400 rounded-sm duration-100 ease-in-out flex flex-row justify-center items-center'
                type='submit'
              >
                <SvgComponent name='login' className='h-5 w-5' />
                Register
              </button>
              <p className='dark:text-gray-200 text-gray-700'>
                If you already have account,
                <Link href='/login'>
                  <a className='px-1 text-indigo-500 underline hover:text-indigo-400 italic'>
                    go to login
                  </a>
                </Link>
                !
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterContainer;
