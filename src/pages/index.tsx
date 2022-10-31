import React from 'react';
import { Header } from '../components/header/header';
import ReportsPage from './reportsPage/ReportsPage';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <ReportsPage />
    </>
  );
};

export default Home;
