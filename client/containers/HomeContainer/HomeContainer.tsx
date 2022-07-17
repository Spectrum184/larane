import Layout from '~/components/Layout';
import { useTask } from '~/hooks';
import React, { FC } from 'react';

const HomeContainer: FC = () => {
  const { tasks, isLoading, isError } = useTask();

  console.log({ tasks, isLoading, isError });

  return (
    <Layout>
      <h2>Ok</h2>
    </Layout>
  );
};

export default HomeContainer;
